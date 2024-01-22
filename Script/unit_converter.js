function convert() {
  var metricInput = document.getElementById("metricInput").value;
  var imperialInput = document.getElementById("imperialInput").value;
  var km = 1 * 1000;
  var meter = 1;
  var dm = m / 10;
  var cm = dm / 10;
  var mm = cm / 10;
  var miles = km / 1.609344;
  var yards = m / 0.9144;
  var feet = yd / 3;
  var inches = ft / 12;
}

function pressEvent(event) {
  if (event.key == "Enter") {
    console.log("Enter key pressed");
  }
}
