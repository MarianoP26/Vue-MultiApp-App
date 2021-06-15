<template>
<div class="col-12 col-sm4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">
        <img :src="product.url" :alt="`imagen-${product.title}`" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <p class="card-text">$ <span>{{product.price}}</span></p>
            <button class="btn btn-dark" @click="addToCart(product)">Buy</button>
        </div>
    </div>
</div>
</template>

<script>
import {useStore} from 'vuex';

export default {
    props: ['product'],
    setup(){
        const store = useStore();
        const addToCart = product => {
            store.dispatch('addToCart', product);
        }
        return {addToCart}

    }
    
}
</script>

<style>

</style>