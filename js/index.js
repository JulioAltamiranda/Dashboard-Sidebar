$(window).on("load", () => {
    $(".load-container").fadeOut();
    $(".bar-btn").click(() => {
        $(".main").toggleClass('active');
        $(".sidebar").toggleClass('active');
    })
    $(".close-btn").click(() => {
        $(".sidebar").toggleClass('active');
    })
    $(".menu-item").click(event => {
        $(this).children('a').toggleClass('active');
        $(this).children('ul').slideToggle();
        $(this).children('a').children('i').toggleClass('active');
    });
    $(".user-profile img").click(() => {
        $(".card").toggleClass('active');
    });
    $(window).resize(() => {
        if ($(this).width() >= 991) {
            $(".main").removeClass('active');
            $(".sidebar").removeClass('active');
        }
        console.log($(this).width());
    });
});