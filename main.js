var box = document.querySelector('.box');
var clock = document.querySelector('.clock');
var colorButton = document.querySelector('.color_change')
var normal = document.querySelector('.normal')
var army = document.querySelector('.army')
var buttons = document.querySelector('button')
var greeting = document.querySelector('.greeting')
var body = document.querySelector('body')
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

var timer = function(x) {
  setTimeout(x)}
var timerOne = function(x) {
  setTimeout(x)}
var timerTwo= function(x){
  setTimeout(x)}

function currentTime (){
  var currentDate = new Date();
  var hours = zero(pM(currentDate.getHours()));
  var minutes = zero(currentDate.getMinutes());
  var seconds = zero(currentDate.getSeconds());
  var nowTime = hours + ':' + minutes + ':'+ seconds;
  greeting.innerHTML= ''
  clock.innerHTML= nowTime;
  timer(currentTime, 1000)
}
function armyTime (){
  var currentDate = new Date();
  var hours = zero(currentDate.getHours());
  var minutes = zero(currentDate.getMinutes());
  var seconds = zero(currentDate.getSeconds());
  var milt = hours + ':' + minutes + ':'+ seconds;
  greeting.innerHTML= ''
  clock.innerHTML= milt;
  timerTwo(armyTime, 1000)
}
// currentTime();
function colorChange (){
  var currentDate = new Date();
  var hours = zero(pM(currentDate.getHours()));
  var minutes = zero(currentDate.getMinutes());
  var seconds = zero(currentDate.getSeconds());
  var color = '#' + hours + minutes + seconds;
  greeting.innerHTML= ''
  clock.innerHTML= color
  timerOne(colorChange, 1000)
  body.style.backgroundColor= color
}

colorButton.addEventListener('click', colorChange, clearTimeout(timer), clearTimeout(timerTwo))
normal.addEventListener('click', currentTime, clearTimeout(timerOne), clearTimeout(timerTwo))
army.addEventListener('click', armyTime, clearTimeout(timer), clearTimeout(timerOne))



