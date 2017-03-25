
(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', lunchCheckController);
    
    lunchCheckController.$inject = ['$scope'];
    function lunchCheckController($scope) {
        $scope.lunchMsg = "";
        
        $scope.checkIfTooMuch = function () {
            if (!$scope.lunchItems) {
                $scope.lunchMsg = "please enter data first.";
            } else if (($scope.lunchItems).split(',').length > 3) {
                $scope.lunchMsg = "Too Much!";
            } else {
                $scope.lunchMsg = "Enjoy!";
            }
        };
    }

                    
})();
