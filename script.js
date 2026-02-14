// Switch forms
function showRegister(){
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin(){
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}


// REGISTER FUNCTION
function register(){

    let user = document.getElementById("regUser").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;
    let msg = document.getElementById("regMsg");

    if(user=="" || email=="" || pass==""){
        msg.style.color="red";
        msg.innerText="All fields are required!";
        return;
    }

    if(pass.length < 6){
        msg.style.color="red";
        msg.innerText="Password must be at least 6 characters!";
        return;
    }

    // Save to local storage
    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);

    msg.style.color="green";
    msg.innerText="Registration Successful! Now login.";

}


// LOGIN FUNCTION
function login(){

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;
    let msg = document.getElementById("loginMsg");

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(user===savedUser && pass===savedPass){
        msg.style.color="green";
        msg.innerText="Login Successful!";
    }
    else{
        msg.style.color="red";
        msg.innerText="Invalid Username or Password!";
    }
}
