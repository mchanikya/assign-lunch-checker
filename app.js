(function(){
'use strict'

angular.module('HungerAdvisor',[])

.controller('HungerAdvisorController',HungerAdvisorController);

HungerAdvisorController.$inject = ['$scope'];

 function HungerAdvisorController($scope) {
  $scope.message = "";
  $scope.foodItems = "";
  $scope.calculateFoodItems = function () {
    var totalFoodItems = function (){
     var foodItems = $scope.foodItems.split(',');
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

    // countFoodItems($scope.foodItems);
    $scope.message = totalFoodItems;

  };

};



})();
