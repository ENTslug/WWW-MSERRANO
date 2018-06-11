angular.module("www.directives")
        .directive("detectBrowser", function (Const, Browser) {
            var directive_def = {
                restrict: 'A',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var info = {
                    'Chrome': (Browser.is_chrome() === true),
                    'Firefox': (Browser.is_firefox() === true),
                    'Safari': (Browser.is_safari() === true),
                };
                add_browser_name_as_css_class(elem, info);

                // -- Helpers -- //
                function add_browser_name_as_css_class(target, browser_detected) {
                    for (var name in browser_detected) {
                        if (browser_detected[name] === true) {
                            target.addClass(name);
                        }
                    }
                }

            }

        });
