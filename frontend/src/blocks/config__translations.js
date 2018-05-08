angular.module("www.blocks")
        .config(function ($translateProvider) {
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider
                    .preferredLanguage("en");
        });