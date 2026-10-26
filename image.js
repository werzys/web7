$(document).ready(function() {
    var $slider = $('.slider');
    var $currentPage = $('#current-page');
    var $totalPages = $('#total-pages');

    $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    function updatePager(slick) {
        var currentSlide = slick.currentSlide;
        var slidesToShow = slick.options.slidesToShow;
        var totalSlides = slick.slideCount;
        
        var maxPages = totalSlides - slidesToShow + 1;
        var pageNum = currentSlide + 1;
        
        if (pageNum > maxPages) {
            pageNum = maxPages;
        }

        $currentPage.text(pageNum);
        $totalPages.text(maxPages);
    }

    $slider.on('init', function(event, slick) {
        updatePager(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updatePager(slick);
    });

    setTimeout(function() {
        var slick = $slider.slick('getSlick');
        updatePager(slick);
    }, 100);
});