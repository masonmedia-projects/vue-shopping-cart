import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/locales/en.json';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        data: data,
        cartItemCount: 0,
        cartItems: [],
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
        removeItem: (context, payload) => {
            context.commit("removeItem", payload)
        }
    },
})

// export default store