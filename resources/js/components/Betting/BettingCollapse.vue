<template>
    <div class="country-collapse" :class="isOpen ? 'open': ''">
        <div class="country-collapse__btn betting-categories__item" @click="handleCollapse">
            <div class="betting-categories__flag">
                <img :src="getCountryImg(title)" :alt="title">
            </div>
            <div class="country-collapse__title">{{ title }}</div>
            <svg class="country-collapse__arrow" width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.87122 6.74194L0.518864 0.935491L7.22358 0.935492L3.87122 6.74194Z" fill="#D9D9D9"/>
            </svg>
        </div>
        <Collapse :when="isOpen" class="collapse">
            <div class="country-collapse__wrap">
                <div class="country-collapse__body"
                     :class="{'open' : isShowAll}"
                >
                    <router-link
                        v-for="tournament in tournaments" :key="tournament.id"
                        @click="closer"
                        class="country-collapse__link"
                        :to="{
                            name: 'betting-category-tournament',
                            params: {
                                subcategory: subcategory,
                                country: tournament.category,
                                tournament: tournament.name,
                            }
                        }">
                        <div >{{ tournament.name }}</div>
                    </router-link>
                </div>
                <span v-if="tournaments.length > 9"
                      class="country-collapse__link country-collapse__show-all"
                      @click="toggleAll"
                >
                    {{ $t('All leagues') }}
                </span>
            </div>
        </Collapse>
    </div>    
</template>

<style>
.collapse {
  transition: height 0.2s cubic-bezier(0.3, 0, 0.6, 1);
}
</style>

<script>
import { Collapse } from 'vue-collapsed'


export default {
    components: {
        Collapse,
    },
    props: ['title', 'tournaments', 'subcategory', 'count', 'closer'],
    data() {
        return {
            isOpen: false,
            isShowAll: false
        };
    },
    methods: {
        handleCollapse() {
            this.isOpen = !this.isOpen
        },

        toggleAll() {
            this.isShowAll = !this.isShowAll;
        },
        getCountryImg(countryName) {
            let img = countryName.replace(/\s/g, '_')
            return `/static/images/flags-all/${img}.svg`;
        }
    },
}
</script>
