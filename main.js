var box = document.querySelector('.box');
var clock = document.querySelector('.clock');
var colorButton = document.querySelector('.color_change')
var normal = document.querySelector('.normal')
var buttons = document.querySelector('button')
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
var currentTime;
var colorChange;
function currentTime (){
  window.clearTimeout(colorChange)
  var currentDate = new Date();
  var hours = zero(pM(currentDate.getHours()));
  var minutes = zero(currentDate.getMinutes());
  var seconds = zero(currentDate.getSeconds());
  var nowTime = hours + ':' + minutes + ':'+ seconds;
  clock.innerHTML= nowTime;
var timer = setTimeout(function(){currentTime()}, 1000)
box.style.backgroundColor=  nowTime;

}
// currentTime();
function colorChange (){
  window.clearTimeout(currentTime)
  var currentDate = new Date();
  var hours = zero(pM(currentDate.getHours()));
  var minutes = zero(currentDate.getMinutes());
  var seconds = zero(currentDate.getSeconds());
  var color = '#' + hours + minutes + seconds;
  clock.innerHTML= color;
var timer = setTimeout(function(){colorChange()}, 1000)
box.style.backgroundColor= color
}
colorButton.addEventListener('click', colorChange)
normal.addEventListener('click', currentTime)

// var timeE = setTimeout(function())

// switch(){
//   case (colorButton.addEventListener("click")):
//     colorChange();
//   break;
//   case (normal.addEventListener("click")):
//     currentTime();
//   break;
//   default:
//      currentTime();
// }
// colorChange();




