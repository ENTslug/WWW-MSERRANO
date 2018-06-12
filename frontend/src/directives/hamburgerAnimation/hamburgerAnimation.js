angular.module("www.directives")
        .directive("hamburgerAnimation", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                attrs.$observe('isActive', do_animation);

                scope.settings = {
                    animation_type: 'hamburger--emphatic',
                };

                // -- Helpers -- //
                function do_animation(state) {
                    if (state === 'true') {
                        elem.addClass('is-active');
                    } else {
                        elem.removeClass('is-active');
                    }
                }
            }
        });
