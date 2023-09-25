<template>
    <div class="betting-countries__panel">
        <BettingCollapse v-for="country in countries"
                        :key="country.id" 
                        :title="country.tournament_category"
                        :tournaments="country.tournaments"
                        :subcategory="subcategory"
                        :count="country.total_events_count"
                        :closer="closer"
        />
    </div>    
</template>


<script>
import axios from 'axios';
import BettingCollapse  from './BettingCollapse.vue';


export default {
    components: {
        BettingCollapse,
    },
    props: ['closer'],
    data() {
        return {
            countries: [],
            subcategory: this.$route.params.subcategory ? this.$route.params.subcategory : 'football'
        };
    },
    created: function () {
        
    },
    mounted() {
        axios.get(`/api/actual/sport/${this.subcategory}/categories/list`).then((res) => {
            this.countries = res.data;
        })
        .catch((err) => {
            console.log(err)
        })
    },
}
</script>
