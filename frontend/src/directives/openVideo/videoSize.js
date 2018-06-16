angular.module("www.directives")
        .directive("videoSize", function (Const, $document, $timeout) {
            var directive_def = {
                restrict: "A",
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var settings, el = {
                    window: angular.element(window)
                };
                settings = {
                    window_x: null,
                    window_y: null,
                    video_width: null,
                    video_height: null,
                };
                $timeout(function () {
                    resize_it();
                });
                el.window.on("resize", __handle_perfect_size);
                el.window.on("$destroy", __teardown);

                // -- Helpers -- //
                function __teardown() {
                    el.window.off("resize", __handle_perfect_size);
                }
                function __handle_perfect_size() {
                    settings.window_x = document.body.clientWidth;
                    settings.window_y = document.body.clientHeight;
                    settings.video_width = elem[0].clientWidth;
                    settings.video_height = elem[0].clientHeight;

                    resize_it();
                }
                function resize_it() {
                    if (settings.window_x < settings.video_width) {
                        elem.css({width: "80%"});
                    }else {
                        elem.css({width: "100%"});
                    }
                    if (settings.window_y < settings.video_height) {
                        elem.css({height: "75%"});
                    }
                }
            }

        });
