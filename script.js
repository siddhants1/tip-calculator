let bill = document.querySelector(".dollar");
let persons = document.querySelector(".person");

let five = document.querySelector(".per-one");
let ten = document.querySelector(".per-two");
let fifteen = document.querySelector(".per-three");
let twenty_five = document.querySelector(".per-four");
let fifty = document.querySelector(".per-five");
let custom = document.querySelector(".per-six");


const inputProcessing = () => {
    if ((bill != 0) && (persons !=0)) {
        
    }
}

bill.addEventListener("focus", inputProcessing);
persons.addEventListener("focus", inputProcessing);
five.addEventListener("click", inputProcessing);
ten.addEventListener("click", inputProcessing);
fifteen.addEventListener("click", inputProcessing);
twenty_five.addEventListener("click", inputProcessing);
fifty.addEventListener("click", inputProcessing);
