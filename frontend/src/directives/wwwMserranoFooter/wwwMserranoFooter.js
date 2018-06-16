angular.module("www.directives")
        .directive("wwwMserranoFooter", function (Const, DateTime, $timeout, $compile) {
            var directive_def = {
                restrict: "E",
                replace: true,
                templateUrl: "frontend/src/directives/wwwMserranoFooter/wwwMserranoFooter.html",
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.footer = {// data for translate-values
                    copyleft: {year: DateTime.current_year},
                    short_bio: {counting: calc_exp_since(2014)},
                    list_navigation: [
                        {url: Const.Url.repo_devops, desc: "DevOps github page", label: "DevOps"},
                        {url: Const.Url.repo_lab, desc: "LAB-MSERRANO github page", label: "Lab"},
                        {url: Const.Url.repo_www, desc: "WWW-MSERRANO github page", label: "Portfolio"},
                        {url: Const.Url.repo_docs, desc: "DOCS-MSERRANO github page", label: "Docs"},
                    ],
                };
                scope.full_access = {
                    input_email: "",
                    request_full_access: request_full_access,
                    //https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
                    regex_valid_email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                };
                scope.tooltip = {
                    portrait_msg: "#SeaDubs",
                    show_it: false,
                    under_construction_msg: under_construction_msg,
                };
                scope.css = {
                    under_construction: css_under_construction,
                    invalid_email: css_invalid_email,
                    valid_email: css_valid_email,
                    disabled: css_disabled,
                };
                $timeout(function () {
                    /* workaround (mdTooltip breaks mdBottomSheet animation on Safari)
                     *     probably appending tooltip to body as bottomsheet is animating
                     *     up, triggering reflow. so we delay adding tooltip to dom.
                     */
                    var myPortrait = document.getElementById('myPortrait');
                    var tooltip = '<md-tooltip md-direction="top" ' +
                            'md-autohide ' +
                            'md-visible="tooltip.show_it">' +
                            '<span ng-bind="(tooltip.portrait_msg) | translate"></span>' +
                            '</md-tooltip>';
                    var template = myPortrait.outerHTML.slice(0, -6) + tooltip + '</div>';
                    var final = $compile(template)(scope);
                    myPortrait.replaceWith(final[0]);
                }, 1000);

                // -- Helpers -- //
                function css_under_construction(url) {
                    return (url === Const.P.ComingSoon);
                }
                function css_invalid_email(input) {
                    return (input.$error.pattern === true);
                }
                function css_valid_email(input) {
                    return (input.$error.pattern !== true) && (input.$error.required !== true);
                }
                function css_disabled(input) {
                    return (css_valid_email(input) === false) && (input.$pristine === false);
                }
                function under_construction_msg(url) {
                    if (css_under_construction(url) && scope.tooltip.show_it === false) {
                        ___speak___louder("more_info_message");
                    }
                }
                function calc_exp_since(year_start) {
                    return (parseInt(DateTime.current_year - 1) - year_start);
                }
                function request_full_access() {
                    if (scope.full_access.input_email !== "") {
                        ___speak___louder("not_available_yet");
                    }
                }
                function ___speak___louder(msg) {
                    scope.tooltip.portrait_msg = msg;
                    scope.tooltip.show_it = true;
                    $timeout(function () {
                        if (scope.tooltip.portrait_msg === msg) {
                            scope.tooltip.show_it = false;
                        }
                    }, 2000);
                }
            }
        });
