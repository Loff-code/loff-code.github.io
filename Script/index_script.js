function displayText() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var displayArea = document.getElementById("displayArea");

  if (
    firstName.toLowerCase().includes("søren") ||
    firstName.toLowerCase().includes("soren")
  ) {
    displayArea.innerHTML =
      "<p>" + firstName + ", you're straight af!" + "</p>";
    return;
  }

  if (firstName != "" && lastName != "") {
    displayArea.innerHTML =
      "<p>" +
      firstName +
      " " +
      lastName +
      ", you're gay!</p><br>" +
      '<img class="coffee" src="https://media.makeameme.org/created/youre-gay-5b804a.jpg" alt="Pic of Coffee" />';
  }
  if (firstName != "" && lastName == "") {
    displayArea.innerHTML =
      "<p>" +
      firstName +
      ", you're gay!</p><br>" +
      '<img class="coffee" src="https://media.makeameme.org/created/youre-gay-5b804a.jpg" alt="Pic of Coffee" />';
  }
  if (firstName == "" && lastName != "") {
    displayArea.innerHTML =
      "<p>" +
      lastName +
      ", you're gay!</p><br>" +
      '<img class="coffee" src="https://media.makeameme.org/created/youre-gay-5b804a.jpg" alt="Pic of Coffee" />';
  }
}

function pressEvent(event) {
  if (event.key == "Enter") {
    displayText();
  }
}
