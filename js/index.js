$(".load-container").fadeOut();
$(".bar-btn").click(function () {
    $(".main").toggleClass('active');
    $(".sidebar").toggleClass('active');
});
$(".close-btn").click(function () {
    $(".sidebar").toggleClass('active');
});
$(".menu-item").click(function () {

    $(this).children('a').children('i').toggleClass('active');
    $(this).children('ul').slideToggle();
});

$(".user-profile img").click(function () {
    $(".card").toggleClass('active');
});
$(window).resize(function () {
    if ($(this).width() >= 991) {
        $(".main").removeClass('active');
        $(".sidebar").removeClass('active');
    }
});