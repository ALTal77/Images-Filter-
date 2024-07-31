let image=document.getElementById('img');
let upload=document.getElementById('upload');
let saturate=document.getElementById('saturate');
let constract=document.getElementById('constract');
let brightness=document.getElementById('brightness');
let sepia=document.getElementById('sepia');
let grayscale=document.getElementById('grayscale');
let blur=document.getElementById('blur');
let hueRotate=document.getElementById('hue-rotate');
let reset=document.querySelector('span');
let imgSide=document.querySelector('.img-side');



//Download Button.


let download=document.getElementById('download');
const canvas=document.getElementById('canvas');
const ctx = canvas.getContext('2d');

download.onclick=function () {
    download.href=canvas.toDataURL();
    saturate.value = "100";
    constract.value = "100";
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    hueRotate.value='0';

  }

//Start

window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
}


upload.onchange=function(){
    resetPic();
    download.style.display='block';
    reset.style.display='block';

    let read=new FileReader();
    read.readAsDataURL(upload.files[0]);
    read.onload=function(){
        image.src=read.result;
    }
    image.onload=function(){
        canvas.width=image.width;
        canvas.height=image.height;
        ctx.drawImage(image,0,0,canvas.width,canvas.height);
        image.style.display='none';
    }
}
let inputs=document.querySelectorAll('ul li input');
inputs.forEach( filters=>{
    filters.addEventListener("input",function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${constract.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(image,0,0,canvas.width,canvas.height);
        

    })
})

function resetPic() {
    saturate.value = "100";
    constract.value = "100";
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    hueRotate.value='0';
    ctx.filter = "none";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }
