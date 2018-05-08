describe("!! app.js !! ", function () {
    "use strict";

    // setUp - constants
    beforeEach(function () {
        helper.test.setUp({});
    });

    // setUp - test case
    var rnd;
    beforeEach(function () {
        rnd = helper.number.rand();
    });

    // teardown
    var obj;
    afterEach(function () {
        obj = null;

        helper.test.tearDown();
    });

    it("should exist", function () {
        helper.expect.module_to_exist("www");
    });

    describe("module", function () {
        beforeEach(function () {
            obj = angular.module("www");
        });

        describe("www.routing", function () {
            it("should be in dependency list", function () {
                helper.expect.in_array("www.routing", obj.requires);
            });

            it("should be instantiated", function () {
                helper.expect.module_to_exist("www.routing");
            });

            it("should use ngRoute", function () {
                obj = angular.module("www.routing");
                helper.expect.in_array("ngRoute", obj.requires);
            });
        });

        describe("www.constants", function () {
            it("should be in dependency list", function () {
                helper.expect.in_array("www.constants", obj.requires);
            });

            it("should be instantiated", function () {
                helper.expect.module_to_exist("www.constants");
            });
        });

        describe("www.controllers", function () {
            it("should be in dependency list", function () {
                helper.expect.in_array("www.controllers", obj.requires);
            });

            it("should be instantiated", function () {
                helper.expect.module_to_exist("www.controllers");
            });
        });

        describe("www.services", function () {
            it("should be in dependency list", function () {
                helper.expect.in_array("www.services", obj.requires);
            });

            it("should be instantiated", function () {
                helper.expect.module_to_exist("www.services");
            });
        });
    });
});