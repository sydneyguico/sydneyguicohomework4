/*  
    Program Name: Homework 4 JS form
    Author: sydneyguico.github.io 
    Date created: 02/1/2026
    Date Modified: 05/08/2026
    Version: 4.0 
    Purpose: JS Validation functions for Cat Medical Patient Registry Form 
*/

//dynamic date js code
const d = new Date();
    let text = d.toLocaleDateString();
    document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//validating first name
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    // checks if first name field is empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) { //checks if first name matches the pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) { // checks if first name has at least 2 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) { //check if first doesnt have more than 30 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//Validating Middle inital
function validateMname() {
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;
    //makes middle inital uppercase
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    if (!mname.match(namePattern)) { //checks if middle inital matches pattern
        document.getElementById("mname-error").innerHTML = "Middle inital must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

//validating Last name
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if field is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
        return false;
    } else if (lname != "") { //check if last name matches the pattern
        if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { //checks if last name has 2 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) { //check if last name doesnt have more than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
    }
}

// Js code for validating Date of Birth
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be in the future.";
        dob.value="";
        return false;
    } else if(date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML =
        "Date cannot be more than 120 years ago.";
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// Js code for validating SSN
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // Regular Expression for SSN pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Js code for validating Address 1
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter your address on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }  
}

//Js code for validating city
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// Js code for validating Zip Code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML =
        "Zip Code cannot be left blank";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0,5) + "-" + zip.slice(5,9); // removes all digits after 5 numbers
    } else {
        zip = zip.slice(0,5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

//Js code for validating email
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression pattern thing for email

    if (email == "") {
        document.getElementById("email-error").innerHTML =
        "Email Address cannot be empty";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = 
        "Please enter a valid Email Address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// Js code for validating phone number
function validatePhonenum() {
    const phoneInput = document.getElementById("phonenum");
    const phone = phoneInput.value.replace(/\D/g,""); //removes all non-number characters

    if (phone.length != 10) {
        document.getElementById("phonenum-error").innerHTML = 
        "Phone Number cannot be left blank";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phonenum-error").innerHTML = "";
    return true;
}

//js code for username validation
function validateUsername() {
    username = document.getElementById("username").value;

    //converts username to lowercase
    username = username.toLowerCase();
    // display username in lowercase
    document.getElementById("username").value = username;

    if (username.length === 0) {
        document.getElementById("username-error").innerHTML =
        "Username field cannot be empty";
        return false;
    }

    //checks that username doesn't start with a number
    if (!isNaN(username.charAt(0))){
        document.getElementById("username-error").innerHTML =
        "username cannot beign with a number";
        return false;
    }
    //checks if username consists of only letter, number, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML = 
        "Username can only contain letters, numbers, or underscores";
        return false;
        //checks if username does not have 30 characters
    } else if (username.length < 5 ) {
         document.getElementById("username-error").innerHTML =
        "Username cannot be less than 5 characters";
        return false;
    } else if (username.length > 30) {
        document.getElementById("username-error").innerHTML =
        "Username cannot exceed 30 characters";
        return false;
    } else { //if all of the above is correct then username is valid
        document.getElementById("username-error").innerHTML = "";
        return true;
    }
}

//Js code for password validation
function validatePass() {
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("username").value;

    //sets up and initalizes array
    const errorMessage = [];

    //checks for lowercase letters
    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    //checks for uppercase letters
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    //checks for numbers letters
    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }
    //checks for special characters
    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    //checks for username not in password
    if (pass == username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }
    //displays error message if theres errors
    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
}

//js for confirm password validation js code
function confirmPass() {
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("c_pass").value;

    if (pass1 !== pass2){
        document.getElementById("pass2-error").innerHTML =
        "Passwords do not match";
        return false;
    } else {
        document.getElementById("pass2-error").innerHTML =
        "Passwords match";
        return true;
    }
}

// js code for the review button
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//alert box pop-up
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//runs validation for every field from html
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMname()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhonenum()) {
        valid = false;
    }
    if (!validateUsername()) {
        valid = false;
    }
    if (!validatePass()) {
        valid = false;
    }
    if (!confirmPass()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

 //when the cookies expire, this tells you how long they will expire:
 function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

//Retrieves the value of a cookie by its name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"mname", cookieName: "middleInitial"},
    {id:"lname", cookieName: "lastName"},
    {id:"dob", cookieName: "dateOfBirth"},
    {id:"ssn", cookieName: "socialSecurityNumber"},
    {id:"address1", cookieName: "address1"},
    {id:"city", cookieName: "city"},
    {id:"zcode", cookieName: "zipCode"},
    {id:"email", cookieName: "email"},
    {id:"phonenum", cookieName: "phoneNumber"},
    {id:"username", cookieName: "userId"},
];

// Prefill fields and attach save listeners
inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function () {
        if (document.getElementById("remember-me").checked) {  
            setCookie(input.cookieName, inputElement.value, 2); 
        }
    });
});

// Welcome message
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start as a new user.</a>";

    document.getElementById("new-user").addEventListener("click", function (e) {
        e.preventDefault();
        inputs.forEach(function (input) {  
            setCookie(input.cookieName, "", -1);
        });
        localStorage.clear();
        location.reload();
    });
} else {
    document.getElementById("welcome1").innerHTML = "Welcome, new user!";
}

// Remember Me toggle
document.getElementById("remember-me").addEventListener("change", function () {
    if (!this.checked) {
        deleteAllCookies();
        localStorage.clear();
    } else {
        inputs.forEach(function (input) {  
            var inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 2);
            }
        });
    }
});

// On page load: respect Remember Me state
document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("remember-me").checked) {
        deleteAllCookies();
        localStorage.clear();
    }
});
