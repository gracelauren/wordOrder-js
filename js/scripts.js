var wordOrder = function(userString) {
  var newArray = userString.toLowerCase().split(" ");
  var counter = {};


  newArray.forEach(function(userWord) {
    var userWord = userWord;
    if (/[,.!?""]/.test(userWord)) {
      userWord = userWord.replace(/[,.!?""]/g,"");
    }

    if (counter[userWord] === undefined) {
      counter[userWord] = 1;
    } else {
      counter[userWord] += 1;
    }


  });
  for( var objName in counter) {
    var resultArray = Object.keys(counter).sort(function(a, b) {return counter[b]-counter[a]});

  }
  return resultArray;
};
