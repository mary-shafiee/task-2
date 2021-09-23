
var login = document.querySelector('.login');
    login.onclick=function show(){
    alert('Are You Sign Up Before?');
}

var signup= document.querySelector('.signup');
    signup.onclick=function consol(){
        console.log('Yor\'re Sign Up successfully !! ');
    }

var obj=document.querySelector('.get-started');
    obj.onclick=function start(){
        alert('Are you Ready For Start ?');
    }

var see=document.querySelector('.see');
    see.onclick=function start(){
        window.location="http://www.apowersoft.com/"
    }


var home=document.querySelector('.home');
    home.onclick=function camelcase(text){
        text=text.split('-');
        return str.map(function(word,index){
          if(index == 0){
            return word.toLowerCase();
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
      }

var about=document.querySelector('.about');
    about.onclick=function aboutus(){
        alert(window.location.hostname);
    }

var resume=document.querySelector('.resume');
    resume.onclick=function aboutus(){
        alert(window.location.port);
    }

var contact=document.querySelector('.contact');
    contact.onclick=function aboutus(){
        alert(window.location.protocol);
    }