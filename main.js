document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("portfolio-link");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(function () {
      window.location.href = button.href;
    }, 500);
  });

  const text = "Halo, saya Ranovrio.";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 100);
    }
  }

  typeText();
});
