function sendMessage() {
    const custName = document.getElementById('cust-name');
    const custEmail = document.getElementById('cust-email');
    const custPhone = document.getElementById('cust-phone');
    const custMsg = document.getElementById('cust-msg');
    
    if (custName.value == "" || custEmail.value == "" || custPhone.value == "" || custMsg.value == "") {

    }
    else {
        alert("Your Message was successfully submitted, We will Contact you soon!")
    }

}