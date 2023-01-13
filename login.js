function validate() {
  var kunci = document.forms["myForm"]["password"].value.toLowerCase();

  if (kunci === "ancha ilham") {
    return true;
  } else {
    return false;
  }
}
