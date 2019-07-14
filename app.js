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
            }])
            .controller('myController3', ['$scope', '$filter', 'appendFilter', 'changeTextFilter',
                function($scope, $filter, appendFilter, changeTextFilter) {
                    $scope.text = "This is just test infomation";
                    $scope.text2 = ""
                    var upper = $filter('uppercase');
                    $scope.text = upper($scope.text);
                    $scope.blurInput = function() {
                        console.log("Enter blurInput");
                        appendFilter($scope.text2);
                    }

                }
            ])
            .controller('myController4', ['$scope', function($scope) {
                $scope.showWatcherCount = function() {
                    console.log("Number of watcher: " + $scope.$$watchersCount);
                }
                $scope.watcher1 = 0;
                $scope.watcher2 = 0;
                $scope.incrementWatcher = function() {
                    $scope.watcher1 += 1;
                    $scope.watcher2 += 1;
                    $scope.watcher3 = 1;
                }
            }])
            .filter('append', appendString)
            .filter('changeText', changeText);

        function appendString() {
            return function(input) {
                return input + " - Created By Custom Filter";
            }
        }

        function changeText() {
            return function(input, original, replace) {
                return input.replace(original, replace);
            }
        }
    }

)();