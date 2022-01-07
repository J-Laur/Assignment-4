const password = document.querySelector(".password");

function passwordCheck(password) {
    if (password.value === "12345678") {
      //correct pw
      button.innerHTML = "Correct!";
    } else {
      //wrong pw
      button.innerHTML = "Invalid password!";
    }
 }
 function changeH1(){

    if(password === "12345678")
        document.getElementsById("h1").innerText = "All set!";

 }