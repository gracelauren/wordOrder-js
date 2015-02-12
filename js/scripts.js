var wordOrder = function(userString) {
  var newArray = userString.toLowerCase().split(" ");
  var resultArray = Array();


  newArray.forEach(function(userWord) {
    var punctuation = "";
    if (/[,.!?""]/.test(userWord)) {
      userWord = userWord.replace(/[,.!?""]/g,"");
    }
    resultArray.push(userWord);
  });
  return resultArray;
};
