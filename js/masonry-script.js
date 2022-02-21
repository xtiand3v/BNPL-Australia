$(".masonry-item").click(function() {
    var contentTarget = $(this).data('content-target');

    // Change active state
    $('.masonry-item.active').removeClass('active');
    $(this).addClass('active');

    // Change content
    $('.masonry-item-content > *').removeClass('d-block').addClass('d-none');
    $('.masonry-item-content > ' + contentTarget).removeClass('d-none').addClass('d-block');
});