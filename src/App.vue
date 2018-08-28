<template>
  <div id="app">
    <!--
      the right hand side contains the data in the components
      the left hand side contains the vairable in the components which in the tag name
      v-bind:products = "products"
      v-bind:products  means you will have variable products
      or data with in variable products in the component product_list_one
      the values of it is  "products"
      which value comes from the current component App
      this is the way to pass the data from current component to another
      NOTE:
      v-bind:x="y"
      send the variable x with the value of y
      important
      in the component product_list_one the data not available since
      the component to listen to vuejs and not excepected to get data with this name products
      this is the use of props
      we must put props: ['products'] to allow it to get the data
      -->
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
//Start import <some_name> from <path_of_the_file>
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';
//End import <some_name> from <path_of_the_file>

export default {
  // Start register the components
  components:{
    // Start ==> variable : value
    //the tag name : the component which you import
    'product-list-one':ProductListOne,
    'product-list-two':ProductListTwo
    // End ==> variable : value
  },
  // End register the components

  // Start name of the component App
  name: 'app',
  // End name of the component App

  // Start data of App
  data () {
  // Start return object
    return {
      // Start ==> variable : value
      // products:[
      //   {name: 'Banana Skin', price: 20},
      //   {name: 'Shiny Star', price: 40},
      //   {name: 'Green Shells', price: 60},
      //   {name: 'Red Shells', price: 80}
      // ]
      // End ==> variable : value
    }
  // End return object
  }
  // End data of App

}
</script>

<style>

</style>
