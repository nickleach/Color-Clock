var box = document.querySelector('.box');
var clock = document.querySelector('.clock');

function zero(x){
  if (x < 10){
    x = '0' + x;
  }
  return x;
}
function pM(x){
  if(x > 12){
    x = x - 12;
  }
  return x
}

var currentTime = function(){
  var currentDate = new Date();
  var hours = zero(pM(currentDate.getHours()));
  var minutes = zero(currentDate.getMinutes());
  var seconds = zero(currentDate.getSeconds());
  var color = '#' + hours + minutes + seconds;
  clock.innerHTML= color;
var timer = setInterval(function(){currentTime()}, 1000)
clock.style.backgroundColor= color
}
currentTime()


