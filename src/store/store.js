import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// start state is just data in our application
export const store = new Vuex.Store({
  strict: true,
  state:{
      // Start ==> variable : value ====>array of objects
      products:[
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80}
      ]
      // End ==> variable : value
  },

  // Start Getters to make changes to data before get it ====> object
  // keys is the name of the values
  // there is must return value
  getters:{
    // form is that ===> word : state => function
    saleProducts: state => {
      let saleProducts = store.state.products.map(product=>{
        // change the value of the stored data
        return{
          name:'**'+ product.name+'**',
          price: product.price/2.0
        }
      });
      return saleProducts;
    },
  },
  // End Getters to make changes to data before get it

  // Start the best way for editing the state of the vuex
  mutations:{


    reducePrice: (state,payload) =>{

      state.products.forEach(product=>{
        product.price-=payload;
      })







// Start Asynchronous is the limitations of mutations
// Asynchronous
/*
  setTimeout(function(){
    state.products.forEach(product=>{
      product.price-=1;
    });
  },3000);
*/
// End Asynchronous is the limitations of mutations






    },




  },
  // End the best way for editing the state of the vuex




  // Start Asynchronous is the limitations of mutations ==> action is the solution for that

  actions:{

    reducePrice: (context,payload) =>{

      setTimeout(function(){
        // Start context commit some mutations
        context.commit('reducePrice',payload);
        // End context commit some mutations
      },3000);

    }
  }

  // End Asynchronous is the limitations of mutations ==> action is the solution for that

});
// end state is just data in our application

/*
  Important note:
  the app name must be anything except the names of dependencies

  I change the name of the app in package.json from vuex to vuex-app
  to solve the problem
  "Refusing to install vuex as a dependency of itself"
*/
