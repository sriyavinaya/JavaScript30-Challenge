const panels = document.querySelectorAll('.panel');
// console.log("heller");

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

// panels.forEach(panel => panel.addEventListener("transitionend", ()=>{
//     console.log(this);
//     if(this.propertyName.includes('flex')){
//         this.classList.toggle('open-active');
//     }
// }));


function toggleOpen(){
    this.classList.toggle('open');
    // console.log(e);
}

function toggleActive(e){
    // console.log(e);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    
}