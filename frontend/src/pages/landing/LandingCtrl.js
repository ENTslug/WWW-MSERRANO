angular.module("www.controllers")
        .controller("LandingCtrl", function (Const, Midtier) {
            var _this = this;

            _this.portfolio = {
                immutable: [],
            };

            var has_access = true;
            Midtier.my_portfolio.call(has_access).then(function () {
                _this.portfolio.immutable = Midtier.my_portfolio.get_data(Const.P.ProjectInfo);
            });

            // -- Functions -- //

        });
