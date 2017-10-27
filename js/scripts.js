//back end logic begins here
function splitArray(phrase, numberToConvert) {
  var arrayConverted = numberToConvert.map(convertDigits);
  phrase = newArray.join(" ");
  return phrase;
}

function convertDigits(numberToConvert) {
  var digitArray = numberToConvert.split("");
  var newArray = [];

  for (var i = 0; i < digitArray.length; i++) {
    if (i === 1) {
      newArray.push("Boop! ");
    }
    else if (i === 0) {
      newArray.push("Beep! ");
    }
    else if (i % 3 === 0) {
      newArray.push("I'm sorry, Dave, I can't do that. ");
    }
    else {
      newArray.push(i);
    }
  }
};



//front end logic begins here
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var numberToConvert = parseInt($("#phrase").val());
    $("#output").text(splitArray($("#phrase").val()));
    $(".output-box").show();
  }); //close form submit
}); //close ready function
