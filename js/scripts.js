// Select the button
const toggleButton = document.querySelector(".btn-toggle");

// Listen for a click on the button
toggleButton.addEventListener("click", function () {
  document.querySelector('html').toggleAttribute('data-dark-mode')
});