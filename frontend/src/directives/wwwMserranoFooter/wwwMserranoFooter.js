angular.module("www.directives")
        .directive("wwwMserranoFooter", function (Const, DateTime) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/wwwMserranoFooter/wwwMserranoFooter.html',
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                scope.footer = {// data for translate-values
                    copyleft: {year: DateTime.current_year},
                    short_bio: {counting: calc_exp_since(2014)},
                    input_email: '',
                    //https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
                    regex_valid_email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                };
                scope.css = {
                    invalid_email: css_invalid_email,
                    valid_email: css_valid_email,
                    disabled: css_disabled,
                };

                // -- Helpers -- //
                function css_invalid_email(input) {
                    return (input.$error.pattern === true);
                }
                function css_valid_email(input) {
                    return (input.$error.pattern !== true) && (input.$error.required !== true);
                }
                function css_disabled(input) {
                    return (css_valid_email(input) === false) && (input.$pristine === false);
                }
                function calc_exp_since(year_start) {
                    return (parseInt(DateTime.current_year - 1) - year_start);
                }
            }
        });
