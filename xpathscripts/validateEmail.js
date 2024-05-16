let formSubmitted = false;

function validateSubmittedMail() {
  if (!formSubmitted) {
    //disables the submit button for duration of processEmail
    formSubmitted = true;
    document.querySelector("#sendMail").disabled = true;

    // Perform form validation and submission logic
    processEmail();
  }
}

function processEmail() {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(message)) {
    $.ajax({
      url: "xpathscripts/submited.php",
      method: "POST",
      dataType: "json",
      data: {
        action: "send_email",
        name: name,
        email: email,
        subject: name,
        body: message,
      },
      success: function (response) {
        handleResponse(response);
      },
      error: function (xhr, status, error) {
        console.log(xhr.responseText);
      },
    });
  } else {
    $(".sent-notification").text("Please fill in all the fields.");
  }
}

//Checks if any field is empty and gives the user visual feedback.
function isNotEmpty() {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  var isValid = true;

  if (name === "") {
    $("#name").css("border", "1px solid red");
    isValid = false;
    unlockSubmittedForm();
  } else {
    $("#name").css("border", "");
  }

  if (email === "") {
    $("#email").css("border", "1px solid red");
    isValid = false;
    unlockSubmittedForm();
  } else {
    $("#email").css("border", "");
  }

  if (message === "") {
    $("#message").css("border", "1px solid red");
    isValid = false;
    unlockSubmittedForm();
  } else {
    $("#message").css("border", "");
  }

  return isValid;
}

function handleResponse(response) {
  try {
    if (typeof response === "object") {
      // If the response is already an object (parsed JSON), use it directly
      processResponse(response);
    } else {
      // If the response is a string, parse it as JSON
      const jsonResponse = JSON.parse(response);
      processResponse(jsonResponse);
    }
  } catch (error) {
    console.error("Error parsing JSON response: " + error);
    $(".sent-notification").text(
      "An error occurred while processing the response."
    );
  }
  unlockSubmittedForm();
}

function processResponse(jsonResponse) {
  if (jsonResponse.response === "success") {
    $("#contactUsForm")[0].reset();
    $(".sent-notification").text("Thanks for getting in touch!");
  } else if (jsonResponse.response === "Invalid") {
    $("#email").val("");
    email = "";
    isNotEmpty(email);
    $(".sent-notification").text("Entered email was invalid.");
  } else {
    $(".sent-notification").text(
      "Unexpected response from the server. Please try again later."
    );
  }
}

function unlockSubmittedForm() {
  formSubmitted = false;
  document.querySelector("#sendMail").disabled = false;
}
