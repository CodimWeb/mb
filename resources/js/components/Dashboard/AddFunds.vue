<template>
  <div class="dashboard-add-funds">
    <div class="dashboard-add-funds__overlay" @click="$emit('toggleAddFunds')"/>
    <div class="flex-column dashboard-add-funds__window">
      <div class="dashboard-add-funds__close" @click="$emit('toggleAddFunds')"/>
      <span class="h4_bold dashboard-add-funds__heading" v-if="!success" v-text="$t('Top up your balance')"/>

      <div class="flex-column dashboard-add-funds__step" v-if="step === 1">
        <div class="dashboard-add-funds__dropdown" v-if="coinsList.length">
          <div
              :class="{
                'flex-row dashboard-add-funds__dropdown-selected': true,
                'dashboard-add-funds__dropdown-selected--active': isCoinsListVisible
              }"
              @click="toggleCoinsList">
            <img :src="'/coins/' + coinCode + '.svg'" :alt="coinCode" class="dashboard-add-funds__dropdown-icon"
                 v-if="this.coinCode.length"/>
            {{ this.coinCode === '' ? $t('Select the deposit coin') : this.coinCode }}
          </div>
          <div class="flex-column dashboard-add-funds__dropdown-list" v-if="isCoinsListVisible">
            <div
                v-for="coin in coinsList"
                :key="coin.code"
                @click="setCoin(coin.code)"
                class="flex-row dashboard-add-funds__dropdown-item">
              <img :src="'/coins/' + coin.code + '.svg'" :alt="coinCode" class="dashboard-add-funds__dropdown-icon"/>
              {{ coin.code + ' (' + coin.name + ')' }}
            </div>
          </div>
        </div>
        <div class="dashboard-add-funds__converter">
          <div class="flex-column dashboard-add-funds__converter-column">
            <div class="input-auth-group dashboard-add-funds__converter-input-group">
              <input
                  :class="{
                    'input-auth': true,
                    'input-auth--filled': filled.coin_field
                  }"
                  ref="coin_amount"
                  type="number"
                  v-model="coin_amount"
                  min="0"
                  @focusout="checkConverterFields"
                  @keyup="calculateCurrencyCount"/>
              <div class="input-auth-name" v-text="$t('Deposit amount')" @click="$refs.coin_amount.focus()"/>
            </div>
          </div>
          <div class="flex-column dashboard-add-funds__converter-column">
            <img src="../../../img/converter-icon.svg" alt="Converter" class="dashboard-add-funds__converter-icon"/>
          </div>
          <div class="flex-column dashboard-add-funds__converter-column">
            <div class="input-auth-group dashboard-add-funds__converter-input-group">
              <input
                  :class="{
                    'input-auth': true,
                    'input-auth--filled': filled.maran_field
                  }"
                  ref="maran_amount"
                  type="number"
                  disabled
                  min="0"
                  v-model="maran_amount"
                  />
              <div class="input-auth-name" v-text="$t('You will receive')" @click="$refs.maran_amount.focus()"/>
            </div>
          </div>
        </div>
        <div class="flex-row dashboard-add-funds__button-row">
          <div class="dashboard-add-funds__progress dashboard-add-funds__progress--half">1/2</div>
          <button class="betting-button" v-text="$t('Next')" @click="nextStep"/>
        </div>
      </div>

      <div class="dashboard-add-funds__step" v-if="step === 2">
        <div class="dashboard-add-funds__checking">
          <div class="flex-column dashboard-add-funds__checking-column">
            <span class="t1_semibold dashboard-add-funds__col-name" v-text="$t('Deposit amount') + ` (${coinCode})`"/>
            <div class="flex-row t1_regular dashboard-add-funds__col-info">
              <img :src="'/coins/' + coinCode + '.svg'" :alt="coinCode" class="dashboard-add-funds__dropdown-icon"/>
              {{ coin_amount + ' ' + coinCode }}
            </div>
          </div>
          <div class="flex-column dashboard-add-funds__checking-column">
            <span class="t1_semibold dashboard-add-funds__col-name" v-text="$t('Deposit amount') + ' (MARAN)'"/>
            <div class="flex-row t1_regular dashboard-add-funds__col-info">
                <!-- vite problem -->
              <img src="../../../img/coins/MARAN.svg" alt="MARAN" class="dashboard-add-funds__dropdown-icon"/>
              {{ maran_amount + ' MARAN' }}
            </div>
          </div>
        </div>
        <div class="flex-row dashboard-add-funds__button-row">
          <div class="dashboard-add-funds__progress">2/2</div>
          <div class="flex-row">
            <span class="t1_semibold dashboard-add-funds__button-back" v-text="$t('Back')" @click="backStep"/>
            <button class="betting-button dashboard-add-funds__button-send" v-text="$t('Send')" @click="addFundsWithApprove(coin_amount, coinCode)"/>
          </div>
        </div>
      </div>

      <div class="flex-column dashboard-add-funds__success" v-if="success">
        <div
            class="flex-row h3_medium dashboard-add-funds__success-heading"
            v-text="$t('The request has been sent')"/>
        <div
            class="flex-row t1_regular dashboard-add-funds__success-message"
            v-text="$t('The balance will be replenished within 3 hours')"/>
        <img
            src="../../../img/add-funds-success.svg"
            class="dashboard-add-funds__success-image"
            :alt="$t('The request has been sent')"/>
        <button
            class="betting-button dashboard-add-funds__success-button"
            @click="$emit('toggleAddFunds')"
            v-text="$t('Close')"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      step: 1,
      coinCode: '',
      coinWallet: '',
      coinsList: [],
      isCoinsListVisible: false,
      maran_amount: null,
      coin_amount: null,
      tx_hash: '',
      maran_price: null,
      coin_price: null,
      transaction: null,
      filled: {
        coin_field: false,
        maran_field: false,
        tx: false
      },
      success: false
    }
  },
  methods: {
      addFundsWithApprove(amount, code) {
          console.log(amount)
          console.log(code)
          const abi = [
              {
                  "inputs": [],
                  "stateMutability": "nonpayable",
                  "type": "constructor"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "tokenOwner",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Approval",
                  "type": "event"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "from",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                      }
                  ],
                  "name": "OwnershipTransferred",
                  "type": "event"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "from",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Transfer",
                  "type": "event"
              },
              {
                  "inputs": [],
                  "name": "acceptOwnership",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "tokenOwner",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "time",
                          "type": "uint256"
                      }
                  ],
                  "name": "addToBlacklist",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "tokenOwner",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      }
                  ],
                  "name": "allowance",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "remaining",
                          "type": "uint256"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "approve",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      },
                      {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                      }
                  ],
                  "name": "approveAndCall",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "tokenOwner",
                          "type": "address"
                      }
                  ],
                  "name": "balanceOf",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "balance",
                          "type": "uint256"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "from",
                          "type": "address"
                      }
                  ],
                  "name": "blackcheck",
                  "outputs": [],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "tokenOwner",
                          "type": "address"
                      }
                  ],
                  "name": "blacklistOf",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "blacklistTime",
                          "type": "uint256"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "blacklisting",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "burnTokens",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "decimals",
                  "outputs": [
                      {
                          "internalType": "uint8",
                          "name": "",
                          "type": "uint8"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "subtractedTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "decreaseAllowance",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "addedTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "increaseAllowance",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "mintTokens",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address[]",
                          "name": "to",
                          "type": "address[]"
                      },
                      {
                          "internalType": "uint256[]",
                          "name": "values",
                          "type": "uint256[]"
                      }
                  ],
                  "name": "multiTransfer",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                      {
                          "internalType": "string",
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "newOwner",
                  "outputs": [
                      {
                          "internalType": "address",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "owner",
                  "outputs": [
                      {
                          "internalType": "address",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "tokenOwner",
                          "type": "address"
                      }
                  ],
                  "name": "removeFromBlacklist",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "running",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "startStopBlacklist",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "startStopContract",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                      {
                          "internalType": "string",
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [],
                  "name": "totalSupply",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "transfer",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "tokenAddress",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "transferAnyERC20Token",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "from",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "tokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "transferFrom",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "success",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "transferOwner",
                          "type": "address"
                      }
                  ],
                  "name": "transferOwnership",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
              }
          ];
          let account;
          const web3 = new Web3(Web3.givenProvider);

        console.log(this.getEnvVars)
        for (var i = 0; i < this.getEnvVars.length; i++) {
          if (this.getEnvVars[i][0] == 'CHAINID') {
            var CHAINID = this.getEnvVars[i][1];
          } else if (this.getEnvVars[i][0] == 'MARAN_ADDR') {
            var MARAN_ADDR = this.getEnvVars[i][1];
          } else if (this.getEnvVars[i][0] == 'MARAN_TARGET') {
            var MARAN_TARGET = this.getEnvVars[i][1];
          } else if (this.getEnvVars[i][0] == 'USDT_ADDR') {
            var USDT_ADDR = this.getEnvVars[i][1];
          } else if (this.getEnvVars[i][0] == 'FTM_ADDR') {
            var FTM_ADDR = this.getEnvVars[i][1];
          } else if (this.getEnvVars[i][0] == 'UNI_ADDR') {
            var UNI_ADDR = this.getEnvVars[i][1];
          } else if (this.getEnvVars[i][0] == 'ETH_ADDR') {
            var ETH_ADDR = this.getEnvVars[i][1];
          } else if (this.getEnvVars[i][0] == 'LINK_ADDR') {
            var LINK_ADDR = this.getEnvVars[i][1];
          }
        }

          var TOKEN = MARAN_ADDR;
          if (code == 'USDT') {
              TOKEN = USDT_ADDR;
          } else if (code == 'LINK') {
              TOKEN = LINK_ADDR;
          } else if (code == 'MATIC') {
              TOKEN = MATIC_ADDR;
          } else if (code == 'FTM') {
            TOKEN = FTM_ADDR;
          } else if (code == 'UNI') {
            TOKEN = UNI_ADDR;
          } else if (code == 'ETH') {
            TOKEN = ETH_ADDR;
          }

          const contractInstance = new web3.eth.Contract(abi, TOKEN);

          const getAccount = async () => {
              const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
              account = accounts[0];
          }

          const switchChain = async () => {
              await ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: CHAINID }],
              });
          }

          const approve = async (amount, tokenAddr) => {
              const tx = tokenAddr ? {
                  from: account,
                  to: contractInstance._address, //tokenAddr,
                  data: contractInstance.methods.transfer(MARAN_TARGET, tokenAddr == USDT_ADDR ?  web3.utils.toWei( amount.toString(), 'mwei' ) : web3.utils.toWei( amount.toString() ) ).encodeABI(),
                  //gasPrice: '0x1',
              } : {
                  from: account,
                  to: MARAN_TARGET,
                  value: web3.utils.toHex(web3.utils.toWei( amount.toString() )),
                  //gasPrice: '0x1',
              }

              const txHash = await ethereum.request({
                  method: 'eth_sendTransaction',
                  params: [tx],
              });

              console.log(txHash);
              await axios.post(`/api/deposit/swap/accept`, {
                txHash: txHash,
                wallet: account,
                amount: amount.toString(),
                token: code,
              }).then((res) => {
                this.showError(this.$t(res.data.message))
                console.log(res.data)
              }).catch((err) => {
                this.showError(this.$t(err.response.data.message))
                console.log(err)
              });

              this.$emit('toggleAddFunds')
          }

          if (typeof window.ethereum !== 'undefined') {
              getAccount().then(v => switchChain()).then(v => approve(amount, TOKEN));
          } else {
              console.log('MetaMask not detected!');
          }
      },
    nextStep() {
      if (this.step === 1) {
        if (this.maran_amount < 1 || this.coin_amount <= 0 || this.coinCode === '') {
          this.showError("Fill in the fields")
          return false;
        }
      }

      if (this.step === 2) {
        if (this.tx_hash === null) {
          this.showError("Введите hash транзакции для подтверждения платежа. Без него платеж не будет зачислен.")
          return false;
        } else {
          this.createTransaction()
        }
      }

      this.step += 1
    },
    backStep() {
      this.step -= 1
    },
    getCoinsList() {
      axios
          .get('/api/actual/adding-funds/coins/list')
          .then((res) => {
            this.coinsList = res.data
          })
          .catch((err) => {
            console.log(err)
          })
    },
    getMaranCourse() {
      axios.get('/api/actual/adding-funds/coins/price/MARAN')
          .then((res) => {
            if (res.status === 200) {
              this.maran_price = res.data.price;
            }
          })
          .catch((err) => {
            console.log(err)
          })
    },
    getCurrencyPrice() {
      axios
          .get(`/api/actual/adding-funds/coins/price/${this.coinCode}`)
          .then((res) => {
            this.coin_price = res.data.price;
            this.calculateCurrencyCount()
          })
          .catch((err) => {
            console.log(err)
          })
    },
    calculateCurrencyCount() {
      this.maran_amount = Math.round(this.coin_amount * this.coin_price / this.maran_price);
    },
    setCoin(coinCode) {
      this.coinCode = coinCode
      this.filled.maran_field = true
      this.toggleCoinsList()
      this.getCurrencyPrice()
      this.$refs.coin_amount.focus()

      // wallet
      this.coinsList.forEach((coin) => {
        if(coin.code === this.coinCode) {
          this.coinWallet = coin.wallet
        }
      })
    },
    toggleCoinsList() {
      this.isCoinsListVisible = !this.isCoinsListVisible
    },
    checkConverterFields() {
      if (this.coin_amount > 0) {
        this.filled.coin_field = true;
        this.filled.maran_field = true;
      }

      if (this.coin_amount < 0) {
        this.coin_amount = null
        this.maran_amount = null
      }

      this.calculateCurrencyCount()
    },
    checkTxField() {
      this.filled.tx = this.tx_hash.length > 5
    },
    copyWallet() {
      this.$refs.clone.focus();
      document.execCommand('copy');
      this.showMessage(this.$t('The contract address has been copied'))
    },
    async createTransaction() {
      await axios
          .post('/api/actual/adding-funds/new-payment', {
            unit: this.coinCode,
            amount: this.coin_amount,
            tx_hash: this.tx_hash
          })
          .then((res) => {
            this.success = true
          })
          .catch((err) => {
            console.log(err)
          })
    },
    showMessage(text) {
      this.$toast.success(text, {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    showError(text) {
      this.$toast.error(text, {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        ...mapGetters(["getEnvVars"]),
    },
  mounted() {
    this.getCoinsList()
    this.getMaranCourse()
  }
}
</script>
