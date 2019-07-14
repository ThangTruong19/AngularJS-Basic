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
                $scope.callTimeout = function() {
                    console.log("Clicked button!!");
                    setTimeout(function() {
                        $scope.$apply(function() {
                            console.log("Enter setTimeout");
                            $scope.watcher1 += 1;
                        })
                    }, 2000)
                }

            }])
            .controller('myController5', ['$scope', function($scope) {
                $scope.shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
                    "Pepto Bismol(Chocolate flavor)", "Pepto Bismol(Cookie flavor)"
                ];

                $scope.shoppingList2 = [{
                    name: "Milk",
                    quantity: 2
                }, {
                    name: "Donuts",
                    quantity: 200
                }, {
                    name: "Cookie",
                    quantity: 300
                }, {
                    name: "Chocolate",
                    quantity: 5
                }];

                $scope.addNewItemList1 = function() {
                    $scope.shoppingList1.push($scope.newItemNameList1);
                }

                $scope.addNewItemList2 = function() {
                    var newItem = {
                        name: $scope.newItemNameList2,
                        quantity: $scope.newItemQuantityList2
                    };
                    $scope.shoppingList2.push(newItem);
                }

                // function searchItem(value) {
                //     return (value.indexOf($scope.searchKey) !== -1);
                // }

                // $scope.search = function() {
                //     $scope.searchResult = $scope.shoppingList1.filter(searchItem);
                // }
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