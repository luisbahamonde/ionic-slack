angular.module('starter.directives', [])

    .directive('watchMenu', function($timeout, $ionicSideMenuDelegate) {
        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {
                // Run in the next scope digest
                $timeout(function() {
                    // Watch for changes to the openRatio which is a value between 0 and 1 that says how "open" the side menu is

                    $scope.$watch(function() {
                            return $ionicSideMenuDelegate.getOpenRatio();
                        },
                        function(ratio) {
                            $scope.data=ratio;
                            if( ratio > 0.5){

                                StatusBar.hide();
                                ionic.DomUtil.blurAll();

                            }else{

                                StatusBar.show();

                            }

                            cordova.plugins.Keyboard.close();

                        });
                });
            }
        };
    })

    .directive('animateRatio', function($timeout, $ionicSideMenuDelegate) {

        return {
            restrict: 'A',
            scope: {
                animateRatio: '='
            },
            link: function (scope, element, attr) {

                $timeout(function () {
                    scope.$watch(function () {
                            return $ionicSideMenuDelegate.getOpenRatio();
                        },
                        function (ratio) {
                            scope.animateRatio(element[0], ratio);
                        });
                });
            }
        }

    });