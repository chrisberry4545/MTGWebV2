(function () {
    'use strict';

    angular.module('mtgApp').controller('sidebar',
        ['$scope', '$route', 'routes', '$mdSidenav', function($scope, $route, routes, $mdSidenav) {

            $scope.isCurrent = isCurrent;
            $scope.navRoutes = routes;
            $scope.topNavRoutes = $scope.navRoutes.slice(1, $scope.navRoutes.length);
            $scope.toggleMenu = function() {
              $mdSidenav('nav').toggle();
            };

            $scope.$on('$routeChangeSuccess', function(next, current) {
              $mdSidenav('nav').close();
            });


            function isCurrent(route) {
                if (!route.config.title || !$route.current || !$route.current.title) {
                    return '';
                }
                var menuName = route.config.title;
                return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
            }
        }]);
})();
