import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/locales/en.json';
// import VuexPersistence from 'vuex-persist'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

// https://www.npmjs.com/package/vuex-persistedstate
// const vuexLocal = new VuexPersistence({
//     key: 'LDTstorage',
//     storage: window.localStorage
//   })

// https://flaviocopes.com/vuex-persist-localstorage/
// https://www.npmjs.com/package/vuex-persist
// const vuexLocal = new VuexPersistence({
//     key: 'LDTdata',
//     storage: session.localStorage
//   })

export const store = new Vuex.Store({
    // plugins: [vuexLocal.plugin],
    // plugins: [vuexPersist.plugin],
    // plugins: [createPersistedState({
    //     key: 'LDTdata',
    //     storage: window.sessionStorage
    // })],
    plugins: [createPersistedState({
        key: 'LDTdata',
    })],
    state: {
        data: data,
        cartItemCount: 0,
        cartItems: [],
        cartArchive: [],
    },
    // update the state
    mutations: {
        addToCart(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 }
            if(state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id === item.id)
                if (bool) {
                    let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
                    state.cartItems[itemIndex]["quantity"] += 1;
                } else {
                    state.cartItems.push(item)
                }
             } else {
                state.cartItems.push(item)
            }
            state.cartItemCount++
        },
        addToArchive(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 }
            if(state.cartArchive.length > 0) {
                let bool = state.cartArchive.some(i => i.id === item.id)
                if (bool) {
                    let itemIndex = state.cartArchive.findIndex(el => el.id === item.id)
                    state.cartArchive[itemIndex]["quantity"] += 1;
                } else {
                    state.cartArchive.push(item)
                }
             } else {
                state.cartArchive.push(item)
            }
            state.cartItemCount++
        },
        removeItem(state, payload) {
            if(state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id === payload.id)

                if (bool) {
                    let index = state.cartItems.findIndex(el => el.id === payload.id)
                    if (state.cartItems[index]["quantity"] !== 0) {
                    state.cartItems[index]["quantity"] -= 1
                    state.cartItemCount--
                }
                if (state.cartItems[index]["quantity"] === 0) {
                    state.cartItems.splice(index, 1)
                }
            }
            }
        },
        
    },
    actions: {
        addToCart: (context, payload) => {
            context.commit("addToCart", payload)
        },
        addToArchive: (context, payload) => {
            context.commit("addToArchive", payload)
        },
        removeItem: (context, payload) => {
            context.commit("removeItem", payload)
        }
    },
})

// export default store