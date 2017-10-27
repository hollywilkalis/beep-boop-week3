function translator(phrase) {
  var phraseArray = phrase.split("");
  var newArray = phraseArray.map(translate);
  phrase = newArray.join(" ");
  return phrase;
}

function translate(word) {
  if (true) {

  } else {

  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("output").text(translator($("phrase").val()));
    $(".output-box.show").show();
  });
});
