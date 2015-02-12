var wordOrder = function(userString) {
  var newArray = userString.toLowerCase().split(" ");
  var counter = {};
  var resultArray = Array();


  newArray.forEach(function(userWord) {
    var userWord = userWord;
    if (/[,.!?""]/.test(userWord)) {
      userWord = userWord.replace(/[,.!?""]/g,"");
    }

    if (counter[userWord] !== 1) {
      counter[userWord] = 1;
    } else {
      counter[userWord] += 1;
    };


  });
  for( var objName in counter) {
    resultArray.push(objName);
    
  }
  debugger;
  return resultArray;
};
