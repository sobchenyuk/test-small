//активация слайдера
(function() {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true
    });
})();

//валидация формы
jQuery( document ).ready(function( $ ) {
    $('#order_call_form').on('submit', function (event) {
        if (validateForm()) {
            event.preventDefault();
        }
    });


    function validateForm() {
        $('.text-error').remove();

        //проверка имени
        var firstName = $('#firstName');
        if (firstName.val().length < 1) {
            var name = true;
            firstName.after('<span class="text-error form-name">Enter Your Name</span>');
            $('.form-name').css({'top': 'firstName.position().top + firstName.outerHeight() + 2','display':'block' });
        }
        firstName.toggleClass('error', name);

        firstName.click(function() {
            $("span.form-name").fadeOut();
        });


        //проверка i-mail
        var regexr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;
        var emailName = $('#emailName');
        var email = emailName.val()?false:true;
        if(email){
            emailName.after('<span class="text-error form-email">Enter Your Email</span>');
            $('.form-email').css({'top': 'firstName.position().top + firstName.outerHeight() + 2','display':'block' });
        } else if(!regexr.test(emailName.val())){
            email = true;
            emailName.after('<span class="text-error form-email">Invalid Email</span>');
            $('.form-email').css({'top': 'firstName.position().top + firstName.outerHeight() + 2','display':'block' });

        }emailName.toggleClass('error', email);
        emailName.click(function() {

            $("span.form-email").fadeOut();
        });

        return (name || email);
    }
});

//плавный скролл
jQuery( document ).ready(function( $ ) {
    $("a.top__menu__link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });
});
//плавный скролл
jQuery( document ).ready(function( $ ) {
    $("a.top__menu__link__two").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });
});

//accordion
jQuery( document ).ready(function( $ ) {
$('.accordion-js').click(function() {
    var itemContainerText = $(this).find('.item__container_text');
    if($(this).hasClass('active')){
        itemContainerText.css('display','none'),
        $(this)
        .removeClass('active')
        .animate({height: "73px"}, 500);
    }else {
        $(this)
        .addClass('active')
        .animate({height: "522px"}, 500),
        itemContainerText.css('display','block');
    }
  });
});
//mobile-menu
jQuery( document ).ready(function( $ ) {
        $menuLeft = $('.pushmenu-left');
        $nav_list = $('#nav_list');
        
        $nav_list.click(function() {
            $(this).toggleClass('active');
            $('.pushmenu-push').toggleClass('pushmenu-push-toright');
            $menuLeft.toggleClass('pushmenu-open');
        });
    });
