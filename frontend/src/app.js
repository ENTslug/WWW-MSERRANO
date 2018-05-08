angular.module("www", [
    "pascalprecht.translate",
    "ngSanitize",
    "ngMaterial",
    "ngAnimate",
    "ngAria",
    //
    "www.blocks",
    "www.constants",
    "www.controllers",
    "www.routing",
    "www.services",
]);

angular.module("www.blocks", []);
angular.module("www.constants", []);
angular.module("www.controllers", []);
angular.module("www.routing", ["ngRoute"]);
angular.module("www.services", []);