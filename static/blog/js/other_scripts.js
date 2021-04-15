'use strict';
var is_email_contact_open = "0";
function contact_email(){
    if (is_email_contact_open == "0"){
        document.getElementById("email-contact-big-block").style.display = 'block';
        document.getElementById("email-contact-big-block").style.opacity = '1';
        is_email_contact_open = "1";
        return console.log('open contact block');
    }
    if (is_email_contact_open == "1"){
        document.getElementById("email-show-result").style.display = 'none';
        document.getElementById("email-contact-big-block").style.display = 'none';
        document.getElementById("email-contact-big-block").style.opacity = '0';
        is_email_contact_open = "0";
        return console.log('close contact block');
    }
}

var element = document.querySelector('#first_slider-aboutme');
var Visible = function (target) {
 
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },

    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && 
    targetPosition.top < windowPosition.bottom && 
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 
    document.getElementById("email-contact-big-block").style.display = 'none';
    document.getElementById("email-contact-big-block").style.display = 'none';
    console.clear();
    console.log('Вы видите элемент :)');
  } else {
    console.clear();
  };
};

window.addEventListener('touchmove', function() {
  Visible (element);
});

Visible (element);
    
function show_big_img(){
  
  
}