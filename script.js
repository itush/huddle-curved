function EmailValidation(mail)
{
    let emailAddress = document.getElementById("email").value;
    let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    console.log(emailAddress);
    if(emailAddress == "") {
        document.getElementById('error').innerHTML = "Email can not be empty";
        document.getElementById('error').style.color = "red";      
       
        return false;
    }
    else if (!emailAddress.match(validEmail)) {
        document.getElementById('error').innerHTML = "Check your email please";
        document.getElementById('error').style.color = "red";       
        return false;
    }
};