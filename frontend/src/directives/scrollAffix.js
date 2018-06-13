angular.module("www.directives")
        .directive("scrollAffix", function (Const, $document, $timeout) {
            var directive_def = {
                restrict: "A",
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var settings = {
                    scroll_id: attrs.scrollAffix,
                    affix_top: attrs.affixTop || false,
                    affix_bottom: attrs.affixBottom || false,
                    affix_parallax: (attrs.affixParallaxEffect !== undefined),
                    do_logic: (attrs.affixCondition !== "false"),
                    parallax_const: 40,
                    scroll_info: null,
                };

                if (settings.do_logic === true) {
                    var scroll_container = angular.element($document[0].getElementById(settings.scroll_id));

                    elem.addClass(settings.scroll_id);
                    if (settings.affix_top !== false) {
                        scroll_container.on("scroll", __handle_classname_at_top);
                        set_transition("0.10s");
                    }
                    if (settings.affix_bottom !== false) {
                        scroll_container.on("scroll", __handle_classname_at_bottom);
                        set_transition("0.10s");
                    }
                    if (settings.affix_parallax !== false) {
                        elem.css({
                            "background-size": "auto " + (100 + settings.parallax_const) + "%",
                        });
                        scroll_container.on("scroll", __handle_parallax_effect);
                        requestAnimationFrame(__animate);
                        set_transition(attrs.affixParallaxEffect);
                    }

                    elem.on("$destroy", __teardown);
                }

                // -- Helpers -- //
                function __teardown() {
                    scroll_container.off("scroll", __handle_classname_at_top);
                    scroll_container.off("scroll", __handle_classname_at_bottom);
                }
                function __handle_classname_at_top() {
                    var at_top_of_page = (scroll_container[0].scrollTop <= 0);
                    if (at_top_of_page === true) {
                        elem.addClass(settings.affix_top);
                    } else {
                        elem.removeClass(settings.affix_top);
                    }
                }
                function __handle_classname_at_bottom() {
                    var scroll_bot = (scroll_container[0].scrollHeight - scroll_container[0].offsetHeight);
                    var at_bottom_of_page = (scroll_bot <= scroll_container[0].scrollTop);
                    if (at_bottom_of_page === true) {
                        elem.addClass(settings.affix_bottom);
                    } else {
                        elem.removeClass(settings.affix_bottom);
                    }
                }
                function __handle_parallax_effect() {
                    settings.scroll_info = scroll_container[0];
                }
                function __animate() {
                    requestAnimationFrame(__animate);

                    var scroll_info = {
                        position: scroll_container[0].scrollTop,
                        height: (scroll_container[0].scrollHeight - scroll_container[0].offsetHeight),
                    };
                    var ratio = (scroll_info.position / scroll_info.height);
                    var result = (ratio * settings.parallax_const);

                    elem.css({
                        "background-position-y": '-' + result + 'vh',
                    });
                }
                function set_transition(time_val) {
                    $timeout(function () {
                        elem[0].style.transition = "all " + time_val + " ease-out";
                    }, 100);
                }
            }

        });
