function displayLink() {
  var inputText = document.getElementById("linkInput").value;
  var linkOutput = document.getElementById("linkOutput");
  var displayArea = document.getElementById("displayArea");
  if (inputText == "") {
    displayArea.innerText = "Please enter a Link.";
    return;
  }
  var id = inputText.match(/\/d\/([^\/]+)/)[1];
  linkOutput.value = "https://drive.google.com/uc?export=download&id=" + id;
  copyToClipboard();
}
function copyToClipboard() {
  var linkOutput = document.getElementById("linkOutput");
  linkOutput.select();
  linkOutput.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand("copy");

  var displayArea = document.getElementById("displayArea");
  if (linkOutput.value == "") {
    f;
    displayArea.innerText = "Nothing to Copy";
    return;
  }
  displayArea.innerText = "Copied to clipboard!";
}

function pressEvent(event) {
  if (event.key == "Enter") {
    displayLink();
    console.log("Enter key pressed");
  }
}
