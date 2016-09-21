$(document).ready(function () {
    //-----------mobile menu function------------//
    $('.hamburger').on('click', function () {
        $('nav').toggleClass('show');
    });

    //------------lazyload photo fade-in--------------//
    $(function () {
        var $lazyImages = $('img.lazy');

        $lazyImages.lazyload({
            threshold: 200,
            effect: 'fadeIn'
        });
    });

    //-------------header collapse function----------------//
    var mq = window.matchMedia("(min-width: 786px)");

    $(window).scroll(function (event) {
        header();
    });

    function header() {
        if (mq.matches) {
            if ($(window).scrollTop() < 240) {
                $("header").removeClass("hide2");
                $("header").addClass("show1");
                $("header").slideDown();
                $("#subHeaderText").removeClass("hide2faster");
                $("#subHeaderText").addClass("show2faster");
            } else {
                $("header").removeClass("show1");
                $("header").addClass("hide2");
                $("header").slideUp();
                $("#subHeaderText").removeClass("show2faster");
                $("#subHeaderText").addClass("hide2faster");
            }
        } else {
            if ($(window).scrollTop() < 182) {
                $("header").removeClass("hide2");
                $("header").addClass("show1");
                $("header").slideDown();
                $("#subHeaderText").removeClass("hide2faster");
                $("#subHeaderText").addClass("show2faster");
            } else {
                $("header").removeClass("show1");
                $("header").addClass("hide2");
                $("header").slideUp();
                $("#subHeaderText").removeClass("show2faster");
                $("#subHeaderText").addClass("hide2faster");
            }
        };
    };
  
    //----------- gradient animantion-----------//
    var colors = new Array(
    [190, 253, 238], [242, 157, 245], [107, 181, 255], [76, 237, 249]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.001;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";


        $('body').css({
            background: "-webkit-gradient(linear, center bottom, center top, from(" + color1 + "), to(" + color1 + "))"
        }).css({
            background: "-moz-linear-gradient(90deg, " + color1 + " 100%, " + color1 + " 0%)"
        });
        $('header').css({
            background: "-webkit-gradient(linear, center bottom, center top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(90deg, " + color1 + " 0%, " + color2 + " 100%)"
        });


        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        }
    }
    setInterval(updateGradient, 10);   
});