function signUp() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  alert("Thank you " + name + "! You'll receive the newsletter soon. 😊");
}

let button = document.querySelector("button");
button.addEventListener("click", signUp);
