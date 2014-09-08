// converts numbers between 0 and 255

var decimalHexBinary = (function(number1, number2){

  var row, firstCharacter, secondCharacter, tempNumber, biNum, decimalHalf;
  var bi = [];

  var DECtoBI = {
    0: '0',
    1: '1'
  }

  var DECtoHEX = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
    '': ''
  }

  var binary = function(decimal){
    if(decimal === 0){
      return '   0';
    }else if(decimal === 1){
      bi.unshift(1);
      biNum = bi;
      bi = [];
      return '   ' + biNum.join('');
    }else{
      if(decimal % 2 === 0){
        bi.unshift(0);
      }else{
        bi.unshift(1);
      }
      decimalHalf = Math.floor(decimal / 2);
      return binary(decimalHalf);
    }
  };

  var hex = function(decimal){
    decimal > 15 ? firstCharacter = Math.floor(decimal/16) : firstCharacter = '';
    secondCharacter = decimal % 16;
    return '   ' + DECtoHEX[firstCharacter] + DECtoHEX[secondCharacter];
  };

  var printChart = function(number1, number2){
      number2 = number2 || number1;
      console.log('decimal   hex   binary');
    for(var num = number1; num <= number2; num++){
      row = '    ';
      row += num;
      row += hex(num);
      row += binary(num);
      console.log(row);
    };
  };

  return {
    printChart: printChart
  };

})();

decimalHexBinary.printChart(0, 225);
