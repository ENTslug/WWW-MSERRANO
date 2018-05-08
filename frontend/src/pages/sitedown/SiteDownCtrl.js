angular.module("www.controllers")
        .controller("SiteDownCtrl", function (Const, Midtier) {
            var _this = this;
            _this.sitedown = "Sitedown 1 " + Const.Default.Date;

            Midtier.www_constants.call().then(function () {
                var res = Midtier.www_constants.get_data("Default")
                console.log(res);
            });
            Midtier.checker.call().then(function () {
                console.log('hello world');
            });
        });