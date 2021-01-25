let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hero-img_large2.png') {
        myImage.setAttribute('src', 'images/logo.png');}
        else {
            myImage.setAttribute('src', 'images/hero-img_large2.png');
    }
}