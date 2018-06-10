angular.module("www.directives")
        .directive("detectBrowser", function (Const) {
            var directive_def = {
                restrict: 'A',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var parsed = {
                    'Chrome': (is_chrome() === true),
                    'Firefox': (is_firefox() === true),
                    'Safari': (is_safari() === true),
                };
                for (var browser in parsed) {
                    if (parsed[browser] === true) {
                        elem.addClass(browser);
                    }
                }

                // -- Helpers -- //
                /* 
                 * https://stackoverflow.com/a/9851769 
                 * 
                 * Analysis of reliability
                 * 
                 * Chrome: The global chrome object, containing several properties including a documented chrome.webstore object.
                 * Firefox: Firefox's API to install add-ons: InstallTrigger
                 * Safari: Check against SafariRemoteNotification, which was introduced after version 7.1, to cover all Safaris from 3.0 and upwards.
                 * 
                 * */
                function is_chrome() {
                    return (!!window.chrome && !!window.chrome.webstore);
                }
                function is_firefox() {
                    return (typeof InstallTrigger !== 'undefined');
                }
                function is_safari() {
                    return (/constructor/i.test(window.HTMLElement) || (function (p) {
                        return p.toString() === "[object SafariRemoteNotification]";
                    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
                }
            }

        });
