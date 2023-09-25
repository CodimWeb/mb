export default {
    state: {
        live_events: []
    },
    actions: {
        async fetchActualLiveEvents(ctx, data) {
            let url = '';

            if(data.sport === null) {
                url = '/api/actual/events/live/list';
            } else {
                url = `/api/actual/events/live/sport/${data.sport}`
            }

            await axios
                .get(url)
                .then((res) => {
                    ctx.commit('updateActualLiveEvents', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mutations: {
        updateActualLiveEvents(state, data) {
            state.live_events = data
        }
    },
    getters: {
        getActualLiveEvents(state) {
            return state.live_events
        }
    }
}