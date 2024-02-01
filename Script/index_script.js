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
        '<img style="border-radius: 20px" src="https://media.makeameme.org/created/youre-gay-5b804a.jpg" alt="You are gay" onload="scrollToResult()"/>';
    }
  }
}

function scrollToResult() {
  var displayArea = document.getElementById("displayArea");
  displayArea.scrollIntoView();
}

function pressEvent(event) {
  if (event.key == "Enter") {
    document
      .getElementById("sexualityForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        displayText();
        var displayArea = document.getElementById("displayArea");
        displayArea.scrollIntoView();
        return;
      });
  }
}

document
  .getElementById("sexualityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    displayText();
    var displayArea = document.getElementById("displayArea");
    displayArea.scrollIntoView();
    return;
  });
