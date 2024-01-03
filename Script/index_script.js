function displayText() {
    var inputText = document.getElementById('textInput').value;
    var displayArea = document.getElementById('displayArea');
    if (inputText == "Søren"|| inputText == "søren" || inputText == "Soren" || inputText == "soren") {
        displayArea.innerHTML = "<p>" + inputText+ ", you're straight af!" + "</p>";
        return;
    }
    displayArea.innerHTML = "<p>" + inputText + ", you're gay!" + "</p>";


}
function pressEvent(event){
    if(event.key == "Enter"){
        displayText();
    }
}
