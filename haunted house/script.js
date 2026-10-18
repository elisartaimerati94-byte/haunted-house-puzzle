
const lockForm = document.getElementById("lock-form");
const codeInput = document.getElementById("code");
const feedback = document.getElementById("feedback");
const unlockButton = document.getElementById("unlock-button");

const secretCode = "7294";

lockForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredCode = codeInput.value.trim();

  if (enteredCode === secretCode) {
    feedback.textContent =
      "THE LOCK CLICKS OPEN... A hidden passage appears. YOU ESCAPED!";

    feedback.style.color = "#c5dca5";

    codeInput.disabled = true;
    unlockButton.disabled = true;
    unlockButton.textContent = "DOOR UNLOCKED";

  } else {
    feedback.textContent =
      "The mirror trembles. The sequence is incorrect. Study the clues again.";

    feedback.style.color = "#e29a8c";

    codeInput.value = "";
    codeInput.focus();
  }
});
