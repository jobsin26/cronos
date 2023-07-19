//Chamando os ID'S
const btnStart = document.getElementById('button-start');
const btnStop = document.getElementById('button-stop');
const btnReset = document.getElementById('button-reset');
const nSecond = document.getElementById('seconds');
const nTens = document.getElementById('tens');
let tens = 0;
let seconds = 0;
let interval;
let isPaused = true;

// Função para formatar o tempo com dois dígitos
function formatTime(time) {
  return time < 10 ? '0' + time : time.toString();
}
//Função(lógica) para atualizar o cronômetro

function updateTimer() {
  tens += 1;
  if (tens === 100) {
    seconds++;
    tens = 0;
  }
  nSecond.innerText = formatTime(seconds);
  nTens.innerText = formatTime (tens);
}

function startTimer(){
  interval= setInterval(updateTimer, 10)
  isPaused = false
}

btnStart.addEventListener('click', function(ev) {
  ev.preventDefault()
  if(isPaused) {
  startTimer()
}});

  //Parar o cronometro 

  function stopTimer() {
  clearInterval(interval);
  isPaused = true;
}

btnStop.addEventListener('click', function(){
  if(!isPaused) {
    stopTimer()
  }
})

//Reset do cronometro
function cleanTime() {
  stopTimer()
 seconds = 0
 tens = 0
 nSecond.innerText = formatTime(seconds);
  nTens.innerText = formatTime(tens);

}

btnReset.addEventListener('click', function( ){
  cleanTime()
})

 






//const btnAlerta = document.getElementById('Alerta')

//btnAlerta.addEventListener('click', function() {
  //alert('Botão de alerta clicado!')
//});


//window.onload=function(){
    //let botaoAlerta = document.getElementById("alerta");

    //botaoAlerta.onclick = function () {
    //   mostraAlerta() ;
   // };
//}

