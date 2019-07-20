((function() {
    'use strict'
    angular.module('myApp1', [])
        .controller('ParentController1', ParentController1)
        .controller('ChildController1', ChildController1)
        .controller('ParentController2', ParentController2)
        .controller('ChildController2', ChildController2);

    ParentController1.$inject = ['$scope'];
    ChildController1.$inject = ['$scope'];
    ChildController2.$inject = ['$scope'];

    function ParentController1($scope) {
        $scope.parentValue = 1;
        $scope.pc = this;
        $scope.pc.parentValue = 1;
    }

    function ChildController1($scope) {
        console.log("$scope.parentValue: ", $scope.parentValue1);
        console.log("CHILD $scope: ", $scope);

        $scope.parentValue = 5;
        console.log("** Change $scope.parentValue = 5 **");
        console.log("$scope.parentValue: ", $scope.parentValue);
        console.log($scope);

        $scope.pc.parentValue = 6;
        console.log("** Change $scope.pc.parentValue = 6 **");
        console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
        console.log($scope);
    }

    function ParentController2() {
        this.value = 1;
    }

    function ChildController2($scope) {
        this.value = 5;
        console.log("Child Controller $scope: ", $scope);
    }
}))();