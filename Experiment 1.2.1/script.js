const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");

textBox.addEventListener("input", () => {
    let length = textBox.value.length;

    if (length > 300) {
        textBox.value = "";
        counter.textContent = "0 / 300";
        alert("Character limit exceeded! Text cleared.");
    } else {
        counter.textContent = `${length} / 300`;
    }
});
