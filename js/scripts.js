//back end logic begins here
function splitArray(numberToConvert) {
  var phraseArray = numberToConvert.split("");
  var arrayConverted = phraseArray.map(convertDigits);
  return arrayConverted;
}

function convertDigits(phraseArray) {
  var newArray = [];
  for (var i = 0; i < phraseArray.length; i++) {
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
  return newArray;
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
