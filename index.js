document.addEventListener('DOMContentLoaded', function() {
    var animalPicture = document.getElementById('animalPicture');
    var scoreDisplay = document.getElementById('score');
    var timeDisplay = document.getElementById('time');
    var end=document.getElementById('end');
    var score = 0;
    var timeLeft = 10;
  
    animalPicture.addEventListener('click', function() {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
    });
  
    var countdown = setInterval(function() {
      timeLeft--;
      timeDisplay.textContent = timeLeft + ' wacky seconds';
      if (timeLeft <= 0) {
        clearInterval(countdown);
        end.textContent="Enough! I can't be beaten by you";
        scoreDisplay.textContent=score;
      }
    }, 1000);
  });