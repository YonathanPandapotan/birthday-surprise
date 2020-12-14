var images = [
    "/img/3.Opeend Ribbon Gift Box (Final).png",
    "/img/4.Lifted Top Gift Box (Final).png",
    "/img/5.Opened Gift Box (Final).png"
    ]

$(".box").click(function() {
    $(this).find(".slide").stop().animate({ width: 200 });
}); 

$(".present-image").click(function(){
    // $(this).attr("src", "Opened Ribbon Box (Revised)@2x.png")
    
    console.log($('.background').height());
    console.log($('.banner-text').height());
    $(this)
    .fadeOut(1000, function() {
        $(".present-image").attr('src',images[0]);
        document.title='3';
    })
    .fadeIn(1000)
    .fadeOut(1000, function() {
        $(".present-image").attr('src',images[1]);
        document.title='2';
    })
    .fadeIn(1000)
    .fadeOut(1000, function() {
        $(".present-image").attr('src',images[2]);
        document.title='1';
    })
    .fadeIn(1000, function(){
        document.title='Selamat Ulang Tahun Devina!';
        $(".banner-text").css("display", "block");
        $tinggi = $('.background').height() - $('.banner-text').height();
        $(".background").animate({
            'opacity':'1'
        },{duration:3000,queue:false});
        $(".banner-text").animate({
            'bottom': $tinggi,
            'opacity': '1'
        }, {duration:3000, queue: false});

        $(".banner-text").children().each(function(){
            $fontsize = $(this).css('font-size');
            console.log($('.happy-birthday').css('font-size'));

            $(this).css('font-size', '0em');
            $(this).animate({
                fontSize: $fontsize
            }, {duration:3000, queue:false});

        });

        $('.pesan-pesan').css('display', 'block');
    });
});   