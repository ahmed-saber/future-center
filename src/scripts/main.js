$('.owl-carousel').owlCarousel({
    autoplay: true,
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    rtl: true
});

// MOBILE MENU TOGGLE CTA
$('.toggle-menu').click(function (e) {
    $(this).toggleClass('change');
    $('#header .mainnav').toggleClass('open')
    e.preventDefault();
});

// http://aamirafridi.com/jquery/jquery-marquee-plugin
$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 10000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 1000,
    //'left' or 'right'
    direction: 'right',
    pauseOnHover: true
});

// MENU LINKS HOVER
$('.main-list li').hover(function () {
    var $this = $(this);
    var $submenu = $('.submenu:first', $this);
    $this.addClass('parent-hover');
    if ($submenu.length) {
        $submenu.addClass('hover');
    }
}, function () {
    var $this = $(this);
    var $submenu = $('.submenu:first', $this);
    $this.removeClass('parent-hover');
    if ($submenu.length) {
        $submenu.removeClass('hover');
    }
});

$('.search-btn-action').hover(function () {
    $(this).addClass('hover');
    $('.search-input', this).focus();
}, function () {
    $(this).removeClass('hover');
});

$('.search-btn').click(function (e) {
    if (!$('.search-holder .search-input').val().replace(/\s*/g, '')) {
        e.preventDefault();
    }
});