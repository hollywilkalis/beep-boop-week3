//back end logic begins here
function splittingArray(phrase) {
  var phrase = $("#phrase").val();
  var phraseArray = phrase.split("");
  var arrayConverted = convertDigit(phraseArray);
  var completeResponse = arrayConverted.join(" - ");
  return completeResponse;
};

function convertDigit(phraseArray) {
  var newArray = [];
  for (var i = 0; i < phraseArray.length; i++) {
    phraseArray[i] = parseInt(phraseArray[i]);
    if ((phraseArray[i]) === 1) {
      newArray.push("Boop!");
    }
    else if ((phraseArray[i]) === 0) {
      newArray.push("Beep!");
    }
    else if ((phraseArray[i]) % 3 === 0) {
      newArray.push("I'm sorry, Dave, I can't do that.");
    }
    else {
      newArray.push(phraseArray[i]);
    }
  }
  return newArray;
};

//front end logic begins here
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    debugger
    var phrase = $("#phrase").val();
    $("#output").text(splittingArray($("#completeResponse").val()));
    $(".output-box").show().fadeIn("slow");
    $('#formid')[0].reset();
  }); //close form submit
}); //close ready function
