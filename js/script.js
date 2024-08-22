
let arrow=document.getElementById('arrow');
let foot=document.getElementById('foot');
foot.style.display='none';
arrow.addEventListener('click',()=>{
    if (foot.style.display == 'none'){
        foot.style.display='block';
        arrow.style.transform='rotate(180deg)';
        arrow.style.color="rgb(255, 38, 0)";
        arrow.style.textShadow= '(2px 4px black)';
    }
    else{
            foot.style.display='none';
            arrow.style.transform='rotate(360deg)';
    }
})

