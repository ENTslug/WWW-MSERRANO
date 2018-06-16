angular.module("www.directives")
        .directive("projectActions", function (Const) {
            var directive_def = {
                restrict: "E",
                replace: true,
                templateUrl: "frontend/src/directives/portfolioProject/projectActions/projectActions.html",
            };
            return directive_def;

            // -- Functions -- //

        });
