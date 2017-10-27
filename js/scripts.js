//back end logic begins here
function splittingArray(phrase) {
  var phrase = $("#phrase").val();
  var phraseArray = phrase.split();
  var arrayConverted = phraseArray.map(convertDigits);
  var completePhrase = arrayConverted.join(" ");
  return completePhrase;
}

function convertDigits(phraseArray) {
  for (var i = 0; i < phraseArray.length; i++) {
    var newArray = [];
    phraseArray[i] = parseInt(phraseArray[i]);
    if ((phraseArray[0]) === 1) {
      newArray.push("Boop! ");
    }
    else if ((phraseArray[0]) === 0) {
      newArray.push("Beep! ");
    }
    else if ((phraseArray[0]) % 3 === 0) {
      newArray.push("I'm sorry, Dave, I can't do that. ");
    }
    else {
      newArray.push(phraseArray[0]);
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
    $("#output").text(splittingArray($("#completePhrase").val()));
    $(".output-box").show();
    $('#formid')[0].reset();
  }); //close form submit
}); //close ready function
