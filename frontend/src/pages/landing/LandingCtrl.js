angular.module("www.controllers")
        .controller("LandingCtrl", function (Const, Midtier) {
            var _this = this;

            var has_access = true;
            Midtier.my_portfolio.call(has_access).then(function () {
                var res = Midtier.my_portfolio.get_data("Projects")
            });
        });