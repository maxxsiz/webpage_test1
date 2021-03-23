'use strict';

var is_aboutme_show = 0;
function moreaboutme(){
    console.log('moreaboutme_script_start');
    if (is_aboutme_show==0){
        is_aboutme_show==1;
        document.getElementById("custom-2").style.transition = "all 1s ease";
        document.getElementById("custom-2").style.transform = "skewY(-20deg)";
        setTimeout(function(){
            document.getElementById("heading-1").style.marginLeft = "5vw";
            document.getElementById("heading-1").style.opacity = "1";
        },0);
        setTimeout(function(){
            document.getElementById("heading-2").style.opacity = "1";
            document.getElementById("heading-2").style.marginLeft = "5vw";
        },100);
        setTimeout(function(){
            document.getElementById("heading-3").style.opacity = "1";
            document.getElementById("heading-3").style.marginLeft = "5vw";
        },200);
        setTimeout(function(){
            document.getElementById("heading-4").style.opacity = "1";
            document.getElementById("heading-4").style.marginLeft = "5vw";
        },300);
        setTimeout(function(){
            document.getElementById("heading-5").style.opacity = "1";
            document.getElementById("heading-5").style.marginLeft = "5vw";
        },400);
    }
    else {
        return console.log('already about_me showed');
    }
}

var current_topic_id = "base-info-aboutme";
var current_heading_id = "";
function moreaboutme_full(topic_id, heading_id){
    console.log('moreaboutme_full_script_start');
    if (current_topic_id != topic_id){
        if (topic_id=="base-info-aboutme"){
            document.getElementById("custom-2").style.transform = "skewY(20deg)";
        }
        if (current_heading_id != ""){
            document.getElementById(current_heading_id).style.color = "white";
            document.getElementById(current_heading_id).style.transform = "";
        }
        document.getElementById(current_topic_id).style.opacity = "0";
        document.getElementById(current_topic_id).style.display = "none";
        if (heading_id != ""){
        document.getElementById(heading_id).style.transform = "translateX(50px)";
        document.getElementById(heading_id).style.color = "rgb(63, 168, 168)";
        }
        current_topic_id = topic_id;
        current_heading_id = heading_id;
        document.getElementById(topic_id).style.display = "block";
        document.getElementById(topic_id).style.opacity = "1";
    }
    else {
        return console.log(topic_id + ' already showed');
    }

}

var is_email_contact_open = "0";
function contact_email(){
    if (is_email_contact_open == "0"){
        document.getElementById("email-contact-big-block").style.display = 'block';
        document.getElementById("email-contact-big-block").style.opacity = '1';
        is_email_contact_open = "1";
        return console.log('open contact block');
    }
    if (is_email_contact_open == "1"){
        document.getElementById("email-contact-big-block").style.display = 'none';
        document.getElementById("email-contact-big-block").style.opacity = '0';
        is_email_contact_open = "0";
        return console.log('close contact block');
    }
}

var element = document.querySelector('#first_slider-aboutme');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    document.getElementById("email-contact-big-block").style.display = 'none';
    document.getElementById("email-contact-big-block").style.display = 'none';
    console.clear();
    console.log('Вы видите элемент :)');
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

window.addEventListener('touchmove', function() {
  Visible (element);
});

Visible (element);
    
