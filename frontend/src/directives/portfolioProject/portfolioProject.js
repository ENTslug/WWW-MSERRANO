angular.module("www.directives")
        .directive("portfolioProject", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/portfolioProject/portfolioProject.html',
                scope: {
                    key: '@',
                    info: '=',
                },
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                elem.css({
                    "background": __background_url(scope.key),
                    "background-size": "cover",
                });
            }

            // -- Helpers -- //
            function __background_url(key) {
                var base_path = '/resources/portfolio/' + key + '/';
                var filename = key + '_thumb_lo.png';

                return "url('" + base_path + filename + "')";
            }
        });
