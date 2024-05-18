function timer() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById('clock').innerText = time;
}
setInterval(timer, 1000);
timer();

function dateDiff() {
    const currentDate = new Date();
    const publishDate = document.getElementById('publish-date').innerText;
    const dateDifference = parseInt(publishDate) - currentDate.getDate();
    const result = document.getElementById('date-difference');
    const day = (dateDifference > 1) ? `days are` : `day is`;

    if (currentDate.getDate() == publishDate) {
        result.innerText = `Product is Launched!`;
    }
    else {
        result.innerText = `Only ${dateDifference} ${day} remaining!`;
    }
}
dateDiff();

// Second Product
function timerProd1() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById('clock1').innerText = time;
}
setInterval(timerProd1, 1000);
timerProd1();

function dateDiffProd1() {
    const currentDate = new Date();
    const publishDate = document.getElementById('publish-date-prod1').innerText;
    const dateDifference = parseInt(publishDate) - currentDate.getDate();
    const result = document.getElementById('date-difference-prod1');
    const day = (dateDifference > 1) ? `days are` : `day is`;
    if (currentDate.getDate() == publishDate) {
        result.innerText = `Product is Launched!`;
    }
    else {
        result.innerText = `Only ${dateDifference} ${day} remaining!`;
    }
}
dateDiffProd1();


//Third Product
function timerProd2() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById('clock2').innerText = time;
}
setInterval(timerProd2, 1000);
timerProd2();

function dateDiffProd2() {
    const currentDate = new Date();
    const publishDate = document.getElementById('publish-date-prod2').innerText;
    const dateDifference = parseInt(publishDate) - currentDate.getDate();
    const result = document.getElementById('date-difference-prod2');
    const day = (dateDifference > 1) ? `days are` : `day is`;
    if (currentDate.getDate() == publishDate) {
        result.innerText = `Product is Launched!`;
    }
    else {
        result.innerText = `Only ${dateDifference} ${day} remaining!`;
    }
}
dateDiffProd2();

function submitEmail() {
    const inputEmail = document.getElementById('input-email');
    if (inputEmail.value == "") {
        alert("Enter your Email first");
    }
    else {
        alert("Thanks! Now you can get the updates regularly...");
        inputEmail.value = "";
    }
}
