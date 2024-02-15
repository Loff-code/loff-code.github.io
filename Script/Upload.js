function uploadFile() {
    var formData = new FormData(document.getElementById("uploadForm"));

    // Use AJAX to submit the form without redirecting
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "upload.php", true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // Display the response from the server
        document.getElementById("uploadStatus").innerHTML = xhr.responseText;
        alert( xhr.responseText);
      }
    };

    xhr.send(formData);
  }