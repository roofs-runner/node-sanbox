$(document).ready(function () {
    $(function() {
        // var gallery = $('.gallery').find('img');
        //
        // gallery.css("width", "33%").css('opacity', '0.7');
        //
        // gallery.mouseenter(function () {
        //     $(this).stop().fadeTo(500, 1);
        // });
        //
        // gallery.mouseleave(function () {
        //     $(this).stop().fadeTo(500, 0.7);
        // });
        //
        // gallery.click(function () {
        //     var source = $(this).attr('src');
        //     var image = $('img').attr('src', source).css('width', '100%');
        //     $(".lightbox").empty().append(image).fadeIn(2000);
        // });



        // var images = [
        //     "images/laptop-mobile_small.jpg",
        //     "images/laptop-on-table_small.jpg",
        //     "images/people-office-group-team_small.jpg"
        // ];

        // var i = 0;
        // setInterval(function () {
        //     i = (i + 1) % images.length;
        //     gallery.fadeOut(function () {
        //         $(this).attr('src', images[i]);
        //         $(this).fadeIn();
        //     });
        //     console.log(gallery.attr('src'));
        // }, 2000);
        //
        // $('li li').addClass(function (index) {
        //     $(this).addClass('item-' + index);
        // });

        // $('#form').submit(function (event) {
        //     var textarea = $('.message');
        //
        //     if (textarea.val().trim() == '') {
        //         textarea.css('box-shadow', '0 0 4px #881');
        //         event.preventDefault();
        //     } else {
        //
        //     }
        // });

        // var flickrAddress = 'https://api.flickr.com/services/feeds/photos_public.gne';
        //
        // $.getJSON(flickrAddress, {
        //     tags: 'sun, beach',
        //     tagMode: 'any',
        //     format: 'json'
        // }).done(function (data) {
        //     console.log(data);
        // }).fail(function () {
        //     console.log('Oopsie!');
        // });

        function change(b) {
            console.log(b);
            b = 2;
            console.log(b);
        }

        change(4);
    });
});
