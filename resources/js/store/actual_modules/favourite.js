export default {
    state: {
        actual_favourites: [],
        dashboard_actual_favourites: [],
    },
    actions: {
        async fetchActualFavourites(ctx) {
            axios.get(`/api/actual/favourites/list`).then((res) => {
                ctx.commit('updateActualFavourites', res.data)
            })
            .catch((err) => {
                // Place to add local storage
                console.log(err)
            })
        },

        async removeActualFavourites(ctx, id) {
            axios.get(`/api/actual/favourites/remove/${id}`).then((res) => {
                ctx.commit('updateActualFavourites', res.data)
            })
            .catch((err) => {
                // Place to add local storage
                console.log(err)
            })
        },

        async fetchDashboardActualFavourites(ctx) {
            axios.get(`/api/actual/favourites/events`).then((res) => {
                ctx.commit('updateDashboardActualFavourites', res.data)
            })
            .catch((err) => {
                // Place to add local storage
                console.log(err)
            })
        },
    },
    mutations: {
        updateActualFavourites(state, data) {
            state.actual_favourites = data
        },

        updateDashboardActualFavourites(state, data) {
            let showSport, showTournament, showEvent;
            let result = [];
            let result_tournaments = [];
            let result_events = [];

            data.forEach(sport => {
                showSport = false
                result_tournaments = []

                sport.tournaments.forEach(tournament => {
                    showTournament = false
                    result_events = []

                    tournament.events.forEach(event => {
                        showEvent = false

                        if(event.team_home && event.team_away && event.team_home.name !== event.team_away.name) {
                            result_events.push(event)
                        }
                    })

                    if(result_events.length) {
                        tournament.events = result_events
                        result_tournaments.push(tournament)
                        showSport = true;
                    }
                })

                if(showSport) {
                    result.push({
                        sport: sport.sport,
                        tournaments: result_tournaments
                    })
                }
            })

            state.actual_favourites = result
        },

        async addActualFavourite(state, event_id) {
            await axios
                .post(`/api/actual/favourites/add`, {event: event_id})
                .then((res) => {
                    state.actual_favourites = res.data
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    getters: {
        getActualFavourites(state) {
            return state.actual_favourites
        },
        getDashboardActualFavourites(state) {
            return state.dashboard_actual_favourites
        }
    }
}