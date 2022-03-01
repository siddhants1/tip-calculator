let bill = document.querySelector(".dollar");
let persons = document.querySelector(".person");

let five = document.querySelector(".per-one");
let ten = document.querySelector(".per-two");
let fifteen = document.querySelector(".per-three");
let twenty_five = document.querySelector(".per-four");
let fifty = document.querySelector(".per-five");
let custom = document.querySelector(".per-six");

let tip_content = document.querySelector(".price-output-tip");
let total_content = document.querySelector(".price-output-total");

let button = document.getElementsByTagName("button")[0];


const fiveInputProcessing = () => {
    let bill_value = Number(bill.value);
    let persons_value = Number(persons.value);
    if ((bill_value != 0) && (persons_value !=0)) {
        let tip = (bill_value * 0.05) / persons_value;
        let total = (bill_value / persons_value) + tip;
        tip_content.textContent = String(tip);
        total_content.textContent = String(total);
    }
}

const tenInputProcessing = () => {
    let bill_value = Number(bill.value);
    let persons_value = Number(persons.value);
    if ((bill_value != 0) && (persons_value !=0)) {
        let tip = (bill_value * 0.1) / persons_value;
        let total = (bill_value / persons_value) + tip;
        tip_content.textContent = String(tip);
        total_content.textContent = String(total);
    }
}

const fifteenInputProcessing = () => {
    let bill_value = Number(bill.value);
    let persons_value = Number(persons.value);
    if ((bill_value != 0) && (persons_value !=0)) {
        let tip = (bill_value * 0.15) / persons_value;
        let total = (bill_value / persons_value) + tip;
        tip_content.textContent = String(tip);
        total_content.textContent = String(total);
    }
}

const twentyInputProcessing = () => {
    let bill_value = Number(bill.value);
    let persons_value = Number(persons.value);
    if ((bill_value != 0) && (persons_value !=0)) {
        let tip = (bill_value * 0.25) / persons_value;
        let total = (bill_value / persons_value) + tip;
        tip_content.textContent = String(tip);
        total_content.textContent = String(total);
    }
}

const fiftyInputProcessing = () => {
    let bill_value = Number(bill.value);
    let persons_value = Number(persons.value);
    if ((bill_value != 0) && (persons_value !=0)) {
        let tip = (bill_value * 0.5) / persons_value;
        let total = (bill_value / persons_value) + tip;
        tip_content.textContent = String(tip);
        total_content.textContent = String(total);
    }
}

const buttonReset = () => {
    bill.value = "";
    persons.value = "";
    tip_content.textContent = "$0";
    total_content.textContent = "$0";
}

five.addEventListener("click", fiveInputProcessing);
ten.addEventListener("click", tenInputProcessing);
fifteen.addEventListener("click", fifteenInputProcessing);
twenty_five.addEventListener("click", twentyInputProcessing);
fifty.addEventListener("click", fiftyInputProcessing);
button.addEventListener("click", buttonReset);
