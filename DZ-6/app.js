 var plus = document.querySelector('.plus');
  var minus = document.querySelector('.minus');
  var number = document.querySelector('.number');
  function counterFunction() {
    var numberValue = 0;
    minus.addEventListener('click', function (){
      numberValue--;
      number.value = numberValue;
    });
  plus.addEventListener('click', function() {
    numberValue++;
    number.value = numberValue;
  });
}
counterFunction();


