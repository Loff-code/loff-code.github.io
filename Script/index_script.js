function displayText() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var displayArea = document.getElementById("displayArea");
  var fullName = firstName + " " + lastName;

  var specialNames = ["søren", "soren", "christensen", "peter", "loff"];

  if (firstName != "" || lastName != "") {
    if (specialNames.some((name) => fullName.toLowerCase().includes(name))) {
      displayArea.innerHTML =
        "<p>" +
        (firstName && lastName ? fullName : firstName || lastName) +
        ", you're straight af!</p>";
    } else {
      displayArea.innerHTML =
        "<p>" +
        (firstName && lastName ? fullName : firstName || lastName) +
        ", you're gay!</p><br>" +
        '<img class="coffee" src="https://media.makeameme.org/created/youre-gay-5b804a.jpg" alt="Pic of Coffee" />';
    }
  }
}

function pressEvent(event) {
  if (event.key == "Enter") {
    displayText();
  }
}
