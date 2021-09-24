$(document).ready(function () {
  $(".sucess").hide();
  $(".fail").hide();
  $(".portofolio").click(function () {
    $(".tog").toggle(2000);
    $(".togOut").toggle(2000);
  });
});

function bookingForm() {
  //  function bookingFormFunction(){

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name !== "" && email !== "" && message !== "") {
    $(".sucess").fadeIn().delay(1500).fadeOut(1000);
    $(".sucess").text(
      "Thank you " +
        name +
        " we have received your Booking Request. Check your email to confirm your Booking and proceed with payment."
    );
  } else if (name == "" || email == "" || message == "") {
    $(".fail").fadeIn().delay(1500).fadeOut(1000);
    $(".fail").text(
      "Fill in your details to proceed with Booking and dont forget to drop a comment,This will help us serve  you BETTER"
    );
  }
}

document.getElementById("output").innerHTML = bookingFormFunction();

// };
