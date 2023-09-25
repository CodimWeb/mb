export default {
    state: {
        subcategories: [],
    },
    actions: {
        fetchSubCategories(ctx, url_params) {
            let category_slug = url_params.category
            let subcategory_slug = url_params.subcategory

            if (!category_slug) {
                category_slug = 'sport';
            }

            if (subcategory_slug !== null) {
                axios
                    .get(`/api/subcategory/get-by-slug/${subcategory_slug}`)
                    .then((res) => {
                        if (res.status === 200) {
                            ctx.commit("updateSubCategories", res.data)
                        }
                    })
                    .catch((err) => {
                        console.log(res);
                    });
            } else {
                axios
                    .get(`/api/subcategory/${category_slug}`)
                    .then((res) => {
                        if (res.status === 200) {
                            ctx.commit("updateSubCategories", res.data)
                        }
                    })
                    .catch((err) => {
                        console.log(res);
                    });
            }
        },
    },
    mutations: {
        updateSubCategories(state, data) {
            state.subcategories = data;

            state.subcategories.forEach((subcategory, subcategory_count) => {
                if (subcategory.events && subcategory.events.length) {
                    subcategory.events.forEach((event_item, event_count) => {
                        state.subcategories[subcategory_count].events[event_count].is_open = false;

                        if (event_item.games && event_item.games.length) {
                            event_item.games.forEach((game, game_count) => {
                                let dateOfGame = new Date(game.date_start);
                                let year = dateOfGame.getFullYear();
                                let moth = (dateOfGame.getMonth() + 1) < 10 ? "0" + (dateOfGame.getMonth() + 1) : (dateOfGame.getMonth() + 1);
                                let days = dateOfGame.getDate();
                                if (days < 10) {
                                    days = '0' + days;
                                }
                                let hours = dateOfGame.getHours();
                                if (hours < 10) {
                                    hours = '0' + hours;
                                }
                                let minutes = dateOfGame.getMinutes();
                                if (minutes < 10) {
                                    minutes = '0' + minutes;
                                }

                                let modifiedDateOfGame = `${days}-${moth}-${year} ${hours}:${minutes}`;

                                state.subcategories[subcategory_count].events[event_count].games[game_count].date_start = modifiedDateOfGame;
                            })
                        }
                    })
                }
            });
        },
        toggleSubCategoryEvent(state, id) {
            state.subcategories.forEach((subcategory, subcategory_count) => {
                if (subcategory.events && subcategory.events.length) {
                    subcategory.events.forEach((event_item, event_count) => {
                        if (event_item.id == id) {
                            state.subcategories[subcategory_count].events[event_count].is_open = event_item.is_open ? false : true;
                        }
                    })
                }
            });
        }
    },
    getters: {
        getSubCategories(state) {
            return state.subcategories;
        }
    }
}
