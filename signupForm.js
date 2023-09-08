const form = document.getElementById("form");
const firstname = document.getElementById("Fname");
const lastname = document.getElementById("Lname");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const formItem = document.getElementById("form-item");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

function setError(input, message) {
    const formfields =  input.parentElement;
    const small = formfields.querySelector("small");
    formfields.className = "formfields error";
	small.innerText = message;
};

function setSuccess(input) {
    const formfields =  input.parentElement;
    formfields.className = "formfields success";
};

/* Regular Expression for a valid email address */
function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validateInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();  
    
    if(firstnameValue === "") {
        setError(firstname, "First Name cannot be empty")
    } else {
        setSuccess(firstname); 
    }

    if(lastnameValue === "") {
        setError(lastname, "Last Name cannot be empty")
    } else {
        setSuccess(lastname); 
    }

    if(emailValue === "") {
        setError(email, "Email Address cannot be empty")
    } else if (!isValidEmail(emailValue)) {
         setError(email, "Looks like this is not an email")
    } else {
         setSuccess(email);
    }

    if(passwordValue === "") {
        setError(password, "Password cannot be empty")
    } else {
        setSuccess(password); 
    }
};