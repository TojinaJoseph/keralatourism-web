let user=document.getElementById("user");
let pwd=document.getElementById("pwd");
let email=document.getElementById("email");
let phno=document.getElementById("phno");
function validate(){
    if (user.value.trim()==""||pwd.value.trim()=="") {
       alert("fields cannot be empty");
       return false;
    }
    else{
        return true;
    }
}
//  function validatesignup(){
//     if (user.value=="") {
//         alert("field cannot be empty");
//         return false;
//     } else if(pwd.value.length<=5) {
//        alert("password is too short"); 
//        return false;
//     } else if(email.value!=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([A-Z]{2,3})(.[a-z]{2,3})?$) {
//         alert("enter valid emailid");
//     } else if(phno.value==""){
//         alert("field cannot be empty");
//         return false;
//     }
//     else{
//         return true;
//     }

// }