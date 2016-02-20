(function(){
  var my2DArray = [
    ['H','O','E','L','V','H','D','S','N','C'],
    ['K','C','H','G','O','O','I','J','E','X'],
    ['M','U','U','U','D','D','N','A','W','V'],
    ['F','B','S','U','E','I','N','T','S','F'],
    ['W','E','G','W','H','N','R','S','S','Y'],
    ['M','J','A','I','U','C','J','B','T','R'],
    ['V','L','O','Z','M','T','I','A','A','K'],
    ['K','S','T','O','P','S','I','G','N','V'],
    ['N','L','R','P','J','N','J','M','D','E'],
    ['N','M','J','C','Z','Q','E','T','Q','S']
];
  
function findRowsToCreateWords(arr){
  var words = [];
  var k,i,j;
  for(k = 2;k<=16;k++){
    var word = [];
    for(i = 0; i < arr.length;i++ ){
      for(j = 0; j < arr.length; j++){
        if(i + j == k){
          word.push([arr[i][j],i,j]);
        }
      }
    }
    words.push(word);
  }
  
  for(k = arr.length-2-1;k>=-1*(arr.length-2-1);k--){
    var word1 = [];
    for(i = 0; i < arr.length;i++ ){
      for(j = 0; j < arr.length; j++){
        if(i - j == k){
          word1.push([arr[i][j],i,j]);
        }
      }
    }
    words.push(word1);
  }
  
  for(i = 0;i<arr.length;i++){
    var row = [];
    var column = [];
    //var diagonal = [];
    for(j = 0; j<arr[i].length; j++){
      row.push([arr[i][j],i,j]);
      column.push([arr[j][i],j,i]);
    }
    words.push(row);
    words.push(column);
  }
  //console.log(words);
  return words;
}
  
  function formWords(arr){
    var words = [];
    for(var i = 0; i<arr.length-2;i++){
      for(var j = i + 2; j<arr.length;j++){
        var word='';
        var elementSelector = '#';
        for(var k = i; k<=j;k++){
          word += arr[k][0];
          elementSelector +=  (arr[k][1] + ''+ arr[k][2] +', #');
          
        }
        
      elementSelector = elementSelector.replace(new RegExp(', #$'), '');
        words.push([word,elementSelector]);
        //console.log(elementSelector);
     }
    }
     
    return words;
  }
  
  var rowsToFormWords = findRowsToCreateWords(my2DArray);
  
  //var myArray = rowsToFormWords[0];
  var allWords;
  rowsToFormWords.map(function(value){
    //console.log(value);
    allWords = formWords(value);
    allWords.map(function(val){
      
      if(dictionary.indexOf(val[0].toLowerCase())>-1){
        console.log(val);
        $('.outputWords').append('<p>' + val[0] + '</p>');
        $(val[1]).css('background-color','GREEN');
      }
    });
  });
})();
