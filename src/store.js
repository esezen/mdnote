import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from '@/firebaseConfig'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
})

// export default new Vuex.Store({
//   state: {
//     orders: []
//   },
//   mutations: {
//     fetchOrdersSuccess(state, payload) {
//       var orders = []
//       for (const [key, value] of Object.entries(payload)) {
//         orders.push(value)
//       }
//       state.orders = orders
//     }
//   },
//   actions: {
//     fetchOrders({ commit, state }) {
//       const ordersRef = firebase.database().ref('orders')
//       ordersRef.once('value', snapshot => {
//         let orders = snapshot.val()
//         commit('fetchOrdersSuccess', orders)
//       })
//     }
//   }
// })
