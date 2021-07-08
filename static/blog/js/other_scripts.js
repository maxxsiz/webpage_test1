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

    


