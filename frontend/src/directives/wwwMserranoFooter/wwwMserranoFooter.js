angular.module("www.directives")
        .directive("wwwMserranoFooter", function (Const, DateTime) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/wwwMserranoFooter/wwwMserranoFooter.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.current_year = DateTime.current_year;
            }
        });
