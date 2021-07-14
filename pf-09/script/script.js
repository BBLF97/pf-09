

$(function(){
        $(".sliderList").children("div:gt(0)").hide();
        var x = 0;
        setInterval(function(){
            var next = (x + 1)%3;
            $(".sliderList").find("div").eq(x).fadeOut();
            $(".sliderList").find("div").eq(next).fadeIn();
            x = next;
            console.log(x);
        },3000);




        $(window).scroll(function(){
            var scrollTopNum = $(document).scrollTop()+30;
            if(scrollTopNum<=100){
                scrollTopNum=100;
            }
            $("#quick").stop().animate({top: scrollTopNum}, 600);
        });


        
});