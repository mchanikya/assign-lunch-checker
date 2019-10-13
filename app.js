(function(){
'use strict'

angular.module('HungerAdvisor',[])

.controller('HungerAdvisorController', function ($scope) {
  $scope.message = "";
  $scope.foodItems = "";
  $scope.calculateFoodItems = function () {
    var totalFoodItems = countFoodItems($scope.foodItems);
    $scope.message = totalFoodItems;
  };
});

function countFoodItems(fItems){
 var foodItems = fItems.split(',');
 if (foodItems.length >=1 && foodItems.length<=3) {
   if (fItems.length==0) {
     return '"Please enter data first"';
   }else {
     return '"Enjoy!"';
   }
 }else if (foodItems.length>3) {
   return '"Too much!"';
 }
 // return foodItems.length;
}


})();
