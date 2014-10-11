var app = angular.module("ShopApp", []);


app.controller("MyFirstCtrl", function ($scope) {
  $scope.kafeleks = [
    {
      product: 'http://lorempixel.com/output/city-q-c-177-102-4.jpg',
      name: 'City',
      shortDescription: 'City description',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 10,
      buy: false
    },
    {
      product: 'http://lorempixel.com/output/food-q-c-177-102-4.jpg',
      name: 'Food',
      shortdescription: 'Food description',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 50,
      buy: false
    },
    {
      product: 'http://lorempixel.com/output/nightlife-q-c-177-102-10.jpg',
      name: 'Nightlife',
      shortDescription: 'Nightlife description',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 30,
      buy: false
    },
    {
      product: 'http://lorempixel.com/output/transport-q-c-177-102-8.jpg',
      name: 'Transport',
      shortDescription: 'Transport description',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 200,
      buy: false
    }];
    
    $scope.sorting = {
      by: 'price',
      desc: true
    };
});

app.directive('sortingButton', function(){
    
    return {
        restrict: 'E',
        scope: {
            text: '@',
            value: '@',
            sort: '='
        },
        templateUrl: 'sortingButton.html',
        link: function(scope) {
            scope.sortBy = function(byWhat) {
                scope.sort.by = byWhat; 
                scope.sort.desc = !scope.sort.desc;
            };
        }
    };
});

app.directive('product', function(){
    return {
       restrict: 'E',
       scope: {
         kafelek: "="
       },
       templateUrl: 'product.html'
    }
});

app.directive('pay', function(){
  return {
    restrict: 'E',
  templateUrl: 'pay.html'
  }
});

app.directive('cart', function(){
  return {
    restrict: 'E',
    templateUrl: 'cart.html',
    scope: {
      kafeleks: '='
    }
  }
});

app.filter('inCart', function(){
  return function(items){
    var inCart = [];
    for(var i= 0; i < items.length; ++i){
      if (items[i].buy){
        inCart.push(items[i])
      }
    }
    return inCart;
  }
});