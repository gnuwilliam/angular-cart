App.controller('CartController', function($scope) {
  $scope.products = [
    { name: "Product 1", price: 80, qty: 0 },
    { name: "Product 2", price: 90, qty: 0 },
    { name: "Product 3", price: 100, qty: 0 },
    { name: "Product 4", price: 110, qty: 0 },
  ];

  $scope.remove = function(index) {
    $scope.products.splice(index, 1);
  }
});