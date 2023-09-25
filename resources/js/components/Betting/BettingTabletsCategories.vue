<template>
  <div class="betting-tablets-categories" v-if="getActualSports && getActualSports.length">
    <!-- <router-link
        class="t1_medium t2_medium_m betting-tablets-categories__item"
        :key="0"
        :to="getMainLink()"
    >
      <span class="betting-categories__icon home-icon"></span>
      {{ $t("all") }}
    </router-link> -->
    <router-link
        class="t1_medium betting-tablets-categories__item"
        v-for="item in getActualSports"
        :key="item.id"
        :to="getSportLink({
          subcategory: item.slug
        })"
    >
      <span v-if="item.icon" :class="'betting-categories__icon ' + item.icon"></span>
      {{ $t(item.name) }}
    </router-link>
  </div>
  <div class="date-container tablet">
    <div class="date-picker-short tablet" v-if="!datePickerExpanded">
      <span class="icon arrow-icon arrow-left" @click="subtractDay"></span>
      <div class="date-display" @click="expand()">
        <span class="icon calendar-icon"></span>
        <span>{{ selectedDateString }}</span>
      </div>
      <span class="icon arrow-icon arrow-right" @click="addDay"></span>
    </div>
    <div class="date-picker-container tablet" v-if="datePickerExpanded" v-click-outside="hide">
      <div class="date-picker-hider" @click="hide()"></div>
      <DatePicker :locale="locale" v-model="getSelectedDate" @dayclick="onDateChange" is-dark is-expanded trim-weeks />
    </div>
    <div class="date-picker-short country-picker tablet" >
      <div class="date-display" @click="expandCountries()">
        <span>Countries</span>
      </div>
    </div>
    <div class="date-picker-container country-picker tablet" v-if="countryPickerExpanded">
      <div class="country-picker-hider">Choose tournament<span class="icon icon-close" @click="hideCountries()"></span></div>
      <div class="country-list-container"><BettingCountries :key="$route.params.subcategory" :closer="hideCountries"/></div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";

import moment from 'moment';
import { DatePicker } from 'v-calendar';
import BettingCountries from "./BettingCountries.vue";
import 'v-calendar/dist/style.css';

export default {
  components: {
    DatePicker,
    BettingCountries
  },
  data() {
    return {
      // selectedDate: new Date(),
      selectedDateString: '',
      datePickerExpanded: false,
      countryPickerExpanded: false,
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
    subtractDay() {
      let targetDate = moment(this.getSelectedDate).subtract(1, "days");
      this.updateSelectedDate(targetDate.toDate());
      this.updateSelectedDateString();
    },
    addDay() {
      let targetDate = moment(this.getSelectedDate).add(1, "days");
      this.updateSelectedDate(targetDate.toDate());
      this.updateSelectedDateString();
    },
    onDateChange(date) {
      this.updateSelectedDate(date.date);
      this.updateSelectedDateString();
      this.hide();
    },
    updateSelectedDateString() {
      let string = moment(this.getSelectedDate).format('DD/MM');
      this.selectedDateString = string;
      let formattedDate = moment(this.getSelectedDate).format('YYYY-MM-DD');

      if(!this.isFirstRender) {
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
    expand() {
      setTimeout(() => this.datePickerExpanded = true, 0);
      // this.datePickerExpanded = true;
    },
    hideCountries() {
      this.countryPickerExpanded = false;
    },
    expandCountries() {
      this.countryPickerExpanded = true;
    },
    getSportLink(data) {
      let link;

      if(this.$route.name === 'betting-live' || this.$route.name === 'betting-live-category') {
        link = {
          name: 'betting-live-category',
          params: {
            subcategory: data.subcategory
          }
        }
      }else {
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

      if(this.$route.name === 'betting-live' || this.$route.name === 'betting-live-category') {
        link = {name: 'betting-live'}
      }else {
        link = {name: 'betting'}
      }

      return link
    }
  },
  mounted() {
    // Выводим категории спорта
    this.$store.dispatch("fetchActualSports", {
      category: this.$route.params.category
    });
    this.updateSelectedDateString();
  },
  watch: {
    '$route.path'() {
      this.$store.dispatch("fetchActualSports");
    }
  }
}
</script>