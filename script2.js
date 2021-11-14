let username=document.getElementById("username");
const pass=document.querySelector("#pass");
let pass1=document.getElementById("pass1");
let email=document.getElementById("email");
let phno=document.getElementById("phno");
let text1=document.getElementById("text1");
let usern=document.getElementById("usern");
let emailf=document.getElementById("emailf");
let phone=document.getElementById("phone");
let passw=document.getElementById("passw");
let passw1=document.getElementById("passw1");
let useerrp=document.getElementById("useerrp");
let emailerrp=document.getElementById("emailerrp");
let phoneerrp=document.getElementById("phoneerrp");
let repasserrp=document.getElementById("repasserrp");
let passerp=document.getElementById("passerp");
function validatesignup(){
    removeall();
        if (username.value==""){
            checkuser();
            function checkuser() {
                useerrp.innerHTML="enter username";
                usern.style.borderBottom="1px solid red";    
            }
           return false;    
        }
         else if(email.value==""){
            checkuser1();
            function checkuser1() {
                emailerrp.innerHTML="enter emailId";
                emailf.style.borderBottom="1px solid red";    
            } 
          return false;
     }
    else if(phno.value==""){
        checkuser2();
        function checkuser2() {
            phoneerrp.innerHTML="enter number";
            phone.style.borderBottom="1px solid red";    
        } 
        
          return false;
        }
     else if(pass.value==""){
        checkuser3();
            function checkuser3() {
                passerp.innerHTML="enter pswrd";
                passw.style.borderBottom="1px solid red";    
            } 
         
           return false;
        }
     else if(pass1.value==""){
            checkuser4();
            function checkuser4() {
                repasserrp.innerHTML="enter password";
                passw1.style.borderBottom="1px solid red";    
            } 
            
           return false;
        }
        else{ 
         return true;
        }
    
    }

// email validation start
    function emailvalidation(){
        removeemail();
           let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
         if(regexp.test(email.value)){
                validmail();
                function validmail() {
                    emailerrp.innerHTML="";
                    emailf.style.borderBottom="1px solid #4caf50";
                }
                return true;   
            }
         else{
            checkemail();
            function checkemail() {
                emailerrp.innerHTML="enter valid email";
                emailf.style.borderBottom="1px solid red";    
            }
            
             return false;

         }
    }
    // email validation ends
    // phone validation start
    function phnovalidation(){
        removephone();
        let regphn=/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regphn.test(phno.value)){
        return true;
        }
    else if(phno.value.length!=10){
        phoneerrp.innerHTML="enter valid number";
        phone.style.borderBottom="1px solid red";
        return false;
        }
     else{
        phoneerrp.innerHTML="enter valid number";
        phone.style.borderBottom = "1px solid red";
        return false;
     }
    }

   
    // phone validation ends
    // password validation
      const indicator=document.querySelector(".indicator");  
      const input=document.querySelector("input");
      const weak=document.querySelector(".weak");
      const medium=document.querySelector(".medium");
      const strong=document.querySelector(".strong");
      const text=document.querySelector(".text");
      const showbtn=document.querySelector(".showbtn");
      let regExpWeak=/[a-z]/;
      let regExpMedium=/\d+/;
      let regExpStrong=/.[!,@,#,$,%,^,&,*,(,),_,-,?,~,]/;
      function passvalidation() {
         if(pass.value!="") {
             indicator.style.display = "block";
             indicator.style.display = "flex";
             if(pass.value.length <=3 && (pass.value.match(regExpWeak) || pass.value.match(regExpMedium) || pass.value.match(regExpStrong)))no=1;
             if(pass.value.length >=6 && ((pass.value.match(regExpWeak) && pass.value.match(regExpMedium) || pass.value.match(regExpMedium) && pass.value.match(regExpStrong)) || pass.value.match(regExpWeak) && pass.value.match(regExpStrong)))no=2; 
             if(pass.value.length >=6 && ((pass.value.match(regExpWeak) && pass.value.match(regExpMedium) && pass.value.match(regExpStrong))))no=3;
             if (no==1){
                weak.classList.add("active");
                text.style.display="block";
                text.textContent="your password is too weak";
                text.classList.add("weak");
                 }
             if (no==2){
               medium.classList.add("active");
               text.textContent = "your password is medium";
               text.classList.add("medium");   
             } else {
                medium.classList.remove("active");
                text.classList.remove("medium");  
             }
             if (no==3){
                medium.classList.add("active");
                strong.classList.add("active");
                text.textContent = "your password is strong";
                text.classList.add("strong");   
              } else {
                 strong.classList.remove("active");
                 text.classList.remove("strong");  
              } 
            showbtn.style.display = "block";
              showbtn.onclick = function(){
                  if (pass.type == "password") {
                     pass.type = "text";
                     showbtn.textContent = "HIDE";
                  }
                  else{
                    pass.type = "password";
                    showbtn.textContent = "SHOW";
                  }
                return true; 
              } 
         }else{
             indicator.style.display = "none";
             text.style.display = "none";
             showbtn.style.display = "none";
             return false;
         }

      }
// password validation
// checkall
function checkall(){
    if(username.value=="" && email.value=="" && phno.value=="" && pass.value=="" && pass1.value==""){
        useerrp.innerHTML="enter username";
        emailerrp.innerHTML="enter emailId";
        phoneerrp.innerHTML="enter number";
        repasserrp.innerHTML="enter password";
        passerp.innerHTML="enter pswrd";
        usern.style.borderBottom="1px solid red";
        emailf.style.borderBottom="1px solid red";
        phone.style.borderBottom="1px solid red";
        passw.style.borderBottom="1px solid red";
        passw1.style.borderBottom="1px solid red";
        return false;
    }
    else{
        useerrp.innerHTML="";
        emailerrp.innerHTML="";
        phoneerrp.innerHTML="";
        repasserrp.innerHTML="";
        passerp.innerHTML="";
        return true;
    }
}
function removeerror(){
     useerrp.innerHTML="";
     emailerrp.innerHTML="";
     phoneerrp.innerHTML="";
     repasserrp.innerHTML="";
     passerp.innerHTML="";
    usern.style.borderBottom="1px solid #4caf50";
    emailf.style.borderBottom="1px solid #4caf50";
    phone.style.borderBottom="1px solid #4caf50";
    passw.style.borderBottom="1px solid #4caf50";
    passw1.style.borderBottom="1px solid #4caf50";
}
function removeall(){
    useerrp.innerHTML="";
        usern.style.borderBottom="1px solid #4caf50";
       
}
function removeemail(){
    emailerrp.innerHTML="";
    emailf.style.borderBottom="1px solid #4caf50";
}
function removephone(){
    phoneerrp.innerHTML="";
    phone.style.borderBottom="1px solid #4caf50";
    }
   
function removepass(){
    passerp.innerHTML="";
    passw.style.borderBottom="1px solid #4caf50";

}
function removepassre(){
    repasserrp.innerHTML="";
    passw1.style.borderBottom="1px solid #4caf50";
}