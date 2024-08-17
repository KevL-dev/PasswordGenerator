document.getElementById("length-slider").addEventListener("input", function () {
  document.getElementById("length-value").innerText = this.value;
});

document
  .getElementById("generate-btn")
  .addEventListener("click", generatePassword);
document
  .getElementById("refresh-btn")
  .addEventListener("click", generatePassword);

function generatePassword() {
  const length = document.getElementById("length-slider").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characterPool = "";
  if (includeUppercase) characterPool += uppercase;
  if (includeLowercase) characterPool += lowercase;
  if (includeNumbers) characterPool += numbers;
  if (includeSymbols) characterPool += symbols;

  if (characterPool === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  document.getElementById("password-display").textContent = password;
}

document.getElementById("copy-btn").addEventListener("click", function () {
  const password = document.getElementById("password-display").textContent;
  if (password === "" || password === "Click 'Generate' to create a password")
    return;

  navigator.clipboard.writeText(password).then(
    function () {
      alert("Password copied to clipboard");
    },
    function () {
      alert("Failed to copy password");
    }
  );
});
