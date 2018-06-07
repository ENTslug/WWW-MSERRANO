angular.module("www.directives")
        .directive("portfolioProject", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/portfolioProject/portfolioProject.html',
                scope: {
                    thumb: '@',
                },
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                elem.css({
                    "background": "url('" + scope.thumb + "')",
                    "background-size": "cover",
                });
            }
        });
