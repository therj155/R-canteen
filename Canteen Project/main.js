 function checkPassword() {
    const realpass = "rmj";
    const enteredpass = document.getElementById("admin-password").value.trim();

    if (enteredpass === realpass) {
        window.location.href = "admin.html";
    } else {
        alert("Wrong password! Enter correct password");
    }
}

function fpassword() {
     alert("contact to admin rmj4352@gmail,.com");

    
}

function fusername() {
    alert("for now username is not needed just put your name and correct password !");
     
     

}

function btncolor(){
    document.getElementById("order1").style.backgroundColor = "#444444";
}


