angular.module("www.directives")
        .directive("openVideo", function (Const, $timeout) {
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

                    el.video = create_html5_video();
                    el.video.css({
                        "display": "none"
                    });
                    el.body.append(el.video);

                    elem.on('click', __on_click);
                    elem.on('$destroy', __teardown);
                });

                // -- Helpers -- //
                function __teardown() {
                    elem.off('click', __on_click);
                }
                function __on_click() {
                    enter_fullscreen(el.video[0]);
                    el.video[0].play();
                }
                function create_html5_video() {
                    var _return = angular.element('<video ' + settings.options + '>'
                            + (settings.video.webm ? '<source src="%s" type="video/webm">'.replace('%s', settings.video.webm) : '')
                            + (settings.video.mp4 ? '<source src="%s" type="video/mp4">'.replace('%s', settings.video.mp4) : '')
                            + '</video>');
                    return _return;
                }
                function enter_fullscreen(_vid) {
                    var _rfs = _vid.requestFullscreen
                            || _vid.msRequestFullScreen
                            || _vid.mozRequestFullScreen
                            || _vid.webkitRequestFullScreen;
                    _rfs.call(_vid);
                }
            }

        });
