let captchachecked = false;
function beforeSubmit(event) {
  if (captchachecked) {
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log("inputDate.value", inputDate.value); //string --> date(en_IN)

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
    outputDate.value = formattedDate;
  } else {
    alert("please check the recaptcha box to submit the lead");
    event.preventDefault();
  }
}
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchachecked = true;
}
