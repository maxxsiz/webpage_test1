'use strict';

var infblocks = document.getElementsByClassName("info-block");

for (var i = 0; i < infblocks.length; i++) {
    infblocks[i].addEventListener("click", function() {
      try {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
      } catch {
        console.log("first_active");
      }
      this.className += " active";
    });
  }

var menu_state = 0;
function show_menu() {
  if (menu_state == 0 ){
    document.getElementById("header-info").style.maxHeight = "100vh";
    menu_state = 1;
  } else {
    document.getElementById("header-info").style.maxHeight = 0;
    menu_state = 0;
  }
  document.getElementById("header-icon").classList.toggle('rotate-icon');
}

$("#main_btn").click(function() { 
  var elPos = $("#main_page").offset().top
  $('html, body').animate({
      scrollTop: elPos 
  }, 1000); // Скорость прокрутки
  document.getElementById("header-info").style.maxHeight = 0;
  document.getElementById("header-icon").classList.toggle('rotate-icon');
  menu_state = 0;
});

$("#aboutme_btn").click(function() {
  var elPos = $("#aboutme_page").offset().top -  ($(window).height())*0.18
  $('html, body').animate({
      scrollTop: elPos 
  }, 1000); // Скорость прокрутки
  document.getElementById("header-info").style.maxHeight = 0;
  document.getElementById("header-icon").classList.toggle('rotate-icon');
  menu_state = 0;
});

$("#skills_btn").click(function() { 
  var elPos = $("#skill_page").offset().top -  ($(window).height())*0.18
  $('html, body').animate({
      scrollTop: elPos 
  }, 1000); // Скорость прокрутки
  document.getElementById("header-info").style.maxHeight = 0;
  document.getElementById("header-icon").classList.toggle('rotate-icon');
  menu_state = 0;
});

$("#projects_btn").click(function() { 
  var elPos = $("#projects_page").offset().top -  ($(window).height())*0.18
  $('html, body').animate({
      scrollTop: elPos 
  }, 1000); // Скорость прокрутки
  document.getElementById("header-info").style.maxHeight = 0;
  document.getElementById("header-icon").classList.toggle('rotate-icon');
  menu_state = 0;
});

$("#hobbies_btn").click(function() { 
  var elPos = $("#hobbies_page").offset().top -  ($(window).height())*0.18
  $('html, body').animate({
      scrollTop: elPos 
  }, 1000); // Скорость прокрутки
  document.getElementById("header-info").style.maxHeight = 0;
  document.getElementById("header-icon").classList.toggle('rotate-icon');
  menu_state = 0;
});

$("#contact_btn").click(function() { 
  var elPos = $("#contact_page").offset().top -  ($(window).height())*0.18
  $('html, body').animate({
      scrollTop: elPos 
  }, 1000); // Скорость прокрутки
  document.getElementById("header-info").style.maxHeight = 0;
  document.getElementById("header-icon").classList.toggle('rotate-icon');
  menu_state = 0;
});


window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset);
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let height = (y / scrollHeight) * 100;
  let pos = height + "%";
  document.getElementById("background-photo").style.backgroundPosition = pos;
})