<?php

namespace App\Services;

use GuzzleHttp\Client;
use Brick\Math\BigInteger;
use App\Models\ActualBalance;
use App\Models\BlockchainLog;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use Brick\Math\Exception\MathException;
use GuzzleHttp\Exception\GuzzleException;

class BlockchainService
{
    public function __construct(
        protected Client $client,
        protected string $systemWallet
    ) {
    }

    public function getChainId(): array
    {
        return ['CHAINID' => config('maran.CHAINID')];
    }

    public function getStorageAddress(): array
    {
        return ['STORAGE_ADDR' => config('maran.STORAGE_ADDR')];
    }

    public function getTargetAddress(): array
    {
        return ['MARAN_TARGET' => config('maran.MARAN_TARGET')];
    }

    public function getTokensContractAddresses(): array
    {
        return config('maran.contract_addresses');
    }

    /**
     * @throws GuzzleException
     */
    public function changeWallet($oldWallet, $newWallet): array
    {
        $params = [
            'query' => [
                'oldAddr' => $oldWallet,
                'newAddr' => $newWallet,
            ]
        ];

        $response = $this->client->request('GET', '/changeAddress', $params)->getBody()->getContents();

        return json_decode($response, true);
    }

    /**
     * @throws GuzzleException
     */
    public function getBalance($user): array
    {
        $params = [
            'query' => [
                'owner' => $user->wallet,
            ]
        ];

        $response = $this->client->request('GET', '/getBalance', $params)->getBody()->getContents();

        return json_decode($response, true);
    }

    /**
     * @throws GuzzleException
     */
    public function getActualBalance($user)
    {
        $balanceResponse = $this->getBalance($user);

        if (
            isset(
                $balanceResponse['result'],
                $balanceResponse['result']['res'],
                $balanceResponse['result']['res'][1],
                $balanceResponse['result']['res'][1]['hex'],
                $balanceResponse['result']['status']
            ) && $balanceResponse['result']['status'] == 'responded'
        ) {
            $currentBalance = floor(
                number_format(
                    hexdec($balanceResponse['result']['res'][1]['hex']) * 10 ** -18,
                    1,
                    '.',
                    ''
                )
            );
        } elseif (isset($balanceResponse['result']['status']) && $balanceResponse['result']['status'] != 'responded') {
            $balance = ActualBalance::where('user', $user->id)->first();
            Redis::hset('balance', $user->id, $balance->real_balance);
            return $balance;
        }

        $balance = ActualBalance::updateOrCreate(
            [
                'user' => $user->id,
            ],
            [
                'real_balance' => $currentBalance ?? 0
            ]
        );

        Redis::hset('balance', $user->id, $balance->real_balance);

        return $balance;
    }

    /**
     * @throws GuzzleException|MathException
     */
    public function freeze($user, $amount): array
    {
        $params = [
            'query' => [
                'to' => $user->wallet,
                'amount' => BigInteger::of($amount * 10 ** 18)->__toString(),
            ]
        ];

        $response = $this->client->request('GET', '/freeze', $params)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => $user->id,
            'method' => 'freeze',
            'params' => json_encode($params),
            'response' => $response,
        ]);

        return json_decode($response, true);
    }

    /**
     * @throws GuzzleException|MathException
     */
    public function unfreeze($user, $amount): array
    {
        $params = [
            'query' => [
                'to' => $user->wallet,
                'amount' => BigInteger::of($amount * 10 ** 18)->__toString(),
            ]
        ];

        $response = $this->client->request('GET', '/unfreeze', $params)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => $user->id,
            'method' => 'unfreeze',
            'params' => json_encode($params),
            'response' => $response,
        ]);

        return json_decode($response, true);
    }

    /**
     * @throws GuzzleException|MathException
     */
    public function loss($user, $amount): array
    {
        $params = [
            'query' => [
                'from' => $user->wallet,
                'to' => $this->systemWallet,
                'amount' => BigInteger::of($amount * 10 ** 18)->__toString(),
            ]
        ];

        $response = $this->client->request('GET', '/transferWin', $params)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => $user->id,
            'method' => 'transferWin',
            'params' => json_encode($params),
            'response' => $response,
        ]);

        return json_decode($response, true);
    }

    /**
     * @throws MathException
     * @throws GuzzleException
     */
    public function win($user, $bet, $winRemain): bool
    {
        $params = [
            'query' => [
                'from' => $this->systemWallet,
                'to' => $user->wallet,
                'amount' => BigInteger::of($winRemain * 10 ** 18)->__toString(),
            ]
        ];

        $response = $this->client->request('GET', '/internalTransfer', $params)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => $user->id,
            'method' => 'internalTransfer',
            'params' => json_encode($params),
            'response' => $response,
        ]);

        $response = json_decode($response, true);
        if (!empty($response['result']) && !empty($response['result']['status']) && $response['result']['status'] != 'failed') {

            if ($bet) {
                sleep(10);

                $this->unfreeze($user, $bet);
            }

            return true;
        }

        Log::error('BlockchainService win error', array_merge($params, $response));

        return false;
    }

    /**
     * @throws GuzzleException|MathException
     */
    public function deposit($user, $amount): bool
    {
        $params = [
            'query' => [
                'to' => $user->wallet,
                'amount' => BigInteger::of($amount * 10 ** 18)->__toString(),
            ]
        ];

        $response = $this->client->request('GET', '/depositToAddress', $params)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => $user->id,
            'method' => 'depositToAddress',
            'params' => json_encode($params),
            'response' => $response,
        ]);

        $response = json_decode($response, true);
        if (!empty($response['result']) && !empty($response['result']['status']) && $response['result']['status'] != 'failed') {
            return true;
        }

        Log::error('BlockchainService deposit error', array_merge($params, $response));

        return false;
    }

    /**
     * @throws GuzzleException|MathException
     */
    public function isWithdrawPossible($user, $amount): array
    {
        $params = [
            'query' => [
                'from' => $user->wallet,
                'amount' => BigInteger::of($amount * 10 ** 18)->__toString(),
            ]
        ];

        $response = $this->client->request('GET', '/isWithdrawPossible', $params)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => $user->id,
            'method' => 'isWithdrawPossible',
            'params' => json_encode($params),
            'response' => $response,
        ]);

        return json_decode($response, true);
    }

    /**
     * @throws GuzzleException|MathException
     */
    public function canWithdraw($user, $amount): bool
    {
        $withdrawCheck = $this->isWithdrawPossible($user, $amount);
        if (!empty($withdrawCheck['result']) && !empty($withdrawCheck['result']['res'])) {
            return true;
        }

        Log::error('BlockchainService withdraw error', $withdrawCheck);

        return false;
    }

    /**
     * @throws GuzzleException|MathException
     */
    public function withdraw($user, $amount): bool
    {
        $params1 = [
            'query' => [
                'from' => $user->wallet,
                'amount' => BigInteger::of($amount * 10 ** 18)->__toString(),
            ]
        ];

        $params2 = [
            'query' => [
                'from' => $user->wallet,
                'amount' => $amount,
            ]
        ];

        $step1 = $this->client->request('GET', '/handleWithdraw', $params1)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => $user->id,
            'method' => 'handleWithdraw',
            'params' => json_encode($params1),
            'response' => $step1,
        ]);

        $responseStep1 = json_decode($step1, true);
        if (
            !empty($responseStep1['result']) &&
            (empty($responseStep1['result']['status']) || $responseStep1['result']['status'] != 'failed') &&
            !empty($responseStep1['result']['res']) &&
            !empty($responseStep1['result']['res']['hash'])
            ) {
            sleep(5);

            do {
                $status = $this->checkTx($responseStep1['result']['res']['hash']);
            } while ($status == -1);

            if ($status) {
                sleep(10);

                $step2 = $this->client->request('GET', '/withdraw', $params2)->getBody()->getContents();

                BlockchainLog::create([
                    'user_id' => $user->id,
                    'method' => 'withdraw',
                    'params' => json_encode($params2),
                    'response' => $step2,
                ]);

                $responseStep2 = json_decode($step2, true);

                return true;
            }

            Log::error('BlockchainService withdraw error',
                array_merge($params1, $params2, $responseStep1, ['status' => $status], $responseStep2 ?? [])
            );

            return false;
        }

        Log::error('BlockchainService withdraw error', array_merge($params1, $params2, $responseStep1, $responseStep2 ?? []));

        return false;
    }

    public function checkTx(string $txId)
    {
        $params = [
            'query' => [
                'tx' => $txId
            ]
        ];

        $result = $this->client->request('GET', '/checkTx', $params)->getBody()->getContents();

        BlockchainLog::create([
            'user_id' => 0,
            'method' => 'checkTx',
            'params' => json_encode($params),
            'response' => $result,
        ]);

        $response = json_decode($result, true);

        if (
            !empty($response['result']) &&
            !empty($response['result']['blockHash']) &&
            isset($response['result']['status'])
        ) {
            return $response['result']['status'];
        }

        return -1;
    }
}
