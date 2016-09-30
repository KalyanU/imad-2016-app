console.log('Loaded!');

//changing text
var element = document.getElementById('main-text');
element.innerHTML = "Hello, Iam Kalyan Uyyala";

//moving the image on click
var img = document.getElementById('madi');

var marginLeft = 0; 
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

madi.onclick = function () {
    var interval = setInterval(moveRight, 50);
};




