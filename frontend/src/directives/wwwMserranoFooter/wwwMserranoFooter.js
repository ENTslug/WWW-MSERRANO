angular.module("www.directives")
        .directive("wwwMserranoFooter", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/wwwMserranoFooter/wwwMserranoFooter.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.established = '2017';
            }
        });
