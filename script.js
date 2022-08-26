check = (input) =>{
    if (input.value != document.getElementById('password').value){
        input.setCustomValidity('password does not match')
    }
    else{
        input.setCustomValidity('')
    }
}