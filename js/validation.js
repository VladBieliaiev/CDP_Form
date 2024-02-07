// references to the form fields
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password1");
const password2 = document.getElementById("password2");

// regular expression for email validation

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function setErrorFor(element, message) {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector("#error");

  errorDisplay.innerText = message;
  errorDisplay.classList.remove("d-none");
}

function setSuccessFor(element) {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector("#error");

  errorDisplay.classList.add("d-none");
}

function validateInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    setErrorFor(email, "Please enter a valid email address");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "" || passwordValue.length < 6) {
    setErrorFor(password, "Please enter a password");
  } else {
    setSuccessFor(password);
  }

  if (form.classList.contains("signUp")) {
    if (password2Value !== passwordValue) {
      setErrorFor(password2, "Passwords do not match");
    } else {
      setSuccessFor(password2);
    }
  }
}
