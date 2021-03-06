!(function (o) {
    "use strict";
    if (o(".typed").length) {
        var t = o(".typed").data("typed-items");
        console.log(o(".typed".length)), (t = t.split(",")), new Typed(".typed", { strings: t, loop: !0, typeSpeed: 100, backSpeed: 50, backDelay: 2e3 });
    }
    o(document).on("click", ".nav-menu a, .scrollto", function (t) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            t.preventDefault();
            var e = o(this.hash);
            if (e.length) {
                var i = e.offset().top;
                return (
                    o("html, body").animate({ scrollTop: i }, 1500, "easeInOutExpo"),
                    o(this).parents(".nav-menu, .mobile-nav").length && (o(".nav-menu .active, .mobile-nav .active").removeClass("active"), o(this).closest("li").addClass("active")),
                    o("body").hasClass("mobile-nav-active") && (o("body").removeClass("mobile-nav-active"), o(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close")),
                    !1
                );
            }
        }
    }),
        o(document).ready(function () {
            if (window.location.hash) {
                var t = window.location.hash;
                if (o(t).length) {
                    var e = o(t).offset().top;
                    o("html, body").animate({ scrollTop: e }, 1500, "easeInOutExpo");
                }
            }
        }),
        o(document).on("click", ".mobile-nav-toggle", function (t) {
            o("body").toggleClass("mobile-nav-active"), o(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
        }),
        o(document).click(function (t) {
            var e = o(".mobile-nav-toggle");
            e.is(t.target) || 0 !== e.has(t.target).length || (o("body").hasClass("mobile-nav-active") && (o("body").removeClass("mobile-nav-active"), o(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close")));
        });
    var e = o("section"),
        i = o(".nav-menu, .mobile-nav");
    function a() {
        AOS.init({ duration: 1e3, easing: "ease-in-out-back", once: !0 });
    }
    o(window).on("scroll", function () {
        var t = o(this).scrollTop() + 200;
        e.each(function () {
            var e = o(this).offset().top,
                a = e + o(this).outerHeight();
            t >= e &&
                t <= a &&
                (t <= a && i.find("li").removeClass("active"),
                i
                    .find('a[href="#' + o(this).attr("id") + '"]')
                    .parent("li")
                    .addClass("active")),
                t < 300 && o(".nav-menu ul:first li:first").addClass("active");
        });
    }),
        o(window).scroll(function () {
            o(this).scrollTop() > 100 ? o(".back-to-top").fadeIn("slow") : o(".back-to-top").fadeOut("slow");
        }),
        o(".back-to-top").click(function () {
            return o("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"), !1;
        }),
        o(window).on("load", function () {
            var t = o(".portfolio-container").isotope({ itemSelector: ".portfolio-item", layoutMode: "fitRows" });
            console.log(t),
                o("#portfolio-flters li").on("click", function () {
                    o("#portfolio-flters li").removeClass("filter-active"), o(this).addClass("filter-active"), t.isotope({ filter: o(this).data("filter") }), a();
                }),
                o(document).ready(function () {
                    o(".venobox").venobox();
                });
        }),
        o(window).on("load", function () {
            a();
        });
})(jQuery);
