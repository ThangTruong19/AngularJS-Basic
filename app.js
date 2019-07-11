(function() {
        'use strict';

        angular.module('myApp', [])
            .controller('myController', ['$scope', '$filter', function($scope, $filter) {
                $scope.name = "";
                $scope.totalValue = 0;
                $scope.keyup = function() {
                    for (var i = 0; i < $scope.name.length; i++) {
                        $scope.totalValue += $scope.name.charCodeAt(i);
                    }
                }
                $scope.blur = function() {
                    var upperName = $filter('uppercase');
                    $scope.name = upperName($scope.name);
                }
            }])
            .controller('myController2', ['$scope', function($scope) {
                $scope.state = "happy";
                $scope.flip = function() {
                    if ($scope.state == "happy") {
                        $scope.state = "sad";
                    } else {
                        $scope.state = "happy";
                    }
                };
            }]);
    }

)();