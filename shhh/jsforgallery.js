let slideIndex = 1;
let picCount = document.querySelectorAll('.column img').length;


window.onresize = window.onload = function(){
    resize(document.querySelector('.pop-up img'));
}

function resize(img)
{
        winDim = getWinDim();
    img.style.height = 0.9*winDim.y + "px";
    img.style.width = "auto";

    if (img.offsetWidth > winDim.x)
    {
        img.style.height = "auto";
        img.style.width = 0.9*winDim.x + "px";
    }
}

function getWinDim(){
    let body = document.documentElement || document.body;
    return{
        x: window.innerWidth  || body.clientWidth,
        y: window.innerHeight || body.clientHeight
    }
}

document.querySelectorAll('.column img').forEach( img=> {
    img.onclick = () =>{
        document.querySelector('.pop-up img').src = img.getAttribute('src');
        resize(document.querySelector('.pop-up img'));

        document.querySelector('.pop-up').style.visibility = 'visible';
        slideIndex = img.getAttribute('id');
    }
});

document.querySelector('.close').onclick = () =>{
    document.querySelector('.pop-up').style.visibility = 'hidden';
    slideIndex = 1;
}


document.querySelector('.next').onclick = () =>{
    slideIndex++;
    if(document.getElementById(slideIndex)==null){
        slideIndex=1;
    }
    console.log(slideIndex);
    document.querySelector('.pop-up img').src = document.getElementById(slideIndex).src;
    resize(document.querySelector('.pop-up img'));
}

document.querySelector('.prev').onclick = () =>{
    slideIndex--;
    if(slideIndex==0){
        slideIndex=picCount;
    }
    console.log(slideIndex);
    document.querySelector('.pop-up img').src = document.getElementById(slideIndex).src;
    resize(document.querySelector('.pop-up img'));
}