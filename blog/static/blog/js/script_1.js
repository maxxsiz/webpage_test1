'use strict';
    let current_page = 'main_page';
    let last_page = '';
    let is_f_start = 0 ;
    function changepage(go_to_page){
        ++is_f_start;
        if (is_f_start > 1){
            --is_f_start;
            return console.log('функция запущена');
        }
        if (go_to_page==current_page){
            --is_f_start;
            return console.log('Current page');
        } else {
        document.getElementById(go_to_page).style.left = '0vw'; 
        document.getElementById(current_page).style.left = '100vw';

        setTimeout(function() {
        document.getElementById(current_page).style.transition = "left 0s";
        document.getElementById(current_page).style.left = '-100vw';
        last_page = current_page;
        current_page = go_to_page;
        }, 4200);

        setTimeout(function() {
        document.getElementById(last_page).style.transition = "left 4s";
        is_f_start = 0;
        }, 4300);
        }
    }
    var is_typed_already = 0;
    function show_more_text(){
        console.log('show_more_text_script_start');
        if (is_typed_already == 0){
        setTimeout(function(){
        is_typed_already = 1;
        var wrapper = document.querySelector(".customline-click");
        var text = document.querySelector(".customline-click .typing-1");
        var textCont = text.textContent;
        for (var i = 0; i < textCont.length; i++) {
            (function(i) {
                setTimeout(function() {
                    var texts = document.createTextNode(textCont[i]);
                    var span = document.createElement('span');
                    span.appendChild(texts);
                    wrapper.appendChild(span);
                }, 75 * i);
            }(i));
        }
        },0);
        setTimeout(function(){
            var wrapper = document.querySelector(".customline-click");
            var text = document.querySelector(".customline-click .typing-2");
            var textCont = text.textContent;
            for (var i = 0; i < textCont.length; i++) {
                (function(i) {
                    setTimeout(function() {
                        var texts = document.createTextNode(textCont[i]);
                        var span = document.createElement('span');
                        span.appendChild(texts);
                        wrapper.appendChild(span);
                    }, 75 * i);
                }(i));
            }
            },1500);
            }
            else {
                return console.log('already typed');
            }
        }

    var is_aboutme_show = 0;
    function moreaboutme(){
        console.log('moreaboutme_script_start');
        if (is_aboutme_show==0){
            is_aboutme_show==1;
            document.getElementById("custom-2").style.transition = "all 1s ease";
            document.getElementById("custom-2").style.transform = "skewY(-20deg)";
            setTimeout(function(){
                document.getElementById("heading-1").style.marginLeft = "7.63vw";
                document.getElementById("heading-1").style.opacity = "1";
            },0);
            setTimeout(function(){
                document.getElementById("heading-2").style.opacity = "1";
                document.getElementById("heading-2").style.marginLeft = "7.63vw";
            },100);
            setTimeout(function(){
                document.getElementById("heading-3").style.opacity = "1";
                document.getElementById("heading-3").style.marginLeft = "7.63vw";
            },200);
            setTimeout(function(){
                document.getElementById("heading-4").style.opacity = "1";
                document.getElementById("heading-4").style.marginLeft = "7.63vw";
            },300);
            setTimeout(function(){
                document.getElementById("heading-5").style.opacity = "1";
                document.getElementById("heading-5").style.marginLeft = "7.63vw";
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