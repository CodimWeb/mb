<template>
    <div class="date-container">
        <div class="date-picker-short" v-if="!datePickerExpanded">
            <span class="icon arrow-icon arrow-left" @click="subtractDay"></span>
            <div class="date-display" @click="expand()">
                <span class="icon calendar-icon"></span>
                <span>{{ selectedDateString }}</span>
            </div>
            <span class="icon arrow-icon arrow-right" @click="addDay"></span>
        </div>
        <div class="date-picker-container" v-if="datePickerExpanded">
            <div class="date-picker-hider" @click="hide()"></div>
            <DatePicker :locale="locale" v-model="getSelectedDate" @dayclick="onDateChange" is-dark is-expanded
                        trim-weeks/>
        </div>
    </div>


    <!-- <div class="betting-categories" v-if="getActualSports && getActualSports.length">
        <router-link class="t1_medium betting-categories__item" :key="0" :to="getMainLink()">
          <span class="betting-categories__icon home-icon"></span>
          {{ $t('all') }}
        </router-link>
        <router-link class="t1_medium betting-categories__item" v-for="item in getActualSports" :key="item.id" :to="getSportLink({
          subcategory: item.slug
        })">
          <span v-if="item.icon" :class="'betting-categories__icon ' + item.icon"></span>
          {{ $t(item.name) }}
        </router-link>
      </div> -->

    <div class="betting-categories" v-if="getActualSports && getActualSports.length">
        <div v-for="item in getActualSports" :key="'key'+item.id">
            <router-link v-if="item.slug == 'football'"
                         class="t1_medium betting-categories__item"
                         :class="{'router-link-active active': $route.params.subcategory == item.slug }"
                         :to="getMainLink()">
                <span v-if="item.icon" :class="'betting-categories__icon ' + item.icon"></span>
                {{ $t(item.name) }}
            </router-link>
            <router-link v-else
                         :key="'key'+item.id"
                         class="t1_medium betting-categories__item"
                         :class="{'router-link-active active': $route.params.subcategory == item.slug }"
                         :to="getSportLink({
                            subcategory: item.slug
                        })">
                <span v-if="item.icon" :class="'betting-categories__icon ' + item.icon"></span>
                {{ $t(item.name) }}
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";

import moment from 'moment';
import {DatePicker} from 'v-calendar';
import 'v-calendar/dist/style.css';
import router from "../../router";

export default {
    components: {
        DatePicker,
    },
    data() {
        return {
            // selectedDate: new Date(),
            selectedDateString: '',
            datePickerExpanded: false,
            isFirstRender: true,
            locale: window.location.pathname.replace(/^\/([^\/]+).*/i, '$1')
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        displayDate() {
            let string = this.getSelectedDate.format('DD/MM dd');
            return string;
        },
        ...mapGetters(["getActualSports", "getSelectedDate", "getLive", "getSport"]),
    },
    methods: {
        ...mapActions(["fetchActualSports", "searchEventsByDate"]),
        ...mapMutations(["updateSelectedDate"]),
        expand() {
            this.datePickerExpanded = true;
        },
        subtractDay() {
            let targetDate = moment(this.getSelectedDate).subtract(1, "days");
            this.updateSelectedDate(targetDate.toDate());
            this.updateSelectedDateString();
            if (this.$route.name.indexOf('betting-search') !== -1) {
                let lang = this.$route.params.lang
                router.push({name: 'betting', params: {lang: lang}})
            }
        },
        addDay() {
            let targetDate = moment(this.getSelectedDate).add(1, "days");
            this.updateSelectedDate(targetDate.toDate());
            this.updateSelectedDateString();
            if (this.$route.name.indexOf('betting-search') !== -1) {
                let lang = this.$route.params.lang
                router.push({name: 'betting', params: {lang: lang}})
            }
        },
        onDateChange(date) {
            this.updateSelectedDate(date.date);
            this.updateSelectedDateString();
            console.log(this.$route.params)
            if (this.$route.name.indexOf('betting-search') !== -1) {
                let lang = this.$route.params.lang
                router.push({name: 'betting', params: {lang: lang}})
            }
            this.hide();
        },
        updateSelectedDateString() {
            let string = moment(this.getSelectedDate).format('DD/MM');
            this.selectedDateString = string;
            let formattedDate = moment(this.getSelectedDate).format('YYYY-MM-DD');

            if (!this.isFirstRender) {
                this.$store.dispatch("fetchActualEvents", {
                    date: formattedDate,
                    sport: this.getSport,
                    live: this.getLive
                })
            }

            this.isFirstRender = false;

            // this.$store.dispatch("searchEventsByDate", formattedDate);
        },
        hide() {
            this.datePickerExpanded = false;
        },
        getSportLink(data) {
            let link;

            if (this.$route.name === 'betting-live' || this.$route.name === 'betting-live-category') {
                link = {
                    name: 'betting-live-category',
                    params: {
                        subcategory: data.subcategory
                    }
                }
            } else {
                link = {
                    name: 'betting-category',
                    params: {
                        subcategory: data.subcategory
                    }
                }
            }

            return link
        },
        getMainLink() {
            let link;

            if (this.$route.name === 'betting-live' || this.$route.name === 'betting-live-category') {
                link = {name: 'betting-live'}
            } else {
                link = {name: 'betting'}
            }

            return link
        }
    },
    mounted() {
        // Выводим категории спорта
        this.$store.dispatch("fetchActualSports");
        this.updateSelectedDateString();
    },
    created: function () {
        this.moment = moment;
    },
    watch: {
        '$route.path'() {
            this.$store.dispatch("fetchActualSports");
        }
    }
}
</script>
