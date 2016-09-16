angular.module("starter")
.controller("HomeController",function($state,$scope){

    $scope.redirect = function(){
        console.log("foi");
        $state.go("signup");
        
    }

});