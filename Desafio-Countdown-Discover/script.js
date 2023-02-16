// IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function(){
  //REFERENCIAL QUE NÃO SE ALTERA
  const countdownDate = new Date('Feb 23, 2023 17:45:00');

  let daysLeftLabel = document.getElementById('daysLeft');
  let hoursLeftLabel = document.getElementById('hoursLeft');
  let minutesLeftLabel = document.getElementById('minutesLeft');
  let secondsLeftLabel = document.getElementById('secondsLeft');

  function startCountdown() {

    let timer = setInterval(() => {
      const today = new Date();

      //variável let --> let it change  
      let distance = countdownDate.getTime() - today.getTime();

      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
      let days = Math.floor(distance / (1000 * 60 * 60 *24));

      daysLeftLabel.innerHTML = days.toString().padStart(2,'0')
      hoursLeftLabel.innerHTML = hours.toString().padStart(2,'0')
      minutesLeftLabel.innerHTML = minutes.toString().padStart(2,'0')
      secondsLeftLabel.innerHTML = seconds.toString().padStart(2,'0')
      
      //FAZENDO COM QUE APAREÇA SEMPRE UM VALOR COM 2 CASAS
      //SE ELE ENCONTRAR UM VALOR COM UMA CASA ELE ACRESCENTA UM ZERO
      //NO INICITO (padStart) OU NO FINAL (padEnd)
      //days.toString().padStart(2,'0')

      if(distance < 0){
        //PARA LIMPAR O INTERVALO
        clearInterval(timer)
        document.getElementById("countdown-title").innerHTML = "Mission Acomplished!"
        document.getElementById("timer").innerHTML = '<h2 style="text-align: center; width: 100%;">The Rocket has been launched! 🚀</h2>'       
      }
    }, 1000)
  }

  startCountdown();
})();