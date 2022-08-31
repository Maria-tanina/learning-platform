$('.menu__btn').on('touchstart', function()  {
  $('.menu').toggleClass('menu--active');
  $('.header__wrapper').toggleClass('header__wrapper--active');
  $('.header__inner').toggleClass('header__inner--active'); 
  let src = ($('.menu__img').attr("src") === "images/home/menu.svg") ? "images/home/close.svg" : "images/home/menu.svg";
$('.menu__img').attr("src", src);
   
});

$('.menu__list-link').on('touchstart', function(e)  {
      e.preventDefault();
      $(this).closest('.menu__list-item').addClass('menu__list-item--touchstart');
      
});
$('.menu__list-link').on('touchend', function(e)  {
  e.preventDefault();
  setTimeout(function() {
      $('.menu__list-item').removeClass('menu__list-item--touchstart');
      $('.menu').toggleClass('menu--active');
  $('.header__wrapper').toggleClass('header__wrapper--active');
  $('.header__inner').toggleClass('header__inner--active'); 
  let src = ($('.menu__img').attr("src") === "images/home/menu.svg") ? "images/home/close.svg" : "images/home/menu.svg";
$('.menu__img').attr("src", src);
  }, 100);
});

var containerEl = document.querySelector (".mix-container1");//('.container');

var mixer = mixitup(    containerEl, { 
                            controls: { 
                                toggleLogic: 'and'
                            }
                        }
                    );

var SelectMix1 = document.querySelector("#mix1");
var SelectMix2 = document.querySelector("#mix2");
var SelectMix3 = document.querySelector("#mix3");
var SelectMix4 = document.querySelector("#mix4");
var SelectMix5 = document.querySelector("#mix5");
var SelectMix6 = document.querySelector("#mix6");
var SelectMix7 = document.querySelector("#mix7");
var SelectMix8 = document.querySelector("#mix8");


SelectMix1.onclick = function () {
  // console.dir("blog1.html");
  location.href = "blog1.html";
  location.reload;
}

SelectMix2.onclick = function () {
  location.href = "blog1.html";
  location.reload;
}

SelectMix3.onclick = function () {
  location.href = "blog1.html";
  location.reload;
}

SelectMix4.onclick = function () {
  location.href = "blog1.html";
  location.reload;
}

SelectMix5.onclick = function () {
  location.href = "blog1.html";
  location.reload;
}

SelectMix6.onclick = function () {
  location.href = "blog1.html";
  location.reload;
}

SelectMix7.onclick = function () {
  location.href = "blog1.html";
  location.reload;
}

SelectMix8.onclick = function () {
  location.href = "blog1.html";
  location.reload;
};