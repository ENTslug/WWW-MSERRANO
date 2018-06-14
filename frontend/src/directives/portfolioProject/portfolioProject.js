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
                    org: scope.info[Const.P.Organization],
                    git_repo: scope.info[Const.P.GitHub],
                    url: scope.info[Const.P.Url],
                    note: scope.info[Const.P.Note],
                    //
                    title: "title_" + key,
                    description: "description_" + key,
                };
                scope.template = {
                    requires_access: (scope.info[Const.P.IsPrivate] === true),
                    how_to_unlock: how_to_unlock,
                    is_disabled: is_disabled,
                    show_description: false,
                };

                var thumbnail = angular.element(elem[0].querySelector(".project__thumbnail"));
                thumbnail.css({
                    "background": "url(" + __background_url(key) + ")",
                    "background-size": "cover",
                });

                // -- Helpers -- //
                function how_to_unlock() {
                    console.log('hello world');
                }
                function is_disabled(key) {
                    return (scope.project[key] !== Const.P.NotAvail);
                }
                function __background_url(key) {
                    var base_path = "/resources/portfolio/" + key + "/";
                    var filename = key + "_thumb_hi.png";

                    return base_path + filename;
                }
            }

        });
