angular.module("www.blocks")
        .config(function ($mdThemingProvider) {

            var primary = define_primary_palette('scw_blue');
            var secondary = define_secondary_palette('scw_yellow');
            var warning = define_warning_palette('warning');

            $mdThemingProvider.theme('default')
                    .primaryPalette(primary)
                    .accentPalette(secondary)
                    .warnPalette(warning);

            // -- Functions -- //
            function define_primary_palette(label) {
                return __define_custom_palette(label, {
                    '50': 'E0EDF6',
                    '100': 'B3D3E9',
                    '200': '80B5DB',
                    '300': '2681C1', // hue 1
                    '400': '2681C1',
                    '500': '006BB6', // hue default
                    '600': '0063AF',
                    '700': '0058A6',
                    '800': '0058A6', // hue 2
                    '900': '003C8E',
                    'A100': '003C8E', // hue 3
                    'A200': '87B0FF',
                    'A400': '548EFF',
                    'A700': '3B7EFF',
                    'contrastDefaultColor': 'light'
                });
            }
            function define_secondary_palette(label) {
                return __define_custom_palette(label, {
                    '50': 'FFF8E4',
                    '100': 'FFEDBC',
                    '200': 'FFE290',
                    '300': 'FFD663',
                    '400': 'FFCD41',
                    '500': 'FFC420',
                    '600': 'FFBE1C',
                    '700': 'FFB618',
                    '800': 'FFAF13',
                    '900': 'FFA20B',
                    'A100': 'FFCD41', // hue 1 (base - 100)
                    'A200': 'FFC420', // hue default
                    'A400': 'FFB618', // hue 2 (base + 200)
                    'A700': 'FFA20B', // hue 3 (base + 400)
                    'contrastDefaultColor': 'light'
                });
            }
            function define_warning_palette(label) {
                return __define_custom_palette(label, {
                    '50': 'FFEBEE',
                    '100': 'FFCDD2',
                    '200': 'EF9A9A',
                    '300': 'EF5350', // hue 1
                    '400': 'EF5350',
                    '500': 'F44336', // hue default
                    '600': 'E53935',
                    '700': 'D32F2F',
                    '800': 'D32F2F', // hue 2
                    '900': 'B71C1C',
                    'A100': 'B71C1C', // hue 3
                    'A200': 'FF5252',
                    'A400': 'FF1744',
                    'A700': 'D50000',
                    'contrastDefaultColor': 'light'
                });
            }

            // -- Helpers -- //
            function __define_custom_palette(label, replacements) {
                $mdThemingProvider.definePalette(label, replacements);

                return label;
            }
            function __extend_palette(label, original_set, replacements) {
                var custom_palette = $mdThemingProvider.extendPalette(original_set, replacements);
                return __define_custom_palette(label, custom_palette);
            }
        });
