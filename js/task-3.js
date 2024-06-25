const log = document.getElementById("name-output");
const input = document.getElementById("name-input");

function checkInputOutput() {
    const textInput = input.value.trim();
    if (textInput === "") {
        log.textContent = 'Anonymous';
        } 
        else {
        log.textContent = textInput;
    }
}


input.addEventListener("keypress", checkInputOutput);

