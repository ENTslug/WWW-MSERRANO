angular.module("www.directives")
        .directive("scrollAffix", function (Const, $document, $timeout) {
            var directive_def = {
                restrict: 'A',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var settings = {
                    scroll_id: attrs.scrollAffix,
                    affix_top: attrs.affixTop || false,
                    affix_bottom: attrs.affixBottom || false,
                };
                var scroll_container = angular.element($document[0].getElementById(settings.scroll_id));

                elem.addClass(settings.scroll_id);
                $timeout(function () {
                    elem[0].style.transition = 'all 0.42s ease-out';
                }, 100);

                if (settings.affix_top !== false) {
                    scroll_container.on('scroll', __handle_classname_at_top);
                }
                if (settings.affix_bottom !== false) {
                    scroll_container.on('scroll', __handle_classname_at_bottom);
                }

                elem.on('$destroy', __teardown);

                // -- Helpers -- //
                function __teardown() {
                    scroll_container.off('scroll', __handle_classname_at_top);
                    scroll_container.off('scroll', __handle_classname_at_bottom);
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
                    var at_bottom_of_page = (scroll_bot === scroll_container[0].scrollTop);
                    if (at_bottom_of_page === true) {
                        elem.addClass(settings.affix_bottom);
                    } else {
                        elem.removeClass(settings.affix_bottom);
                    }
                }

            }

        });
