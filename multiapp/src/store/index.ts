import { createStore } from 'vuex'

export default createStore({
  state: {
    itemCartQuantity: 0,
    products: [],
    cart: {},
  },
  mutations: {
    addToCart(state, payload){
      state.itemCartQuantity++;
      state.cart[payload.id] = payload;
    },
    addProduct(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    async fetchData({commit}){
      try{
        const res = await fetch('api.json');
        const data = await res.json();
        commit('addProduct', data);
      }catch(error){
        console.log(error)
      }
    },
    addToCart({commit, state}, product) {
      const cartItem = state.cart[product.id];

      cartItem ? product.quantity = cartItem.quantity + 1: product.quantity = 1;
      commit('addToCart', product);
    }
  },
  modules: {
  }
})
