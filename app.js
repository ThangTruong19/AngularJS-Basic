(function() {
        'use strict';

        angular.module('myApp', [])
            .controller('myController', function($scope) {
                $scope.name = "";
                $scope.totalValue = 0;
                $scope.keyup = function() {
                    for (var i = 0; i < $scope.name.length; i++) {
                        $scope.totalValue += $scope.name.charCodeAt(i);
                    }
                }
            });
    }

)();