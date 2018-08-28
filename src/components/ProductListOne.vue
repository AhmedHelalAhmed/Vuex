<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product,index) in saleProducts" :key="index">
          <span class="name">{{product.name}}</span>
          <span class="price">${{product.price}}</span>
        </li>
    </ul>
    <button v-on:click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
export default {
  // Start computed
  computed:{
    products(){
      return this.$store.state.products;
    },
    saleProducts(){
      /*
       // old way of getters
      let saleProducts = this.$store.state.products.map(product=>{
        return{
          name:'**'+ product.name+'**',
          price: product.price/2.0
        }
      });
      return saleProducts;
      */

      return this.$store.getters.saleProducts;
    }
  },
  // End computed



  // Start methods
  methods:{

    // Start bad way to change the data in the vuex which is not debuggable - (editting the data directly)
    reducePrice(){
      /*
        this.$store.state.products.forEach(product => {
          product.price-=1;
        });
      */

     // Start the best way to track the sate - editing the state
     /*
      this.$store.commit('reducePrice');
     */
     // End the best way to track the sate - editing the state

      this.$store.dispatch('reducePrice');

      }
    // End bad way to change the data in the vuex which is not debuggable - (editting the data directly)

  },
  // End methods


}
</script>

<style scoped>

#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
