$(document).ready(function () {
    
//----------FOR SCROLL UP------------//
//header fixed on page load
    //position: fixed;
//header remains fixed until a certain point
    //position: fixed;
//header position class changes with addClass
    
    //function changeHeaderClass(){
        //if ($('header').toggle($(window).scrollTop() < 325)){
                            //alert('325 Event Listener!');
            //$(window).scroll(function (event) {
            //$('header').removeClass('amazing1');
            //$('header').addClass('amazing2');
            //changeHeaderClass();});
        //}else{
            //$('header').addClass('amazing1');
        //}
    //}
//});
    $(window).scroll(function(event){
        header();
    });
    function header(){
        if ($(window).scrollTop() < 325){
            $("header").removeClass("hide2");
            $("header").addClass("show1");
            $("header").slideDown();
            $("#subHeaderText").removeClass("hide2faster");
            $("#subHeaderText").addClass("show2faster");
        }else{
            $("header").removeClass("show1");
            $("header").addClass("hide2");
            $("header").slideUp();
            $("#subHeaderText").removeClass("show2faster");
            $("#subHeaderText").addClass("hide2faster");
        };
    };
});
