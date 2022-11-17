let slideIndex = 1;
let picCount = document.querySelectorAll('.column img, .row-with-2-col img, .biggestcol img, .thirty-percent-extra-row img').length;


window.onresize = window.onload = function(){
    resize(document.querySelector('.pop-up img'));
    //rearrange(document.querySelectorAll('.thirty-percent-extra-row'));
}



// function rearrange(col_with_3_rol){
//     winsize = getWinDim();
//     if(winsize.x<800 && winsize.x>600){
//         for(y = 0; y<col_with_3_rol.length;y++){
//             col_with_3_rol[y].classList.add('grid-disp');
//             console.log(col_with_3_rol[y].classList);
//         }
//     }
//     if(winsize.x>=800){
//         for(x = 0; x<col_with_3_rol.length;x++){
//             col_with_3_rol[x].classList.remove('grid-disp');
//         }

//     }
// }

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


document.querySelectorAll('.column img, .biggestcol img, .thirty-percent-extra-row img, .row-with-2-col img').forEach( img=> {
    img.onclick = () =>{
        document.querySelector('.pop-up img').src = img.getAttribute('src');
        resize(document.querySelector('.pop-up img'));

        document.querySelector('.pop-up').style.visibility = 'visible';
        slideIndex = img.getAttribute('id');
    }
});

document.querySelectorAll('.column img, .biggestcol img').forEach( gridimd =>{
    gridimd.onload = () =>{
        console.log(gridimd.naturalWidth + " and " + gridimd.naturalHeight + " "+ gridimd.getAttribute('id'));
        if(gridimd.naturalWidth > gridimd.naturalHeight){
            gridimd.style.height = '240px';
            if(gridimd.getAttribute('id')>picCount-5){
                gridimd.style.height = '580px';
            }
        }
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
