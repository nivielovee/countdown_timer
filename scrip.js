// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
  
//   const weekdays = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
  const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    function updateCountdown() {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
      if (difference <= 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = 'Countdown Over!';
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
      }
    }

    const timerInterval = setInterval(updateCountdown, 1000);

    const endDate = targetDate.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', });
      document.getElementById('giveaway-message').innerHTML = `Giveaway Ends On ${endDate} at 11:30am`;










/* var countDownDate = new Date("march 6,2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance%(1000 * 60 * 60 * 24))/(1000 * 60 *60));
    var minutes = Math.floor((distance%(1000 * 60 * 60))/(1000* 60));
    var seconds = Math.floor(distance%(1000 * 60 ))/1000;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
       clearinterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }
 } ,1000); */ 