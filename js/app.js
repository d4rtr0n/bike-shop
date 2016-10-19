'use strict';

var storeApp = angular.module('BikeStore', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.html',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'partials/product.html',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.html',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
storeApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("BikeStore");

    // enable PayPal checkout
 
    myCart.addCheckoutParameters("PayPal", "rachidnasr@gmail.com");

   

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});