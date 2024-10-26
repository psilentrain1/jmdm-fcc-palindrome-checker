const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const regex = /[^a-z0-9]/g;

let checkForPalindrome = () => {
  let cleanText = textInput.value.toLowerCase().replace(regex, "");
  if (cleanText === "") {
    result.innerText = "Please input a value";
    alert("Please input a value");
  } else if (cleanText === cleanText.split("").reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
};

checkBtn.addEventListener("click", checkForPalindrome);
