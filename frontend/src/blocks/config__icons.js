angular.module("www.blocks")
        .config(function ($mdIconProvider) {
            $mdIconProvider
                    .iconSet('social:github', 'resources/feather/github.svg', 24)
                    .iconSet('social:linkedin', 'resources/feather/linkedin.svg', 24)
                    .iconSet('social:resume', 'resources/feather/file-text.svg', 24)
                    .iconSet('social:twitter', 'resources/feather/twitter.svg', 24)
        });
