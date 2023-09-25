export default {
    state: {
        actual_events: [],
        live_events: [],
        upcoming_events: [],
        actual_esports_events: [],
        selected_event: null,
        manual_search: false,
        selected_date: new Date(),
        live: false,
        sport: null,
        eventAbortController: null,
        eventTournamentsAbortController: null,
        eventSearchAbortController: null,
        eventDateAbortController: null,
    },
    actions: {
        async getEventData(ctx, data) {
            if (data) {
                let url = `/api/actual/events/get/` + data.id;
                await axios.get(url)
                    .then((res) => {
                        let data = res.data;
                        // let lengthAway = data.team_away.last_results.length - 5;
                        // if(lengthAway > 0) {
                        //     data.team_away.last_results.splice(lengthAway)
                        // }
                        data.team_away.last_results.slice(-5)
                        data.team_home.last_results.slice(-5)
                        ctx.commit('updateSelectedEvent', data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                ctx.commit('updateSelectedEvent', data)
            }

        },

        async fetchActualEsportsEvents(ctx) {
            let url = `/api/actual/events/esports`;
            await axios.get(url)
                .then((res) => {
                    ctx.commit('updateActualEsportsEvents', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async fetchActualEventsByCountryTournament(ctx, data) {
            ctx.commit('abortAllRequests')
            ctx.commit('updateEventTournamentsAbortController', new AbortController());
            await axios.get(
                `/api/actual/events/${data.subcategory}/${data.country}/${data.tournament}/list`,
                { signal: ctx.getters.getEventTournamentsAbortController.signal }
            )
                .then((res) => {
                    ctx.commit('updateActualEvents', res.data.active);
                    ctx.commit('updateLiveEvents', res.data.live);
                    ctx.commit('updateUpcomingEvents', res.data.upcoming);
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async fetchActualEvents(ctx, data) {
            let url = `/api/calendar/events`;

            let query = {
                date: data.date,
            }

            if (data.sport) {
                query.sport_slug = data.sport;
            }

            ctx.commit('updateLive', data.live);
            ctx.commit('updateSport', data.sport);
            ctx.commit('abortAllRequests')
            ctx.commit('updateEventAbortController', new AbortController());
            await axios.post(url, query, { signal: ctx.getters.getEventAbortController.signal })
                .then((res) => {
                    ctx.commit('updateActualEvents', data.live ? res.data.live : res.data.active);
                    ctx.commit('updateLiveEvents', res.data.live);
                    ctx.commit('updateUpcomingEvents', res.data.upcoming);
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async fetchActualEventsBySearch(ctx, data) {
            let url = `/api/actual/search/events`;
            ctx.commit('abortAllRequests')
            ctx.commit('updateSearchAbortController', new AbortController());
            await axios.post(url, { data: data }, { signal: ctx.getters.getSearchAbortController.signal })
                .then((res) => {
                    ctx.commit('updateActualEvents', res.data.active);
                    ctx.commit('updateLiveEvents', res.data.live);
                    ctx.commit('updateUpcomingEvents', res.data.upcoming);
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async searchEventsByDate(ctx, query) {
            let url = `/api/calendar/events`;
            ctx.commit('abortAllRequests')
            ctx.commit('updateDateAbortController', new AbortController());
            await axios.post(url, { date: query }, { signal: ctx.getters.getDateAbortController.signal })
                .then((res) => {
                    ctx.commit('updateActualEvents', res.data.active)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    mutations: {
        updateActualEsportsEvents(state, data) {
            state.actual_esports_events = data
        },
        updateActualEvents(state, data) {
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

                        if (event.team_home && event.team_away && event.team_home.name !== event.team_away.name) {
                            result_events.push(event)
                        }
                    })

                    if (result_events.length) {
                        tournament.events = result_events
                        result_tournaments.push(tournament)
                        showSport = true;
                    }
                })

                if (showSport) {
                    result.push({
                        sport: sport.sport,
                        tournaments: result_tournaments
                    })
                }
            })

            state.actual_events = result
        },
        updateLiveEvents(state, data) {
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

                        if (event.team_home && event.team_away && event.team_home.name !== event.team_away.name) {
                            result_events.push(event)
                        }
                    })

                    if (result_events.length) {
                        tournament.events = result_events
                        result_tournaments.push(tournament)
                        showSport = true;
                    }
                })

                if (showSport) {
                    result.push({
                        sport: sport.sport,
                        tournaments: result_tournaments
                    })
                }
            })

            state.live_events = result
        },
        updateUpcomingEvents(state, data) {
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

                        if (event.team_home && event.team_away && event.team_home.name !== event.team_away.name) {
                            result_events.push(event)
                        }
                    })

                    if (result_events.length) {
                        tournament.events = result_events
                        result_tournaments.push(tournament)
                        showSport = true;
                    }
                })

                if (showSport) {
                    result.push({
                        sport: sport.sport,
                        tournaments: result_tournaments
                    })
                }
            })

            state.upcoming_events = result
        },
        updateSelectedEvent(state, data) {
            state.selected_event = data
        },
        updateManualSearch(state, bool) {
            state.manual_search = bool
        },
        updateSelectedDate(state, date) {
            state.selected_date = date
        },
        updateLive(state, bool) {
            state.live = bool
        },
        updateSport(state, str) {
            state.sport = str
        },
        updateEventAbortController(state, data) {
            state.eventAbortController = data
        },
        updateEventTournamentsAbortController(state, data) {
            state.eventTournamentsAbortController = data
        },
        updateSearchAbortController(state, data) {
            state.eventSearchAbortController = data
        },
        updateDateAbortController(state, data) {
            state.eventDateAbortController = data
        },
        abortAllRequests(state) {
            if (state.eventAbortController != null) {
                state.eventAbortController.abort()
                state.eventAbortController = null
            }
            if (state.eventTournamentsAbortController != null) {
                state.eventTournamentsAbortController.abort();
                state.eventTournamentsAbortController = null;
            }
            if (state.eventSearchAbortController != null) {
                state.eventSearchAbortController.abort();
                state.eventSearchAbortController = null
            }
            if (state.eventDateAbortController != null) {
                state.eventDateAbortController.abort();
                state.eventDateAbortController = null
            }
        }

    },
    getters: {
        getActualEvents(state) {
            return state.actual_events
        },
        getLiveEvents(state) {
            return state.live_events
        },
        getUpcomingEvents(state) {
            return state.upcoming_events
        },
        getActualEsportsEvents(state) {
            return state.actual_esports_events
        },
        getSelectedEvent(state) {
            return state.selected_event
        },
        getManualSearch(state) {
            return state.manual_search
        },
        getSelectedDate(state) {
            return state.selected_date
        },
        getLive(state) {
            return state.live
        },
        getSport(state) {
            return state.sport
        },
        getActualEventsLiveFilter(state) {
            return state.actual_events

            let showSport, showTournament, showEvent;
            let result = [];
            let result_tournaments = [];
            let result_events = [];

            state.actual_events.forEach(sport => {
                showSport = false
                result_tournaments = []

                sport.tournaments.forEach(tournament => {
                    showTournament = false
                    result_events = []

                    tournament.events.forEach(event => {
                        showEvent = false

                        if (event.is_live) {
                            result_events.push(event)
                        }
                    })

                    if (result_events.length) {
                        tournament.events = result_events
                        result_tournaments.push(tournament)
                        showSport = true;
                    }
                })

                if (showSport) {
                    result.push({
                        sport: sport.sport,
                        tournaments: result_tournaments
                    })
                }
            })

            return result
        },

        getEventAbortController(state) {
            return state.eventAbortController
        },
        getEventTournamentsAbortController(state) {
            return state.eventTournamentsAbortController
        },
        getSearchAbortController(state) {
            return state.eventSearchAbortController
        },
        getDateAbortController(state) {
            return state.eventDateAbortController
        },
    }
}