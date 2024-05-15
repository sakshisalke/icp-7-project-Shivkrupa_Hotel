//Slider 
function changeImages(imageName) {
    const prodImage = document.getElementById('image-slider');
    prodImage.src = imageName;
}

// Reveiw
const custEmail = document.getElementById('cust-email');
const custReview = document.getElementById('cust-review');
const custName = document.getElementById('cust-name');

function submitReview() {
    if (custName.value == "" || custEmail.value == "" || custReview.value == "") {

    }
    else {
        alert(`${custName.value} your Review added successfully!!!`)
    }

}

let custNameArray = [];
let custReviewArray = [];

const nameFromLocalStorage = localStorage.getItem("custNameArray");
if(nameFromLocalStorage)
    {
        custNameArray= JSON.parse(nameFromLocalStorage);
        render();
    }

const reviewFromLocalStorage = localStorage.getItem("custReviewArray");
if(reviewFromLocalStorage)
    {
        custReviewArray= JSON.parse(reviewFromLocalStorage);
        render();
    }

function addReview() {
    submitReview();
    custNameArray.push(custName.value);
    localStorage.setItem("custNameArray", JSON.stringify(custNameArray));

    custReviewArray.push(custReview.value);
    localStorage.setItem("custReviewArray", JSON.stringify(custReviewArray));

    console.log(custNameArray)
    custName.value = "";
    custEmail.value = "";
    custReview.value = "";

    render();
}

function render() {
    const cardCustName = document.getElementById('card-cust-name');
    cardCustName.innerHTML = "";

    const cardCustMsg = document.getElementById('card-cust-msg');
    cardCustMsg.innerHTML = "";

    for (const custNameElement of custNameArray) {
        cardCustName.innerHTML = custNameElement;
    }

    for (const custMsgElement of custReviewArray) {
        cardCustMsg.innerHTML = custMsgElement;
    }

}


// Dark-Light-Mode
function dakrMode(){
    const heading= document.getElementById('heading');
    heading.classList.remove("main-heading");
    const heading1= document.getElementById('heading1');
    heading1.classList.remove("main-heading");
    const heading2= document.getElementById('heading2');
    heading2.classList.remove("main-heading");
    const bodyElement= document.getElementById('body');
    bodyElement.className = "dark-mode";
}

function lightMode(){
    const heading= document.getElementById('heading');
    heading.classList.add("main-heading");
    const heading1= document.getElementById('heading1');
    heading1.classList.add("main-heading");
    const heading2= document.getElementById('heading2');
    heading2.classList.add("main-heading");

    const bodyElement= document.getElementById('body');
    bodyElement.classList.remove("dark-mode")
}
