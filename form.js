var user = document.getElementById("user_name");
var mail = document.getElementById("mail");
var ipass = document.getElementById("pass");
var fpass = document.getElementById("cpass");

user.addEventListener('input',function(){
    if(!(validateUser(user.value))){
        document.querySelector('.uem').textContent = "User name should contain atleast six characters";
    }else{
        document.querySelector('.uem').textContent = "";
    }
})
function validateUser(checkuser){
    const ure = /^[a-zA-Z0-9@_]{6,}$/;
    return ure.test(checkuser);
}
mail.addEventListener('input',function(){
    if(!(validateMail(mail.value))){
        document.querySelector('.mem').textContent = "Mail should have @ and . symbols";
    }else{
        document.querySelector('.mem').textContent = "";
    }
})
function validateMail(checkmail){
    const mre = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    return mre.test(checkmail);
}
ipass.addEventListener('input',function(){
    if(!(validatePass(ipass.value))){
        document.querySelector('.pem').textContent = "Password length should be atleast 6 characters";
    }else{
        document.querySelector('.pem').textContent = "";
    }
})
function validatePass(checkpass){
    const pre = /^[a-zA-Z0-9@_]{6,}$/;
    return pre.test(checkpass);
}

document.getElementById("signupform").addEventListener('submit',function(event){
    event.preventDefault();
    if(ipass.value == fpass.value && validateMail(mail.value) && validatePass(ipass.value) && validateUser(user.value)){
        setTimeout(() => {
            document.querySelector('.signal').textContent = "Form is successfully submitted"
        }, 2000);
    }else{
        setTimeout(() => {
            document.querySelector('.errorsignal').textContent = "Enter your details correctly"
        }, 2000);
    }
})
