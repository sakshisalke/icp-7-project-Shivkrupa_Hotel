function changeImages(imageName){
    const prodImage= document.getElementById('image-slider');
    prodImage.src = imageName;
}

function submitReview(){
    const custName= document.getElementById('cust-name').value;
    alert(`${custName} your message send successfully!!!`)
}
