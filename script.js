let user=document.getElementById("user");
let pwd=document.getElementById("pwd");
let email=document.getElementById("email");
let phno=document.getElementById("phno");
let usernl=document.getElementById("usernl");
let passwl=document.getElementById("passwl");
let userr=document.getElementById("userr");
let passerr=document.getElementById("passerr");
function validate(){
    if (user.value.trim()=="" && pwd.value.trim()==""){
        // removeuserlog();
        checkuser5();
        function checkuser5() {
            userr.innerHTML="enter username";
            passerr.innerHTML="enter password";
            passwl.style.borderBottom="1px solid red";
            usernl.style.borderBottom="1px solid red";    
        }
       return false;
    }
    else if(pwd.value.trim()==""){
        checkuser6();
        function checkuser6() {
            passerr.innerHTML="enter password";
            passwl.style.borderBottom="1px solid red";    
        } 
     return false;   
    }else if(user.value.trim()==""){
        // checkuser7();
        // function checkuser7() {
        //     passerr.innerHTML="enter password";
        //     passwl.style.borderBottom="1px solid red";    
        // } 
     return false;   
    }
    else{
        userr.innerHTML="";
        passerr.innerHTML="";
        return true;
    }
}

function removeuserlog(){
    userr.innerHTML="";
    usernl.style.borderBottom="1px solid #4caf50"; 
    // validate();
}
function removepasslog(){  
    passerr.innerHTML="";
    passwl.style.borderBottom="1px solid #4caf50"; 
    validate(); 
}
