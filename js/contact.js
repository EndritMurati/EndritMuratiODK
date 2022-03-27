const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com", 
    Username : "endritmurati150@gmail.com",
    Password : "ditinana",
    To : 'ditimurati11@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

function onclickbtr() { 
  alert("Your order has been sent successfully!!")
}
