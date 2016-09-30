console.log('Loaded!');

//changing text
var element = document.getElementById('main-text');
element.innerHTML = "Hello, Iam Kalyan Uyyala";

//moving the image on click
var img = document.getElementById('img');
img.onclick = function () {
    img.style.marginLeft = '100px';
}



