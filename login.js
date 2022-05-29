function validate() {
  var kunci = document.forms["myForm"]["password"].value.toLowerCase();

  if (kunci === "isan ganteng") {
    return true;
  } else {
    return false;
  }
}
