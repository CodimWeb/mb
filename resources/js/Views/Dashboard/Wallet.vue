<template>
    <div class="dashboard-main">
        <h1 class="h3_semibold dashboard__heading" v-text="$t('Wallet')"/>
        <div class="flex-row dashboard-main__actions">
            <div class="dashboard-main__balance">
                <div class="dashboard-main__balance-icon"/>
                <div class="flex-column dashboard-main__balance-content">
                    <div class="t2_regular dashboard-main__balance-text" v-text="$t('Current balance')"/>
                    <div class="h3_semibold dashboard-main__balance-value"
                         v-text="getActualBalance.real_balance + ' MARAN'"/>
                    <span v-if="getActualBalance.bonus">&nbsp;(+{{ getActualBalance.bonus }})</span>
                </div>
            </div>
            <div class="flex-row dashboard-main__buttons" v-if="windowWidth > 576">
                <div class="wallet-summ">
                    <input
                        :placeholder="$t('Enter amount')"
                        :class="{
                        'input-auth': true,
                        'wallet-summ__input': true,
                    }"
                        ref="coin_summ"
                        type="number"
                        min="0"/>
                </div>
<!--                <button-->
<!--                    class="betting-button dashboard-main__button dashboard-main__button-add"-->
<!--                    v-text="$t('Add funds')"-->
<!--                    @click="addFundsWithApprove"-->
<!--                />-->
                <button v-if="isLoadingWithdraw || !getCanWithdraw" class="betting-button dashboard-main__button" v-text="$t('Loading') + '...'" />
                <button v-else
                    class="betting-button dashboard-main__button dashboard-main__button-withdraw"
                    v-text="$t('Withdraw')"
                    @click="withdraw"
                />
                <router-link
                    :to="{name: 'dashboard-history'}"
                    class="betting-button dashboard-main__button dashboard-main__button-detalisation"
                    v-text="$t('Details')"/>
                <button
                    class="betting-button dashboard-main__button dashboard-main__button-add"
                    v-text="$t('Add funds')"
                    @click="toggleAddFunds"/>
                <!--                <button
                                    class="betting-button dashboard-main__button dashboard-main__button-withdraw"
                                    v-text="$t('Withdraw')"
                                    @click="toggleWithdrawFunds"/>-->
            </div>
        </div>

        <div class="flex-column dashboard-main__mobile-buttons" v-if="windowWidth <= 576">
            <div class="dashboard-main__mobile-buttons-grid-2">
                <!-- <button
                    class="betting-button dashboard-main__button dashboard-main__button-add"
                    v-text="$t('Add funds')"
                    @click="toggleAddFunds"/> -->
                <!-- <button
                    class="betting-button dashboard-main__button dashboard-main__button-withdraw"
                    v-text="$t('Withdraw')"
                    @click="toggleWithdrawFunds"/> -->
                <div class="wallet-summ">
                    <input
                        placeholder="Enter amount"
                        :class="{
                        'input-auth': true,
                        'wallet-summ__input': true,
                    }"
                        ref="coin_summ"
                        type="number"
                        min="0"/>
                </div>
                <button
                    class="betting-button dashboard-main__button dashboard-main__button-add"
                    v-text="$t('Add funds')"
                    @click="addFundsWithApprove"/>

                <button v-if="isLoadingWithdraw" class="betting-button dashboard-main__button" v-text="$t('Loading') + '...'" />
                <button v-else
                    class="betting-button dashboard-main__button dashboard-main__button-withdraw"
                    v-text="$t('Withdraw')"
                    @click="withdraw"/>
            </div>
            <router-link
                :to="{name: 'dashboard-history'}"
                class="betting-button dashboard-main__button dashboard-main__button-detalisation"
                v-text="$t('Details')"/>
        </div>

        <!-- promo -->
        <div class="flex-column dashboard-main__promo">
            <span class="h4_medium dashboard-main__promo-heading" v-text="$t('Promotions')"/>
            <div class="flex-row dashboard-main__promo-container">
                <div class="input-auth-group">
                    <input
                        type="text"
                        :class="{
                'input-auth': true,
                'dashboard-main__promo-input': true,
                'input-auth--filled': promo_code !== null && promo_code !== ''
              }"
                        v-model="promo_code"
                        ref="promo_code"
                    />
                    <span class="input-auth-name" @click="$refs.promo_code.focus()" v-text="$t('Enter a promo code')"/>
                </div>
                <button class="betting-button dashboard-main__promo-button" @click="promoSubmit" v-text="$t('Submit')"/>
            </div>
        </div>

        <!-- popups -->
        <AddFunds v-if="addFundsIsOpen" @toggle-add-funds="toggleAddFunds"/>
<!--        <WithdrawFunds v-if="withdrawFundsIsOpen" @toggle-withdraw="toggleWithdrawFunds"/>-->
    </div>
</template>

<script>
import Nav from "../../components/Dashboard/Nav.vue";
import AddFunds from "../../components/Dashboard/AddFunds.vue";
import WithdrawFunds from "../../components/Dashboard/WithdrawFunds.vue";
import {mapGetters} from "vuex";
import {useWindowSize} from "vue-window-size";
import axios from 'axios';

export default {
    data() {
        return {
            addFundsIsOpen: false,
            withdrawFundsIsOpen: false,
            promo_code: null,
            coin_summ: 0,
            isLoadingWithdraw: false,
        }
    },
    methods: {
        toggleAddFunds() {
            this.addFundsIsOpen = !this.addFundsIsOpen
        },
        toggleWithdrawFunds() {
            if (this.showBalance === 0) {
                this.showError(this.$t('Top up your balance to perform this operation'))
                return false;
            }
            this.withdrawFundsIsOpen = !this.withdrawFundsIsOpen
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
        },
        showSuccess(text) {
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
        promoSubmit() {
            if (this.promo_code === null || !this.promo_code.length) {
                this.showError("Input your promo code")
                return false;
            }

            axios
                .post('/api/actual/promo-code/submit', {code: this.promo_code})
                .then((res) => {
                    if (res.data.success === false) {
                        this.showError("You cannot use this promo code")
                    } else {
                        this.showSuccess("Promo code successfully applied")
                        this.promo_code = null;
                        this.$store.dispatch("fetchActualBalance");
                    }
                })
                .catch((err) => {
                    this.showError("You cannot use this promo code")

                    if (err.statusCode === 401) {
                        this.showError("Please, re-auth first")
                    }
                })
        },

        addFunds() {
            axios.post('/api/actual/adding-funds/new-payment', {
                summ: this.$refs.coin_summ.value,
            }).then((res) => {
                this.$refs.coin_summ.value = '';
                this.showError(res.data.message)
            })
            .catch((err) => {
                this.showError(this.$t(err.response.data.message))
                console.log(err)
            })
        },

        addFundsWithApprove() {
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

            console.log(CHAINID)

            const contractInstance = new web3.eth.Contract(abi, MARAN_ADDR);

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
                const tx =  tokenAddr ? {
                    from: account,
                    to: contractInstance._address, //tokenAddr,
                    data: contractInstance.methods.transfer(MARAN_TARGET, web3.utils.toWei( amount.toString() ) ).encodeABI(),
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

                await axios.post(`/api/deposit/accept`, {
                    txHash: txHash,
                    wallet: account,
                    amount: amount.toString(),
                }).then((res) => {
                    this.showError(this.$t(res.data.message))
                    console.log(res.data)
                }).catch((err) => {
                    this.showError(this.$t(err.response.data.message))
                    console.log(err)
                })
            }

            if (typeof window.ethereum !== 'undefined') {
                getAccount().then(v => switchChain()).then(v => approve(this.$refs.coin_summ.value, MARAN_ADDR));
            } else {
                console.log('MetaMask not detected!');
            }
        },

        withdraw() {
            this.isLoadingWithdraw = true;
            axios.post('/api/actual/withdraw-funds/new', {
                summ: this.$refs.coin_summ.value,
            }).then((res) => {
                this.$refs.coin_summ.value = '';
                this.showError(this.$t(res.data.message))
            })
            .catch((err) => {
                let message = err.response.data.message;
                if(message.indexOf('Minimum withdraw amount is') !== -1) {
                    let summ = parseInt(message.replace(/[^\d]/g, ''))
                    let index = message.indexOf(summ)
                    message = message.substring(0, index -1)
                    this.showError(`${this.$t(message)} ${summ} MARAN`)
                }
                else {
                    this.showError(this.$t(err.response.data.message));
                }
                console.log(err)
            })
            .finally(() => {
                setTimeout(() => {
                    this.isLoadingWithdraw = false
                }, 180000);
            })
        }
    },
    components: {
        Nav,
        AddFunds,
        WithdrawFunds
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        ...mapGetters(["getActualBalance", "getEnvVars", "getCanWithdraw"]),
    },
    mounted() {
        this.$store.dispatch("fetchEnvVars");

        if (this.user) {
            this.$store.dispatch("fetchActualBalance");
            this.$store.dispatch("checkCanWithdraw");
        }
    },
    setup() {
        const {width, height} = useWindowSize();
        return {
            windowWidth: width,
            windowHeight: height,
        };
    },
}
</script>
