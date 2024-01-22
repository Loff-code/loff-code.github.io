function convertUnits() {
  const input = document.getElementById("input").value;
  const unitType = document.getElementById("unitType").value;
  const convertedValue = document.getElementById("convertedValue");

  if (unitType === "imperialToMetric") {
    const metricValue = input * 2.54;
    convertedValue.innerHTML = `${input} inches is equal to ${metricValue} centimeters.`;
  } else if (unitType === "metricToImperial") {
    const imperialValue = input / 2.54;
    convertedValue.innerHTML = `${input} centimeters is equal to ${imperialValue} inches.`;
  }
}

function pressEvent(event) {
  if (event.key == "Enter") {
    console.log("Enter key pressed");
    convertUnits();
  }
}
