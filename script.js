document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("formMessage");

  message.textContent = `Thanks, ${name}! This demo form is working. Connect it to a backend or email service later.`;

  this.reset();
});
