// Initiating all variables for input text and if validated or not boolean
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

// function per input that validates it
function requireSex(obj) {
    if (obj.value.length > 0) {
        sex = true;
        document.getElementById("sex").style.border = '2px solid green'; // make green
        sexValue = obj.value;
    }
    else {
        sex = false;
        document.getElementById("sex").style.border = '2px solid red'; // make red
    }
}
// country validation
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

// validate language
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

// validate userid
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
        document.getElementById("tuserid").innerHTML = 'UserID must be 5-12 chars long and start with an Uppercase and end with a number or special char';
    }
}

// validate password
function validatePwd(obj){
    let low = false;
    let high = false;
    let num = false;
    let special = false;
    for(let i = 0; i < obj.value.length; i++){
        if (obj.value.charAt(i) >= 'A' && obj.value.charAt(i) <= 'Z'){
            high = true;
        } else if (obj.value.charAt(i) >= 'a' && obj.value.charAt(i) <= 'z'){
            low = true;
        } else if (obj.value.charAt(i) >= '0' && obj.value.charAt(i) <= '9'){
            num = true;
        } else {
            special = true;
        }
    }

    if (obj.value.length >= 12 && high && low && num && special) {
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
        document.getElementById("tpwd").innerHTML = 'Password should be longer than 1 chars (14 or more preferably), and must include at least one Uppercase, lowercase, number, and symbol';
    }
}

// Confirms password
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

// validates zip
function validateZip(obj) {
    let count = 0;
    for(let i = 0; i< obj.value.length;i++){
        if (i>3 && i<6){
            if ((obj.value.charAt(i) >= 'a' && obj.value.charAt(i) <= 'z') 
            || (obj.value.charAt(i) >= 'A' && obj.value.charAt(i) <= 'Z')){
                count++;
            }
        } else {
            if (obj.value.charAt(i) >= '0' && obj.value.charAt(i) <= '9'){
                count++;
            }
        }
    }
    if (count == 6 && obj.value.length == 6){ 
        zip = true;
        document.getElementById("zip").style.border = '2px solid green';
        document.getElementById("tzip").innerHTML = 'Looks good!';
        zipValue = obj.value;
    }
    else {
        zip = false;
        document.getElementById("zip").style.border = '2px solid red';
        document.getElementById("tzip").innerHTML = 'Format for the netherlands: four numbers, two letters';
    }
}

// validate email
function validateEmail(obj){
    let andperc = 0;
    let point = false;

    for (let i = 0; i< obj.value.length; i++){
        if (i>0 && obj.value.charAt(i) == '@'){
            andperc = i;
        }
        if (andperc != i && obj.value.charAt(i) == '.' && i > (andperc+1) && i != obj.value.length-1){
            point = true;
        }

    }

    if (andperc!= 0 && point) {
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

// validate name
function validateName(obj) {
    personName = true;
    for (let i = 0; i< obj.value.length ; i++){
        if (!((obj.value.charAt(i) >= 'a' && obj.value.charAt(i) <= 'z') 
            || (obj.value.charAt(i) >= 'A' && obj.value.charAt(i) <= 'Z' 
            || obj.value.charAt(i) == ' '))){
                personName = false;
            }
    }

    if (personName && obj.value.length > 0){
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

// stores address
function storeAddress(obj){
    addressValue = obj.value;
}

// stores about info
function storeAbout(obj){
    aboutValue = obj.value;
}

// main validation function which checks if all is validated, if yes then alert with values
function validate() {
    if (userid && pwd && cnfm && personName && country && zip && sex && email && language){
        let el = document.getElementById("options");
        let selected = el.value;
        alert("You signed UP!\n You input the following:\n  - "+useridValue+"\n  - "+pwdValue+"\n  - "+nameValue+"\n  - "+addressValue+
        "\n  - "+countryValue+"\n  - "+ zipValue+"\n  - "+emailValue+"\n  - "+sexValue+"\n  - "+languageValue+"\n  - "+aboutValue+
        "\n  - "+selected);
    }
    else {
        // else, highlight all that are wrong by re-validating them
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