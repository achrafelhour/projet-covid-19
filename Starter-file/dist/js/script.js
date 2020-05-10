const start = document.querySelector(".start");
const stepers = document.querySelectorAll(".stepers");
const preambule = document.querySelector(".Preambule");
const contentQuestion = document.querySelector(".test");
const questionnes = document.querySelectorAll(".questionnes");
const next = document.querySelector(".next");
const precedent = document.querySelector(".precedent");
const barProgress = document.querySelector(".w3-blue");
const vraisChoix = document.querySelectorAll(".vrais");
const fauxChoix = document.querySelectorAll(".faux");
const btnResule = document.querySelector(".rslBtn");
const questionProgres = document.querySelector(".progres");
const resultFinal = document.querySelector(".rsltMsg");


start.addEventListener("click", firstStep);

function firstStep() {
    start.style.display = "none";
    stepers[0].classList.remove("shadow");
    stepers[1].classList.add("shadow");
    preambule.style.display = "none";
    contentQuestion.classList.remove("hide");
    questionnes.classList.add('remove1');
    // presedentButton();
}


let i = 1;
next.addEventListener("click", () => {
    if (i === 0) {
        questionnes[i].classList.remove('remove');
    } else if (i === questionnes.length){
        next.style.display="none";
        precedent.style.display="none";
        btnResule.classList.remove('hide');
    }else {
        questionnes[i].classList.remove('remove');
        questionnes[i - 1].classList.add('remove');
        precedent.classList.remove('hide');

    }
   
    i++;
    progress(i-1) 
})
console.log(i);
precedent.addEventListener("click", () => {
        questionnes[i].classList.add('remove');
        questionnes[i - 1].classList.remove('remove');
    i--;
    if(i === 0){
        precedent.classList.add('hide');
    }
    progress(i-1) 
})

function progress(number) {
    const numberProgres = number + 1;
    questionProgres.innerText = numberProgres;
    barProgress.style.width = `calc(${numberProgres} * calc(100% / 5))`;

}





btnResule.addEventListener("click" , ()=>{
    stepers[1].classList.remove("shadow");
    stepers[2].classList.add("shadow");
        contentQuestion.classList.add("hide");
        resultFinal.classList.remove("hide");
        resultFinal.innerHTML=`<div>Appelez le 114 est rester chez vous</div>`
    
})