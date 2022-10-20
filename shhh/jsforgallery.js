let slideIndex = 1;
let picCount = document.querySelectorAll('.column img').length;

document.querySelectorAll('.column img').forEach( img=> {
    img.onclick = () =>{
        document.querySelector('.pop-up').style.visibility = 'visible';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
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
}

document.querySelector('.prev').onclick = () =>{
    slideIndex--;
    if(slideIndex==0){
        slideIndex=picCount;
    }
    console.log(slideIndex);
    document.querySelector('.pop-up img').src = document.getElementById(slideIndex).src;
}