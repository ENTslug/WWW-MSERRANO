angular.module("www.routing")
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/sitedown', {
                templateUrl: 'frontend/src/pages/sitedown/sitedown.html',
                controller: 'SiteDownCtrl',
                controllerAs: 'page',
            });
            $routeProvider.when('/', {
                templateUrl: 'frontend/src/pages/landing/landing.html',
                controller: 'LandingCtrl',
                controllerAs: 'page',
            });

            $routeProvider.otherwise({redirectTo: '/'});
        });