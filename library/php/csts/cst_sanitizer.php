<?php

interface cst_sanitizer {

    const sane_boolean  = 's_bool';
    const sane_date     = 's_date';
    const sane_datetime = 's_datetime';
    const sane_email    = 's_email';
    const sane_float    = 's_float';
    const sane_integer  = 's_integer';
    const sane_string   = 's_string';
    //
    const type_json     = 't_json';
    const type_php      = 't_php';
    const type_query    = 't_query';
    //
    const is_dangerous  = 'is_dangerous';

}
