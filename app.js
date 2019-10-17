// (function(){
// 'use strict'

// angular.module('HungerAdvisor',[])

// .controller('HungerAdvisorController',HungerAdvisorController);

// HungerAdvisorController.$inject = ['$scope','$filter'];

//  function HungerAdvisorController($scope,$filter) {
//   $scope.message = "";
//   $scope.foodItems = "";
//   $scope.calculateFoodItems = function () {
//     var totalFoodItems= "noitems";
//     var fItems = $scope.foodItems.split(',');
//     if (fItems.length >=1 && fItems.length<=3) {
//       if ($scope.foodItems.length==0) {
//        $scope.message = '"Please enter data first"';
//       }else {
//        $scope.message = '"Enjoy!"';
//       }
//     }else if (fItems.length>3) {
//      $scope.message = '"Too much!"';
//     }
//   };
// }
// })();

(function(){'use strict'
angular.module('HungerAdvisor',[]).controller('HungerAdvisorController',HungerAdvisorController);HungerAdvisorController.$inject=['$scope','$filter'];function HungerAdvisorController($scope,$filter){$scope.message="";$scope.foodItems="";$scope.calculateFoodItems=function(){var totalFoodItems="noitems";var fItems=$scope.foodItems.split(',');if(fItems.length>=1&&fItems.length<=3){if($scope.foodItems.length==0){$scope.message='"Please enter data first"'}else{$scope.message='"Enjoy!"'}}else if(fItems.length>3){$scope.message='"Too much!"'}}}})()