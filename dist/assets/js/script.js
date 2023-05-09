$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        draggable: false,
    });
})

$('.lArrow').on('click', function(){
    $('.slider').slick('slickPrev');
});
$('.rArrow').on('click', function(){
    $('.slider').slick('slickNext');
})