angular.module("www.services")
        .service("Midtier", function (Const, $http, Request) {
            var self; // "As much on the midtier as possible"

            // -- Service -- //
            return (self = {
                my_portfolio: new Request.cached(function (has_access) {
                    var get = {}, post = {};
                    var config = {
                        method: 'POST',
                        url: '/landing/my_portfolio',
                        params: get,
                        data: post,
                    };
                    
                    post[Const.P.Access] = (has_access === true);

                    return $http(config);
                }),
            });

        });
