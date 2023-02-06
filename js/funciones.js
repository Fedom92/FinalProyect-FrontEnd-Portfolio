

const likeBtn = document.querySelector(".like__btn");
const likeIcon = document.querySelector("#icon")
const count = document.querySelector("#count");

let clicked =false;

likeBtn.addEventListener("click",() =>{
    if(!clicked){
        clicked=true;
        likeIcon.innerHTML = '<i class="fas fa-thumbs-up"></i>'
        count.textContent++;
    } else{
        clicked=false;
        likeIcon.innerHTML = '<i class="far fa-thumbs-up"></i>'
        count.textContent--;
    }
});

