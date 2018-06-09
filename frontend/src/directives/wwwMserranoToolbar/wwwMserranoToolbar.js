angular.module("www.directives")
        .directive("wwwMserranoToolbar", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/wwwMserranoToolbar/wwwMserranoToolbar.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                
            }
        });
