angular.module("www.directives")
        .directive("openVideo", function (Const, $timeout, $mdDialog) {
            var directive_def = {
                restrict: "A",
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var settings, el = {
                    video: null,
                    body: angular.element(document.body)
                };
                $timeout(function () {
                    settings = {
                        options: attrs.openVideo || '',
                        video: {
                            webm: attrs.videoWebm || false,
                            mp4: attrs.videoMp4 || false,
                        },
                        attached: false,
                    };

                    elem.on('click', __on_click);
                    elem.on('$destroy', __teardown);
                });

                // -- Helpers -- //
                function __teardown() {
                    elem.off('click', __on_click);
                }
                function __on_click($event) {
                    $mdDialog.show({
                        template: create_html5_video(),
                        targetEvent: $event,
                        clickOutsideToClose: true
                    });

                }
                function create_html5_video() {
                    var _return = '<video ' + settings.options + ' aria-label="project demo" video-size>'
                            + (settings.video.webm ? '<source src="%s" type="video/webm">'.replace('%s', settings.video.webm) : '')
                            + (settings.video.mp4 ? '<source src="%s" type="video/mp4">'.replace('%s', settings.video.mp4) : '')
                            + '</video>';
                    return _return;
                }
            }

        });
