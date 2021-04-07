function validatePassword(password) {
  var minNumberofChars = 6;
  var maxNumberofChars = 16;
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (
    password.length < minNumberofChars ||
    password.length > maxNumberofChars
  ) {
    return false;
  }
  if (!regularExpression.test(password)) {
    return false;
  }
  return true;
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
}

export { validatePassword, validateEmail }
