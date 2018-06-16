angular.module("www.directives")
        .directive("revealAnimation", function (Const) {
            var directive_def = {
                restrict: 'E',
                templateUrl: 'frontend/src/directives/revealAnimation/revealAnimation.html',
                transclude: true,
                scope: {
                    condition: "=",
                    backsideText: "@",
                    direction: "@",
                },
            };
            return directive_def;
        });
