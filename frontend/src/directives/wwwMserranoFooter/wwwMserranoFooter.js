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
                };

                // -- Helpers -- //
                function calc_exp_since(year_start) {
                    return (parseInt(DateTime.current_year - 1) - year_start);
                }
            }
        });


