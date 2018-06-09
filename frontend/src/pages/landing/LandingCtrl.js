angular.module("www.controllers")
        .controller("LandingCtrl", function (Const, Midtier) {
            var _this = this;

            _this.portfolio = {
                left: [],
                right: [],
            };

            var has_access = true;
            Midtier.my_portfolio.call(has_access).then(function () {
                var list_project = Midtier.my_portfolio.get_data(Const.P.ProjectInfo);
                var left_side = true;

                for (var i = 0, ii = list_project.length; i < ii; ++i) {
                    var project_info = list_project[i];
                    if (left_side === true) {
                        _this.portfolio.left.push(project_info);
                    } else {
                        _this.portfolio.right.push(project_info);
                    }
                    left_side = !left_side; // flip sides
                }
            });

            // -- Functions -- //

        });
