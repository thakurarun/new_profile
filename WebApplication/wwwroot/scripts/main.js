﻿var app = (function (materialize) {
    return {
        init: function () {
            $(".button-collapse").sideNav();

            $('#menu > .hover-effect > .menu-item').on('mouseover', function () {
                $(this).addClass('z-depth-5');
            }).on('mouseleave', function () {
                $(this).removeClass('z-depth-5');
            });

            $('#menu li.menu-item').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                $('#menu li.menu-item').removeClass('active');
                $(this).addClass('active');
                $("html, body").animate({ scrollTop: $($(this).find('a').attr('href')).offset().top - 70 }, "slow");
            });

            this.adjustPage();
            this.scrollFire();
        },

        scrollToTop: function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        },

        adjustPage: function () {
            var menuHeight = $('#menu').height();
            var availableHeight = screen.height - menuHeight - 50;
            $('div.full-page').height(availableHeight);
        },

        getPageHeight: function () {
            return $('div.full-page').height();
        },

        scrollFire: function () {
            var self = this;
            var halfHeight = self.getPageHeight() / 2;
            materialize.toast("Check my profile!", self.getPageHeight() * 1);
            var options = [
                 {
                     selector: '#work', offset: halfHeight, callback: function () {
                         // materialize.toast("See my work!", self.getPageHeight() * 2);
                         self.showWorkData();
                     }
                 }, {
                     selector: '#resume', offset: halfHeight, callback: function () {
                         // materialize.toast("Download my resume!", self.getPageHeight() * 3);
                         self.showResumeData();
                     }
                 }, {
                     selector: '#contact', offset: halfHeight, callback: function () {
                         materialize.toast("Get in contact!", self.getPageHeight() * 4);
                     }
                 }
            ];
            materialize.scrollFire(options);
        },

        showWorkData: function () {
            materialize.showStaggeredList($('#staggered-work-list'));
        },

        showResumeData: function () {
            materialize.fadeInImage($('#resume-data img'));
        },

    }
})(Materialize);


$(document).ready(function () {
    app.scrollToTop();
    app.init();

});
$(window).resize(function () {
    app.adjustPage();

});