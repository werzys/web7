/*global $*/
$(document).ready(function () {
    const $slider = $(".slider");
    const $currentPage = $("#current-page");
    const $totalPages = $("#total-pages");

    function updatePager(event, slick) {
        const total = Math.max(1, slick.slideCount - slick.options.slidesToShow + 1);
        const current = Math.min(slick.currentSlide + 1, total);
        $currentPage.text(current);
        $totalPages.text(total);
    }

    $slider.on("init reInit afterChange breakpoint", updatePager);

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
});
