
$( document ).ready(function(){
    $( ".header__burger, .header__list" ).click(function(event){ // задаем функцию при нажатиии на элемент <div>
      $( ".header__burger, .header__menu" ).toggleClass("active"); // отображаем, или скрываем элемент
      $('body').toggleClass('lock');
    });
  });