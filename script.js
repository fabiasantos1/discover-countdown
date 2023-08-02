(function() {

  const countdownDate = new Date("Aug 2, 2023 11:08:00")



  var daysLeftLabel = document.getElementById("daysLeft");

  var hoursLeftLabel = document.getElementById("hoursLeft");

  var minutesLeftLabel = document.getElementById("minutesLeft");

  var secondsLeftLabel = document.getElementById("secondsLeft");

  

  
    function starCountdown() {

      var timer = setInterval(() => {

      const today = new Date();



      var distance = countdownDate.getTimer() - today.getTimer();


      
      var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));



      daysLeftLabel.innerHTML = days.toString().padStart(2, '0')

      hoursLeftLabel.innerHTML = hours.toString().padStart(2, '0')

      minutesLeftLabel.innerHTML = minutes.toString().padStart(2, '0')

      secondsLeftLabel.innerHTML = seconds.toString().padStart(2, '0')
      
      
      console.log(days, hours, minutes, seconds)


      if(distance < 0) {

        clearInterval(timer)

        document.getElementById("countdwn-title").innerHTML = "Mission Accomplished"

        document.getElementById('timer').innerHTML = '<h2 style="text-align: center; width: 100%">Rocket has been launched! 🚀</h2>'
      } 

    }, 1000)




  }

  starCountdown()

})();