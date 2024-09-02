const input = document.getElementById("input");
const output = document.getElementById("output");
const inputSelect = document.getElementById("chose-input");
const outputSelect = document.getElementById("chose-output");

function doConversion() {
  let inputValue = input.value.trim(); 
  let inputType = inputSelect.value;
  let decimalInput;
  let outputType = outputSelect.value;
  let result;

  // Check if input field is empty
  if (inputValue === "") {
    output.value = ""; 
    return; 
  }

  // Convert input value into decimal type

  switch (inputType) {
    case "Octal":
      decimalInput = parseInt(inputValue, 8);
      break;
    case "Binary":
      decimalInput = parseInt(inputValue, 2);
      break;
    case "Hexadecimal":
      decimalInput = parseInt(inputValue, 16);
      break;
    default:
      decimalInput = parseInt(inputValue);
  }


    // Convert decimal to desired output type

    switch (outputType) {
      case "Binary":
        result = decimalInput.toString(2);
        break;
      case "Octal":
        result = decimalInput.toString(8);
        break;
      case "Hexadecimal":
        result = decimalInput.toString(16);
        break;
      default:
        result = decimalInput; 
    }
  

  output.value = result;
}

// Attach event listeners


input.addEventListener("input", doConversion);
inputSelect.addEventListener("change", doConversion);
outputSelect.addEventListener("change", doConversion);
