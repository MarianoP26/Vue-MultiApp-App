<template>
<div>
    <div class="header-cart-container">
        <h2 class ="sabe">La tienda en casa</h2>
        <div class="cart-panel">
            <img src="../assets/cart.png" alt="logo" class="logo">
            <h1>{{itemCartQuantity}}</h1>
        </div>
    </div>
</div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
    setup(){
        const store = useStore();
        const itemCartQuantity = computed(() => store.state.itemCartQuantity)
        return {itemCartQuantity}
    }
}
</script>

<style scoped>

.header-cart-container{
    overflow: hidden;
    background-color:whitesmoke;
    padding: 20px 10px;
}


.logo{
  width: 50px;
  height: 50px;
}

.logo:hover{
  background-color: #ddd;
  color: black;
}
.sabe{
    float:left;
}
.cart-panel {
  float: right;
  color: black;
  text-decoration: none;
  display:flex;
  flex-direction: row;
}

</style>