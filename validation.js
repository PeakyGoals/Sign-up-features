userid = false;
useridValue = "";
pwd = false;
pwdValue = "";
cnfm = false;
personName = false;
country = false;
zip = false;
email = false;
sex = false;
language = false;

function requireSex(obj) {
    if (obj.value.length > 0) {
        sex = true;
        document.getElementById("sex").style.border = '2px solid green';
    }
    else {
        sex = false;
        document.getElementById("sex").style.border = '2px solid red';
    }
}

function requireCountry(obj) {
    if (obj.value.length > 0) {
        country = true;
        document.getElementById("country").style.border = '2px solid green';
    }
    else {
        country = false;
        document.getElementById("country").style.border = '2px solid red';
    }
}

function requireLang(obj) {
    if (obj.value.length > 0) {
        language = true;
        document.getElementById("lang").style.border = '2px solid green';
    }
    else {
        language = false;
        document.getElementById("lang").style.border = '2px solid red';
    }
}

function validateUserID(obj) {
    if (obj.value.length > 4 && obj.value.length < 13 && obj.value.charAt(0) >= 'A' 
    && obj.value.charAt(0) <= 'Z' && obj.value.charAt(obj.value.length-1) >= '0' 
    && obj.value.charAt(obj.value.length-1) <= '9') {
        language = true;
        document.getElementById("userid").style.border = '2px solid green';
    } 
    else {
        userid = false;
        document.getElementById("userid").style.border = '2px solid red';
    }
}

function validatePwd(obj){  
    if (obj.value.length >= 12 && obj.value.search(/[a-z]/) >= 0 && obj.value.search(/[A-Z]/) >= 0 
    && obj.value.search(/[0-9]/) >= 0 && obj.value.search(/\W/) >= 0) {
        document.getElementById("pwd").style.border = '2px solid orange';
        if(obj.value.length >= 14){
            document.getElementById("pwd").style.border = '2px solid green';
        }
        pwd = true;
        pwdValue = obj.value;
    }
    else {
        pwd = false;
        document.getElementById("pwd").style.border = '2px solid red';
    }
}

function confirmPwd(obj) {
    if (obj.value == pwdValue) {
        cnfm = true;
        document.getElementById("cpwd").style.border = '2px solid green';
    }
    else {
        cnfm = false;
        document.getElementById("cpwd").style.border = '2px solid red';
    }
}

function validateZip(obj) {
    if (obj.value.search("[0-9]{4}[A-Z]{2}") >= 0 && obj.value.length == 6){ 
        zip = true;
        document.getElementById("zip").style.border = '2px solid green';
    }
    else {
        zip = false;
        document.getElementById("zip").style.border = '2px solid red';
    }
}

function validateEmail(obj){
    if (obj.value.match(".+@{1}.+\.{1}.+")) {
        email = true;
        document.getElementById("email").style.border = '2px solid green';
    }
    else {
        email = false;
        document.getElementById("email").style.border = '2px solid red';
    }
}

function validateName(obj) {
    if ((obj.value.search(/^[a-zA-Z ]+$/) >= 0)){
        personName = true;
        document.getElementById("name").style.border = '2px solid green';
    }
    else {
        personName = false;
        document.getElementById("name").style.border = '2px solid red';
    }
}

function validate() {
    if (userid && pwd && cnfm && personName && country && zip && sex && email && language){
        alert("You signed UP!");
    }
}