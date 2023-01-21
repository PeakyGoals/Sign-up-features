// Initiating 
userid = false;
useridValue = "";
pwd = false;
pwdValue = "";
cnfm = false;
personName = false;
nameValue = "";
country = false;
countryValue = "";
zip = false;
zipValue = "";
email = false;
emailValue = "";
sex = false;
sexValue = "";
language = false;
languageValue = "";
addressValue = "";
aboutValue = "";

function requireSex(obj) {
    if (obj.value.length > 0) {
        sex = true;
        document.getElementById("sex").style.border = '2px solid green';
        sexValue = obj.value;
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
        countryValue = obj.value;
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
        languageValue = obj.value;
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
        userid = true;
        document.getElementById("userid").style.border = '2px solid green';
        document.getElementById("tuserid").innerHTML = 'Looks good!';
        useridValue = obj.value;
    } 
    else {
        userid = false;
        document.getElementById("userid").style.border = '2px solid red';
        document.getElementById("tuserid").innerHTML = 'UserID must start with an Uppercase and end with a number or special character';
    }
}

function validatePwd(obj){  
    if (obj.value.length >= 12 && obj.value.search(/[a-z]/) >= 0 && obj.value.search(/[A-Z]/) >= 0 
    && obj.value.search(/[0-9]/) >= 0 && obj.value.search(/\W/) >= 0) {
        document.getElementById("pwd").style.border = '3px solid orange';
        if(obj.value.length >= 14){
            document.getElementById("pwd").style.border = '2px solid green';
        }
        pwd = true;
        pwdValue = obj.value;
        document.getElementById("tpwd").innerHTML = 'Looks good!';
    }
    else {
        pwd = false;
        document.getElementById("pwd").style.border = '2px solid red';
        document.getElementById("tpwd").innerHTML = 'Password must include at least one Uppercase, lowercase, number, and symbol';
    }
}

function confirmPwd(obj) {
    if (obj.value == pwdValue && obj.value.length > 0) {
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
        document.getElementById("tzip").innerHTML = 'Looks good!';
        zipValue = obj.value;
    }
    else {
        zip = false;
        document.getElementById("zip").style.border = '2px solid red';
        document.getElementById("tzip").innerHTML = 'Format for the netherlands: four number, two uppercase letters';
    }
}

function validateEmail(obj){
    if (obj.value.match(".+@{1}.+\.{1}.+")) {
        email = true;
        document.getElementById("email").style.border = '2px solid green';
        document.getElementById("temail").innerHTML = 'Looks good!';
        emailValue = obj.value;
    }
    else {
        email = false;
        document.getElementById("email").style.border = '2px solid red';
        document.getElementById("temail").innerHTML = 'Please input a valid email address';
    }
}

function validateName(obj) {
    if ((obj.value.search(/^[a-zA-Z ]+$/) >= 0)){
        personName = true;
        document.getElementById("name").style.border = '2px solid green';
        document.getElementById("tname").innerHTML = 'Looks good!';
        nameValue = obj.value;
    }
    else {
        personName = false;
        document.getElementById("name").style.border = '2px solid red';
        document.getElementById("tname").innerHTML = 'Only include letters and spaces';
    }
}

function storeAddress(obj){
    addressValue = obj.value;
}

function storeAbout(obj){
    aboutValue = obj.value;
}

function validate() {
    if (userid && pwd && cnfm && personName && country && zip && sex && email && language){
        alert("You signed UP!\n You input the following:\n  - "+useridValue+"\n  - "+pwd+"\n  - "+nameValue+"\n  - "+addressValue+
        "\n  - "+countryValue+"\n  - "+ zipValue+"\n  - "+emailValue+"\n  - "+sexValue+"\n  - "+languageValue+"\n  - "+aboutValue);
    }
    else {
        requireSex(document.getElementById("sex"));
        requireCountry(document.getElementById("country"));
        requireLang(document.getElementById("lang"));
        validateUserID(document.getElementById("userid"));
        validatePwd(document.getElementById("pwd"));
        confirmPwd(document.getElementById("cpwd"));
        validateEmail(document.getElementById("email"));
        validateZip(document.getElementById("zip"));
        validateName(document.getElementById("name"));
    }
}