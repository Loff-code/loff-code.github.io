function validateEmail(email) {
    var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email_regex.test(email);
}
function submitForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name === "" || email === "" || !validateEmail(email)) {
        alert("Please fill in all fields correctly.");
    } else {

    $.ajax({
        type: "POST",
        url: "/database.php",
        data: $("#uploadForm").serialize(),
        success: function(response) {
            alert("Successfully posted");
            // You can handle the response if needed
        },
        error: function(error) {
            console.log(error);
        }
    });}
}