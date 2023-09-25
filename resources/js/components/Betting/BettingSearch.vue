<template>
    <div class="container container-fw">
        <div class="betting-search">
            <div class="betting-search__container">
                <input v-model="message" placeholder="Search" @input="checkMessage" @focus="getDefaultResult" />
                <span v-if="message.length == 0" class="icon icon-search" @click="search(message)"></span>
                <span v-else class="icon icon-search-clean" @click="search('')"></span>

                <div v-if="isOpenResults" class="serach-result">

                    <div v-if="showLoader" class="search-loader">
                        <span class="betting-events__subcategory-icon betting-events__subcategory-icon--loading"></span>
                    </div>

                    <div v-if="searchVariants.length > 0" class="search-result__container">
                        <div v-for="item in searchVariants" :key="item.name">
                            <router-link
                                v-if="item.type == 'tournament'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-tournament',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_tournament: item.id,
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">
                                    <img src="../../../img/cup.png" alt="">
                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div class="search-result__item__country">
                                        <img :src="getCountryImg(item.country)" alt="">
                                        {{ item.country }}
                                    </div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link>
                            <router-link
                                v-if="item.type == 'team'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-team',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_name: item.name
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">
                                  <img v-if="item.team_logo" :src="`/storage/logos/${item.team_logo}`" />
                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div class="search-result__item__country">
                                        <img :src="getCountryImg(item.country)" alt="">
                                        {{ item.country }}
                                    </div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link >
                            <router-link
                                v-if="item.type == 'player'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-player',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_name: item.name
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">
                                    
                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div class="search-result__item__country">
                                        <img v-if="item.team_logo" :src="`/storage/logos/${item.team_logo}`">
                                        <img v-else-if="item.country" :src="getCountryImg(item.country)" alt="">
                                        {{ item.team_name }}
                                    </div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link>
                            <router-link
                                v-if="item.type == 'country'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-country',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_name: item.name,
                                        p_sport: item.sport_slug
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">
                                    <img :src="getCountryImg(item.name)" alt="">
                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>

                    <div v-else-if="defaultVariants.length > 0 && message.length < 3" class="search-result__container">
                        <div v-for="item in defaultVariants" :key="item.name">
                            <!-- tournaments -->
                            <router-link
                                v-if="item.type == 'tournament'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-tournament',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_tournament: item.id,
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">
                                    <img src="../../../img/cup.png" alt="">
                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div class="search-result__item__country">
                                        <img :src="getCountryImg(item.country)" alt="">
                                        {{ item.country }}
                                    </div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link>
                            <!-- teams -->
                            <router-link
                                v-if="item.type == 'team'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-team',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_name: item.name
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">
                                    <img v-if="item.team_logo" :src="'/storage/logos/' + item.team_logo" alt="">
                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div v-if="item.country" class="search-result__item__country">
                                        <img :src="getCountryImg(item.country)" alt="">
                                        {{ item.country }}
                                    </div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link>
                            <!-- players -->
                            <router-link
                                v-if="item.type == 'player'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-player',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_name: item.name
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">

                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div class="search-result__item__country">
                                        <img v-if="item.team_logo" :src="`/storage/logos/${item.team_logo}`">
                                        <img v-else-if="item.country" :src="getCountryImg(item.country)" alt="">
                                        {{ item.team_name }}
                                    </div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link>
                            <!-- countries -->
                            <router-link
                                v-if="item.type == 'country'"
                                class="search-result__item"
                                :to="{
                                    name: 'betting-search-country',
                                    params: {
                                        subcategory: item.sport_slug,
                                        p_name: item.name,
                                        p_sport: item.sport_slug
                                    }
                                }"
                                @click="isOpenResults = false"
                            >
                                <div class="search-result__item-img">
                                    <img :src="getCountryImg(item.name)" alt="">
                                </div>
                                <div class="search-result__item__detail">
                                    <div class="search-result__item__name">{{item.name}}</div>
                                    <div class="search-result__item__sport">
                                        <span v-if="item.sport_icon" :class="'betting-categories__icon ' + item.sport_icon"></span>
                                        {{ item.sport_name }}
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div v-else-if="searchVariants.length === 0 && message.length > 3 && showLoader === false">
                        <div class="search-result__item">
                            <div class="search-result__item__detail">
                                <div class="search-result__item__name">{{$t('Nothing to display')}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
  
<script>
import moment from "moment";
import { mapActions, mapGetters, mapMutations } from "vuex";
import axios from 'axios';
import _ from 'lodash'
export default {
    computed: {
        user() {
            return this.$store.getters.user;
        },
        ...mapGetters(["getSelectedDate"]),
    },

    data() {
        return {
            message: '',
            isOpenResults: false,
            searchTimeout: null,
            searchVariants: [],
            defaultVariants: [],
            abortController: null,
            showLoader: false,
        }
    },

    methods: {
        ...mapMutations(["updateManualSearch"]),
        ...mapActions(["searchEvents"]),

        hideDropDown(e) {
            if(e.target.classList.contains('icon-search-clean') || e.target.closest('.serach-result') || e.target.closest('.betting-search')) {
                return false
            }
            else {
                this.isOpenResults = false;
            }
        },

        getDefaultResult() {
            this.isOpenResults = true

            if(sessionStorage.getItem('defaultVariants')) {
                this.defaultVariants = JSON.parse(sessionStorage.getItem('defaultVariants'))
                this.showLoader = false;
            }
            else {
                this.showLoader = true;
                axios.get('/api/actual/search/default').then((res) => {
                    this.showLoader = false;
                    this.defaultVariants = res.data;
                    sessionStorage.setItem('defaultVariants', JSON.stringify(this.defaultVariants))
                })
                .catch((err) => {
                    console.log(err)
                }) 
            }
        },


        checkMessage() {
            if(this.abortController != null) {
                this.abortController.abort()
                this.showLoader = false
            }

            if(this.message.length <= 2) {
                this.search(this.message)
                this.searchVariants = []
            }
            else if(this.message.length > 2) {

                this.abortController = new AbortController()
                clearTimeout(this.searchTimeout);
                this.searchVariants = []
                this.showLoader = true;

                this.searchTimeout = setTimeout(() => {
                    this.showLoader = true;
                    axios.post('/api/actual/search/list', {searchQuery: this.message,}, {signal: this.abortController.signal}).then((res) => {
                        this.searchVariants = res.data;
                        document.querySelector('.serach-result').scrollTop = 0
                        this.showLoader = false;
                    })
                    .catch((err) => {
                        console.log(err)
                        this.showLoader = false;
                    })
                }, 350)
                
            }
        },
        search(message) {
            this.message = message
            if (message === "") {
                this.updateManualSearch(false);
                this.updateEventsData();
                this.searchVariants = []
            } else {
                this.updateManualSearch(true);
                // this.searchEventsData(message);
                // this.$store.dispatch("searchEvents", message)
            }
        },
    
        updateEventsData() {

            let live = false;

            if (this.$route.name === 'betting-live' || this.$route.name === 'betting-live-category') {
                live = true;
            }

            // this.updateLive(live);

            let sport = 'football';

            if (typeof (this.$route.params.subcategory) !== "undefined") {
                sport = this.$route.params.subcategory;
            }

            // this.updateSport(sport);

            let formattedDate = moment(this.getSelectedDate).format('YYYY-MM-DD');

            this.$store.dispatch("fetchActualEvents", {
                date: formattedDate,
                sport: sport,
                live: live
            })
        },
        getCountryImg(countryName) {
            if(countryName) {
                let img = countryName.replace(/\s/g, '_')
                return `/static/images/flags-all/${img}.svg`;
            }
            else {
                return ''
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.hideDropDown, false)
    },
    unmounted() {
        document.removeEventListener('click', this.hideDropDown)
    }
}
</script>
  