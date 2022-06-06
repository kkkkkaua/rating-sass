let selectedOption = 0;

function validate() {
  const button = document.querySelector("#submit-button");
}

function start(number) {
  const options = document.querySelectorAll(".options button");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      console.log(parseInt(option.textContent));
    });
  });
}

start();
