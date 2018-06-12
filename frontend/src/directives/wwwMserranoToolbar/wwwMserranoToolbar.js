angular.module("www.directives")
        .directive("wwwMserranoToolbar", function (Const, $mdBottomSheet, $timeout) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/wwwMserranoToolbar/wwwMserranoToolbar.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.toolbar = {
                    show_menu: false,
                    hide_mobile_menu: hide_mobile_menu,
                    toggle_mobile_menu: toggle_mobile_menu,
                    fling_or_scale: 'md-fling', //md-scale
                };

                // -- Helpers -- //
                function toggle_mobile_menu() {
                    scope.toolbar.show_menu = !scope.toolbar.show_menu;
                    if (scope.toolbar.show_menu === true) {
                        $mdBottomSheet.show({
                            template: '<md-bottom-sheet>' +
                                    '    <www-mserrano-footer></www-mserrano-footer>' +
                                    '</md-bottom-sheet>'
                        }).catch(function () {
                            scope.toolbar.show_menu = false;
                        });
                    } else {
                        $mdBottomSheet.hide();
                    }

                    // the shade from mdBottomSheet will only activate animation after resolve. we fix that here.
                    $timeout(function () {
                        var backdrop = angular.element(document.getElementsByTagName('md-backdrop'));
                        backdrop.bind('click', hide_mobile_menu);

                        backdrop.on('$destroy', function () {
                            backdrop.unbind('click', hide_mobile_menu);
                        });
                    });
                }

                function hide_mobile_menu() {
                    $mdBottomSheet.hide();
                    scope.toolbar.show_menu = false;
                }
            }
        });