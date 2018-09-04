//= ../../node_modules/jquery/dist/jquery.min.js
//= bootstrap.js



const windowWidth = document.documentElement.clientWidth;

// fixed nav

 $(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop() > 380){
			$('.navbar').addClass('fixed');
      $('.logo').addClass('fixLogo');
		} else if ($(this).scrollTop() < 380){
			$('.navbar').removeClass('fixed');
      $('.logo').removeClass('fixLogo');
		}
	})
})


// scroll to ancor

$(document).ready(function() {
  $("a.scrollto").click(function () {
  	$('.navbar-collapse').collapse('hide')
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  })
})

// border of img in price by hovering button

$('.img-group .btn-primary').hover(
    function(){ 
    	$(this).siblings().not('p').addClass('activeImg')
    },
    function(){ 
    	$(this).siblings().not('p').removeClass('activeImg')
    }
)

// border of img in doctor by hovering button

$('.doctor .btn-primary').hover(
    function(){ 
      $(this).siblings().not('p, h4, small, ul').addClass('activeImg')
    },
    function(){ 
      $(this).siblings().not('p, h4, small, ul').removeClass('activeImg')
    }
)

// toggle icon
$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });
});

// toTop button
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});

function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(32.109042, 34.838663);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 15               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      // Добавляем маркер
    var marker = new google.maps.Marker({
        position: centerLatLng,              // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
        map: map,                            // Карта на которую нужно добавить маркер
        //title: "Клиника Ассута" // (Необязательно) Текст выводимый в момент наведения на маркер
    });
}
 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
