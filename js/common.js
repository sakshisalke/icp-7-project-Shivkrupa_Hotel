// Dark-Light-Mode
function dakrMode(){
    const heading= document.getElementById('heading');
    heading.classList.remove("main-heading");

    const bodyElement= document.getElementById('body');
    bodyElement.className = "dark-mode";
}

function lightMode(){
    const heading= document.getElementById('heading');
    heading.classList.add("main-heading");

    const bodyElement= document.getElementById('body');
    bodyElement.classList.remove("dark-mode")
}
