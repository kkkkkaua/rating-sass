let selectedOption = 0;

function validate(event) {
  if (selectedOption === 0) {
    event.preventDefault();
    alert("Please, choose a possible option.");
    return;
  }
}

function start() {
  const options = document.querySelectorAll(".options button");
  const button = document.querySelector("#submit-button");
  button.addEventListener("click", validate);

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedOption = parseInt(option.textContent);
    });
  });
}

start();
