angular.module("www.directives")
        .directive("portfolioProject", function (Const) {
            var directive_def = {
                restrict: 'E',
                replace: true,
                templateUrl: 'frontend/src/directives/portfolioProject/portfolioProject.html',
                scope: {
                    info: '=',
                },
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var key = scope.info[Const.P.Key];
                scope.template = {
                    thumbnail: __background_url(key),
                    org: scope.info[Const.P.Organization],
                    url: (scope.info[Const.P.Url] === Const.P.IsPrivate ? '-' : scope.info[Const.P.Url]),
                    title: 'title_' + key,
                    description: 'description_' + key,
                };
            }

            // -- Helpers -- //
            function __background_url(key) {
                var base_path = '/resources/portfolio/' + key + '/';
                var filename = key + '_thumb_hi.png';

                return base_path + filename;
            }
        });
