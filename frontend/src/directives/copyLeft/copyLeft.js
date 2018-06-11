angular.module("www.directives")
        .directive("copyLeft", function (Const) {
            var directive_def = {
                restrict: 'E',
                templateUrl: 'frontend/src/directives/copyLeft/copyLeft.html',
                transclude: true,
            };
            return directive_def;

        });
