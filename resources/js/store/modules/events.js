// export default {
//     actions: {
//         fetchEvents(ctx, subcategory_id) {
//             axios
//                 .get(`/api/events/${subcategory_id}`)
//                 .then((res) => {
//                     if (res.status == 200) {
//                         console.log(res);
//                     }
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     },
//     mutations: {
//         updateEvents(state, data) {
//             state.events = data;
//         }
//     },
//     state: {
//         events: []
//     },
//     getters: {
//         getEvents(state) {
//             return state.events;
//         }
//     }
// }
