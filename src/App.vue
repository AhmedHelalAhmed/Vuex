<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
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
      products:[
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80}
      ]
      // End ==> variable : value
    }
  // End return object
  }
  // End data of App

}
</script>

<style>

</style>
