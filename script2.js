let username=document.getElementById("username");
let pass=document.getElementById("pass");
let email=document.getElementById("email");
let phno=document.getElementById("phno");
function validatesignup(){
        if (username.value=="") {
            alert("field cannot be empty");
            return false;
        } else if(pass.value.length<=5) {
           alert("password is too short"); 
           return false;
        } 
        else if(phno.value==""){
            alert("field cannot be empty");
           return false;
        }
        // else if(email.value!="/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$"){
        //     alert("invalid emailid");
        //     return false;
        // }
        else if(email.value==""){
            alert("field required");
            return false;
        }
        else{
            return true;
        }
    
    }