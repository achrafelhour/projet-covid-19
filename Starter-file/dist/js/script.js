const start = document.querySelector(".start");
const stepers = document.querySelectorAll(".stepers");
const preambule = document.querySelector(".Preambule");
const contentQuestion = document.querySelector(".test");
const questionnes = document.querySelectorAll(".questionnes");
const next = document.querySelector(".next");
const precedent = document.querySelector(".precedent");
const barProgress = document.querySelector(".w3-blue");
// const vraisChoix = document.querySelectorAll(".vrais");
const fauxChoix = document.querySelectorAll(".faux");
const btnResule = document.querySelector(".rslBtn");
const questionProgres = document.querySelector(".progres");
const resultFinal = document.querySelector(".Preambule p");
const btnnext = document.querySelector('btnSteper');

start.addEventListener("click", firstStep);

function firstStep() {
    start.style.display = "none";
    stepers[0].classList.remove("shadow");
    stepers[1].classList.add("shadow");
    preambule.style.display = "none";
    contentQuestion.classList.remove("hide");
    // questionnes.classList.add('remove1');
    // presedentButton();
}



let i = 0;
next.addEventListener("click", () => {
    if (i === 0) {
        questionnes[i].classList.remove('remove');
        showResult();
    } else if (i === questionnes.length){
        next.style.display="none";
        precedent.style.display="none";
        btnResule.classList.remove('hide');
        // btnnext.textContent= 'terminer le test'
    }else {
        questionnes[i].classList.remove('remove');
        questionnes[i - 1].classList.add('remove');
        precedent.classList.remove('hide');
        showResult();
    }
   
    i++;
    progress(i-1) 
   
})
// console.log(i);
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
    barProgress.style.width = `calc(${numberProgres} * calc(100% / 7))`;

}


var all = [];
var stockResult = [];
function showResult() {
    vraisChoix = document.querySelectorAll(".vrais");
    vraisChoix[i].addEventListener("click", () => {
        var rslt = all.push("");
        stockResult.push(rslt);
        
        console.log(stockResult);
        console.log(rslt);
        
    });
    
}


btnResule.addEventListener("click", () => {
    stepers[1].classList.remove("shadow");
    stepers[2].classList.add("shadow");
    contentQuestion.classList.add("hide");
    preambule.style.display = "block";
    // btnResule.classList.remove('hide');
    btnResule.style.display = "block";
    btnResule.textContent =  ' Recommencer le test';
    btnResule.addEventListener('click', ()=>{
        window.location.reload();
    })
    if(stockResult.length === questionnes.length){
        resultFinal.innerHTML = 'Nous vous conseillons de rester à votre domicile et de contacter votre médecin' +
                ' en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouv' +
                'eau l’application pour réévaluer vos symptômes';
        resultFinal.style.fontWeight = 'bold';
        resultFinal.style.color = '#ff0000';
        // resultFinal.innerHTML = `<div>machi korona</div>`
    }else if(stockResult.length >= questionnes.length/2){
        resultFinal.innerHTML = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
        'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultFinal.style.fontWeight = 'bold';
        resultFinal.style.color = '#ff0000';
    }else if(stockResult.length < questionnes.length/2){
        resultFinal.innerHTML = 'Votre situation ne relève probablement pas du Covid-19.' +
        'N’hésitez pas à contacter votre médecin en cas de doute.' + 'Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.' + 'Pour toute information concernant le Covid-19 allez vers la page d’accueil.'
        resultFinal.style.fontWeight = 'bold';
        resultFinal.style.color = '#369D53';
    }
});
