angular.module("www.blocks")
        .config(function ($mdIconProvider) {
            $mdIconProvider
                    .iconSet('social:github', 'resources/feather/github.svg', 24)
                    .iconSet('social:linkedin', 'resources/feather/linkedin.svg', 24)
                    .iconSet('social:resume', 'resources/feather/file-text.svg', 24)
                    .iconSet('social:twitter', 'resources/feather/twitter.svg', 24)
                    //
                    .iconSet('project:link', 'resources/feather/external-link.svg', 24)
                    .iconSet('project:github', 'resources/feather/github.svg', 24)
                    .iconSet('project:desc', 'resources/feather/more-horizontal.svg', 24)
                    .iconSet('project:video', 'resources/feather/film.svg', 24)
                    .iconSet('project:lock', 'resources/feather/lock.svg', 24)
                    .iconSet('project:at-sign', 'resources/feather/at-sign.svg', 24)
        });
