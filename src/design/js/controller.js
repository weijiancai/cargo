'use strict';

/* Controllers */

var cargoApp = angular.module('cargoApp', []);

cargoApp.controller('NavMenuListCtrl', function NavMenuListCtrl($scope, $http) {
    $http.get('js/cargo/menus.json').success(function(data) {
        $scope.menus = data.in_cxg;
    });
});
