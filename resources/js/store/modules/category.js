export default {
    actions: {
        fetchCategory(ctx, slug) {
            axios
                .get("/api/category/slug/" + slug)
                .then((res) => {
                    if(res.status === 200) {
                        ctx.commit("updateCategory", res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    },
    mutations: {
        updateCategory(state, data) {
            state.category = data;
        },
        updateCategoryEvents(state, category_events) {
            state.category_events = category_events
        },
        filterBySubcategory(state, params) {
            state.filter.subcategory = params.subcategory_id;
        },
        toggleEvent(state, id) {
            let category, event;

            for (let index = 0; index < state.category_events.length; index++) {
                category = state.category_events[index];
                if (category.events.length) {
                    for (let i = 0; i < state.category_events[index].events.length; i++) {
                        event = category.events[i];
                        if (event.id === id) {
                            event.is_open = event.is_open ? false : true;
                        }
                    }
                }
            }
        },
        // updateCategoriesByLevel(state, data) {
        //     state.categories_by_level = data;
        // }
    },
    state: {
        category_events: [],
        filter: {
            subcategory: 0
        },
        category: null,
        // categories_by_level: [],
    },
    getters: {
        getCategoryEvents(state) {
            state.category_events.forEach((subcategory_count, subcategory) => {
                if(subcategory.events && subcategory.events.length) {
                    subcategory.events.forEach((event_count, event_item) => {
                        state.category_events[subcategory_count].events[event_count].is_open = false;
                    })
                }
            });

            if(state.filter.subcategory == 0)  return state.category_events;

            if(state.filter.subcategory > 0) return state.category_events.filter((item) => {
                return item.subcategory == state.filter.subcategory;
            });
        },
        getCategory(state) {
            return state.category;
        }
        // getCategoryByLevel(state) {
        //     return state.categories_by_level;
        // }
    }
}
