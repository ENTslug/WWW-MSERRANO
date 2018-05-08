angular.module("www.services")
        .service("Midtier", function (Const, $http, Request) {
            var self; // "As much on the midtier as possible"

            // -- Service -- //
            return (self = {
                www_constants: new Request.cached(function () {
                    var get = {}, post = {};
                    var config = {
                        method: 'GET',
                        url: '/www_constants',
                        params: get,
                        data: post,
                    };

                    return $http(config);
                }),
                checker: new Request.standard(function () {
                    var get = {}, post = {};
                    var config = {
                        method: 'GET',
                        url: '/checker',
                        params: get,
                        data: post,
                    };

                    return $http(config);
                }),
            });

        });