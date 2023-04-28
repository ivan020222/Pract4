let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Chrome is cool, ' + myName;
    }
}

function Slider(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='images/chrome.png'){
        myImage.setAttribute('src', 'images/chrome2.png');
    }else{
        myImage.setAttribute('src', 'images/chrome.png');
    }
}

let Slides = window.setInterval(Slider, 2000);

myButton.onclick = function(){
    setUserName();
}

//myImage.onclick = 