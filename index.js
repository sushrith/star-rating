let stars = document.getElementById("star-container");
let list = stars.querySelectorAll(".star")
let filled = 0; 
let count = document.getElementById("star-count");

stars.addEventListener('click',(event)=>{
    filled = event.target.dataset.index;

    count.innerHTML = `<h2>Rating Count : ${filled}</h2>`
});

stars.addEventListener('mouseover',(event)=>{
    let currClicked = event.target.dataset.index; 
    for(let i=0;i<5;i++){
        list[i].classList.remove("filled")
    }
    for(let i=0;i<currClicked;i++){
        list[i].classList.add("filled")
    }
});

stars.addEventListener('mouseleave',(event)=>{
    for(let i=0;i<5;i++){
        list[i].classList.remove("filled")
    }
    for(let i=0;i<filled;i++){
        list[i].classList.add("filled")
    }
});