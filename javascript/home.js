function openBar() {
    document.getElementById("sidebar").style.width = "45rem";
}


function closeBar() {
    document.getElementById("sidebar").style.width = "0";
}



let getEmailBox = () => {
    event.preventDefault();
    
    let emailBox = document.getElementById("email-box");
    let numberBox = document.getElementById("input-box");
    let inputChanger = document.getElementById("input-changer");

    let emailBoxStyle = window.getComputedStyle(emailBox);
    let numberBoxStyle = window.getComputedStyle(numberBox);

    if(emailBoxStyle.getPropertyValue("display") == "none"){
        emailBox.style.display = "block";
        numberBox.style.display = "none";
        inputChanger.innerHTML = "Continue with mobile number"
        
    }else{
        emailBox.style.display = "none";
        numberBox.style.display = "flex";
        inputChanger.innerHTML = "Continue with email"
    }
    
}

let signupForm = () => {
    event.preventDefault();

    let loginForm = document.getElementById("login")
    let signupForm_ = document.getElementById("signup")
    let formChanger = document.getElementById("form-changer");

    let loginFormStyle = window.getComputedStyle(loginForm);
    let signupForm_Style = window.getComputedStyle(signupForm_);

    if(signupForm_Style.getPropertyValue("display") == "none"){
        signupForm_.style.display = "block";
        loginForm.style.display = "none";
        formChanger.innerHTML = "Continue with mobile number"
        
    }else{
        signupForm_.style.display = "none";
        loginForm.style.display = "block";
        formChanger.innerHTML = "Continue with email"
    }

    


}