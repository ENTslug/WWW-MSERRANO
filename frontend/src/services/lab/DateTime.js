angular.module("www.services")
        .service("DateTime", function (Const) {
            var self;

            // -- Service -- //
            return (self = {
                date: {
                    today: date_today, // local
                },
                time: {
                    today: time_today, // local
                },
                current_year: current_year(),
            });

            // -- Functions -- //
            function date_today() {
                return to_iso_date(new Date());
            }

            function time_today() {
                return to_iso_datetime(new Date());
            }
            function current_year() {
                return new Date().getFullYear();
            }

            function to_iso_date(date) {
                var year, month, day;
                // Y-m-d
                year = __leftpad(date.getFullYear(), '0000');
                month = __leftpad(date.getMonth() + 1, '00');
                day = __leftpad(date.getDate(), '00');

                return (year + '-' + month + '-' + day);
            }

            function to_iso_datetime(date) {
                var isodate, hour, min, sec;
                // Y-m-d H:i:s
                hour = __leftpad(date.getHours(), '00');
                min = __leftpad(date.getMinutes(), '00');
                sec = __leftpad(date.getSeconds(), '00');

                isodate = to_iso_date(date);

                return (isodate + ' ' + hour + ':' + min + ':' + sec);
            }

            function __leftpad(val, pad) {
                var _return = (pad + val);
                return _return.substring(_return.length - pad.length);
            }

        });
