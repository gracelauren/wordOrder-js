var wordOrder = function(userString) {
  var newArray = userString.toLowerCase().split(" ");
  var counter = {};


  newArray.forEach(function(userWord) {
    // if (/[,.!?""]/.test(userWord)) {     possibly needed for efficiency
      userWord = userWord.replace(/[,.!?""]/g,"");
    // }

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

$(document).ready(function() {
  $('#styleMe input[type="text"]').blur(function(){
    if($(this).val().length > 0){
      $(this).addClass('white');
    } else {
      $(this).removeClass('white');
    }
  });
  $("form#orderMe").submit(function(event) {
    var phrase = $("input#phrase").val();
    var result = wordOrder(phrase);
    result.forEach(function(eachWord) {
      $("ul.orderList").append("<li>"+eachWord+"</li>");
    });

    $(".orderList").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
