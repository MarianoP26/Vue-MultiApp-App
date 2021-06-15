<template>
<div>
    <div class="header-cart-container">
        <h2 class ="sabe">La tienda en casa</h2>
        <div class="cart-panel">
            <img src="../assets/cart.png" alt="logo" class="logo" @click="() => togglePopup('buttonTrigger')">
            <h1>{{itemCartQuantity}}</h1>
        </div>
    </div>
    <CartPopup v-if="popupTriggers.buttonTrigger" :togglePopup="() => togglePopup('buttonTrigger')">
        <h2>Cart</h2>
        <div class="list-group">
            <!--Por cada elemento en el carrito-->
            <a class="list-group-item list-group-item-action"
            v-for="(item, i) of itemsInCart" :key="i">
                <div class="row">
                    <div class="col-2"><img :src="item.url" height="40"/></div>
                    <div class="col-10 align-self-center">{{item.title}}</div>
                </div>   
            </a>
        </div>
    </CartPopup>
</div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';
import CartPopup from '../components/CartPopup.vue';
import {ref} from 'vue';

export default {
    setup(){
        const store = useStore();
        const itemCartQuantity = computed(() => store.state.itemCartQuantity);
        const itemsInCart = computed(() => store.state.cart);

        const popupTriggers = ref({
            buttonTrigger: false
        })

        const togglePopup = (trigger) =>{
            popupTriggers.value[trigger] = !popupTriggers.value[trigger];
            console.log(itemsInCart);
        }

        var test = {type: "Fiat", model: 500};
        
        return {itemCartQuantity, popupTriggers, togglePopup, itemsInCart}
    },
    components: {CartPopup}
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
  cursor:pointer;
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