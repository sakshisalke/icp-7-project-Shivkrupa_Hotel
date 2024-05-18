function addDoubt(){
    const inputdDoubt= document.getElementById('doubt');
    if(inputdDoubt.value== "")
    {
        alert("Enter your Doubt first");
    }
    else{
        alert("Your Doubt will be solve...");
        inputdDoubt.value= "";
    }
}

// Dark-Light-Mode
function dakrMode(){
    const heading= document.getElementById('heading');
    heading.classList.remove("main-heading");
    const heading1= document.getElementById('heading1');
    heading1.classList.remove("main-heading");
    
    const bodyElement= document.getElementById('body');
    bodyElement.className = "dark-mode";
}

function lightMode(){
    const heading= document.getElementById('heading');
    heading.classList.add("main-heading");
    const heading1= document.getElementById('heading1');
    heading1.classList.add("main-heading");

    const bodyElement= document.getElementById('body');
    bodyElement.classList.remove("dark-mode")
}