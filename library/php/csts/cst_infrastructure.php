<?php

interface cst_infrastructure {

    const app_name   = 'www'; // APP_NAME
    const seo_title  = 'Mark Anthony Serrano: local Santa Cruz Software Engineer, Web Developer and Bay Area Filipino American.';
    const seo_desc   = 'Mark Anthony Serrano is a Software Engineer based in Santa Cruz County specializing in Web Development using AngularJS.';
    //
    const valid_page = '/[a-z_0-9\/]*\/([a-z_0-9]+)$/i'; // allow underscore and numbers
    const page       = 'page'; // must match apache2 rewrite rule
    //
    const fail       = 'fail';
    const pass       = 'pass';
    const result     = 'result';

}
