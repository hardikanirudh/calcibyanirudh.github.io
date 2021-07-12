function getHistory(){

  return document.getElementById("history_value").innerText;
}

function printHistory(num){
  document.getElementById("history_value").innerText=num;
}

function getOutput(){
  return document.getElementById("output_value").innerText;
}

// function printOutput(num){
//   document.getElementById("output_value").innerText=num;
// }
function printOutput(num){
  // if(num==""){
  //   document.getElementById("output_value").innerText=num;
  // }

  document.getElementById("output_value").innerText=num.innertext;
}

// function getFormattedNumber(){
//   var n = Number(num);
//   var value = n.tol
//
//   return value;
// }


var operator = document.getElementsByClassName("operator")
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click',function(){

  });
}

var number = document.getElementsByClassName("number")
for (var i = 0; i < operator.length; i++) {
  number[i].addEventListener('click',function(){
    if(output!=NaN){
      printOutput(output);
      output=output+this.id;
      printOutput(output);
    }
  });
}
