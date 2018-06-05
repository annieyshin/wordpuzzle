// function countup (getto, increments) {
//   var result = [];
//   for (var index = 0; index <=getto; index += increments) {
//       result.push(index);
//
//   }
//   return result;
// }
//
//
// console.log(countup(30, 5));
// console.log(countup(50, 7));

// var languages = ['HTML', 'CSS', 'JavaScript'];
//
// function lovelanguage (input){
//
//   for (var index=0; index<input.length; index++) {
//     alert('I love' + input[index] + '!');
//   }
//
// }
//
//
//
//
// lovelanguage (languages);

$(function() {

  function vowelremove (words) {
    var array = words.split("");
    var vowels = ["a","e","i","o","u","A","E","I","O","U"];
    for (var i=0; i < array.length ;i++ ) {
      for (var j=0; j < vowels.length; j++) {
        if(array[i] === vowels[j]) {
          array[i] = "-";
        }
      }
    }
  return array;
  }

  var sentence = 'Believe you can and you\'re halfway there. Theodore Roosevelt';

  console.log(vowelremove(sentence).join(""));

  $("#inputSentence").show();

  $("#clicked").click(function() {
    $("#inputSentence").hide();
    $("#resultingSentence").show();
    $("#resultingSentence").text(vowelremove(sentence).join(""));
  });


});
