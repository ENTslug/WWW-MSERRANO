angular.module("www.services")
        .service("Browser", function (Const) {
            var self;

            // -- Service -- //
            return (self = {
                is_chrome: is_chrome,
                is_firefox: is_firefox,
                is_safari: is_safari,
                is_iOS: is_iOS,
            });

            // -- Functions -- //
            /* 
             * https://stackoverflow.com/a/9851769 
             * 
             * Analysis of reliability
             * 
             * Chrome: The global chrome object, containing several properties including a documented chrome.webstore object.
             * Firefox: Firefox's API to install add-ons: InstallTrigger
             * Safari: Check against SafariRemoteNotification, which was introduced after version 7.1, to cover all Safaris from 3.0 and upwards.
             * iOS: https://stackoverflow.com/a/9039885 checks via navigator.platform
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
            function is_iOS() {
                var iDevices = [
                    'iPad Simulator',
                    'iPhone Simulator',
                    'iPod Simulator',
                    'iPad',
                    'iPhone',
                    'iPod'
                ];
                var _return = false;
                if (!!navigator.platform) {
                    while (iDevices.length) {
                        if (navigator.platform === iDevices.pop()) {
                            _return = true;
                        }
                    }
                }
                return _return;
            }

        });
