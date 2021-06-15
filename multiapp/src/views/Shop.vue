<template>
<div>
  <div class="cart-panel">
      <CartPanel/>
  </div>
  <div class="row">
      <CardShopItem
      v-for="product of products" :key="product.id"
      :product="product"
      />
  </div>
</div>
</template>

<script>
import CartPanel from '../components/CartPanel.vue';
import CardShopItem from '../components/CardShopItem.vue';
import {useStore} from 'vuex';
import { onMounted } from '@vue/runtime-core';
import {computed} from 'vue';

export default {
    //onMounted se ejecuta cuando se carga la pagina
    setup(){
        const store = useStore();
        onMounted(() =>{
            store.dispatch('fetchData');
        })
        const products = computed(() => store.state.products);
        return {products};
    },
    components: {CartPanel, CardShopItem}
}
</script>

<style>

</style>