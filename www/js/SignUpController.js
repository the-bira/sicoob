angular.module("starter")
.controller("SignUpController",function($state,$scope){

    $scope.redirect = function(){
        $state.go("stepbystep");
    }
});