angular.module("www.directives")
        .directive("portfolioProject", function (Const) {
            var directive_def = {
                restrict: "E",
                replace: true,
                templateUrl: "frontend/src/directives/portfolioProject/portfolioProject.html",
                scope: {
                    side: "@",
                    info: "=",
                },
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var key = scope.info[Const.P.Key];
                scope.project = {
                    thumbnail: __background_url(key),
                    org: scope.info[Const.P.Organization],
                    url: (scope.info[Const.P.Url] === Const.P.IsPrivate ? "-" : scope.info[Const.P.Url]),
                    title: "title_" + key,
                    description: "description_" + key,
                };

                var thumbnail = angular.element(elem[0].querySelector(".project__thumbnail"));
                thumbnail.css({
                    "background": "url(" + __background_url(key) + ")",
                    "background-size": "cover",
                });
            }

            // -- Helpers -- //
            function __background_url(key) {
                var base_path = "/resources/portfolio/" + key + "/";
                var filename = key + "_thumb_hi.png";

                return base_path + filename;
            }
        });
