(function () {
    'use strict';

    var app = angular.module('mtgApp');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', function($routeProvider, routes) {

      routes.forEach(function (r) {
          $routeProvider.when(r.url, r.config);
      });
      $routeProvider.otherwise({ redirectTo: '/' });

    }]);

    // Define the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/startScreen/startScreen.html',
                    title: 'home',
                    settings: {
                        content: 'Home'
                    }
                }
            }, {
                url: '/draftsim',
                config: {
                    title: 'draftsim',
                    templateUrl: 'app/draftsim/draftsim.html',
                    settings: {
                        content: 'Draft Simulator'
                    }
                }
            }, {
                url: '/sealedsim',
                config: {
                    title: 'sealedsim',
                    templateUrl: 'app/draftsim/draftsim.html',
                    settings: {
                        content: 'Sealed Simulator'
                    }
                }
            }, {
                url: '/browsecards',
                config: {
                    title: 'browsecards',
                    templateUrl: 'app/draftsim/draftsim.html',
                    settings: {
                        content: 'Browse Cards'
                    }
                }
            }, {
                url: '/boostersim',
                config: {
                    title: 'boostersim',
                    templateUrl: 'app/draftsim/draftsim.html',
                    settings: {
                        content: 'Booster Simulator'
                    }
                }
            }, {
                url: '/about',
                config: {
                    title: 'about',
                    templateUrl: 'app/draftsim/draftsim.html',
                    settings: {
                        content: 'About'
                    }
                }
            }
        ];
    }
})();
