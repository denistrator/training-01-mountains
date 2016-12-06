'use strict';

/*
    This file can be used as entry point for webpack!
 */

wow = new WOW({
    offset: 50,
    mobile: false
})
wow.init();

$(function() {
    $('.preloader_bg').delay(10).fadeOut(300);
    $('.preloader_content').delay(10).fadeOut(300);
});
