function validate(values) {
  let errors = {};
  if (!values.username) {
    errors.username = "Name cannot be empty";
  }
  let checkCardNo = validateCard(values.card);
  if (!checkCardNo) {
    errors.card = "Enter Valid Card No";
  }
  let checkCVV = validateCVV(values.card, values.cvv);
  if (!checkCVV) {
    errors.cvv = "Enter Valid CVV";
  }
  if(!values.month || !values.year || !validateDate(values.month,values.year)){
    errors.date = "Enter valid Date"
  }
  return errors;
}

var acceptedCreditCards = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  amex: /^3[47][0-9]{13}$/,
};

function validateCard(cardNo) {
  var cardNo = cardNo.replace(/\D/g, "");
  var sum = 0;
  var shouldDouble = false;
  for (var i = cardNo.length - 1; i >= 0; i--) {
    var digit = parseInt(cardNo.charAt(i));

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  var valid = !(sum % 10);
  var accepted = false;

  Object.keys(acceptedCreditCards).forEach(function (key) {
    var regex = acceptedCreditCards[key];
    if (regex.test(cardNo)) {
      accepted = true;
    }
  });
  //   console.log("valid:" + valid)
  //   console.log("accepted:" + accepted)
  return valid && accepted;
}

function validateCVV(creditCard, cvv) {
  var creditCard = creditCard.replace(/\D/g, "");
  var cvv = cvv.replace(/\D/g, "");
  if (acceptedCreditCards.amex.test(creditCard)) {
    if (/^\d{4}$/.test(cvv)) return true;
  } else if (/^\d{3}$/.test(cvv)) {
    return true;
  }
  return false;
}

function validateDate(month,year){
  year = "20"+year;
  const expiryDate = new Date(year + '-' + month + '-01');
  if (expiryDate < new Date()) {
      return false;
  } else {
    return true;
  }
}
export default validate;
