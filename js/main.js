
// $(document).ready(function(){
//   $('.carousel').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//       });
// });

// var box = $(document),
//     bgAnimate = $('div.text-content');

// box.on('scroll', function() {
//     var boxAnimate = box.scrollTop();
//     bgAnimate.css("background-position", "0" + -boxAnimate/4 + 'px');
// });

let isTrue;

$(document).ready(function() {
    $('#wizard').toggle();
    $('#input_active_logo').toggle();
    // isTrue = false;
    // if(isTrue){
    //     $('#btn').css('marginLeft', '15px');
    // }
});

$('#btn').click(function(){
    $('#wizard').toggle();
    $('#input_off_logo').toggle();
    $('#input_active_logo').toggle();
    // isTrue = true;
    // $('#btn').css('marginLeft', '15px');

    // let search_icon = document.getElementById('btn');
    // search_icon.style.marginLeft = "15px"; 

    $('#btn').toggle();
});
