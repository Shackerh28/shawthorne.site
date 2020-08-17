let mobile_nav = document.getElementById('mobile_ul');
let hamburger = document.getElementById('hamburger');
let ball1 = document.getElementById('sballx');
let ball2 = document.getElementById('sballc');
let ball3 = document.getElementById('sballv');
let ball4 = document.getElementById('sballb');
let ball5 = document.getElementById('sballn');
function change(){

    hamburger.addEventListener('click',function(){
        ball1.style.top = '400px';
        ball2.style.top = '500px';
        ball3.style.display = 'none';
        ball4.style.display = 'none';
        ball5.style.top = '400px';
        mobile_nav.classList.toggle('active');


    });
    
}

change();

$(document).ready(function () {
    $('.submit').click(function(event){
       
        console.log('clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>email is valid</div>')
        } else {
            event.preventDefault()
        statusElm.append('<div>email is not valid</div>')
        }

        if(subject.length >= 2){
            statusElm.append('<div>subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>subject is not valid</div>')
        }

        if(message.length >= 20){
            statusElm.append('<div>message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>message is not valid</div>')
        }

    })
});
