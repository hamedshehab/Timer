let timerInterval;
    let startTime;
    let remainingTime;

    function startTimer() {
      const timeInput = document.getElementById("timeInput");
      const timeInSeconds = parseInt(timeInput.value);

      if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        alert("Please enter a valid time in seconds.");
        return;
      }

      startTime = Date.now();
      remainingTime = timeInSeconds * 1000;

      timerInterval = setInterval(updateTimer, 10);
    }

    function stopTimer() {
      clearInterval(timerInterval);
      document.getElementById("timer").innerText = "00:00:00";
    }

    function updateTimer() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const timeLeft = remainingTime - elapsedTime;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "00:00:00";
        return;
      }

      const formattedTime = formatTime(timeLeft);
      document.getElementById("timer").innerText = formattedTime;
    }

    function formatTime(timeInMilliseconds) {
      const totalSeconds = Math.floor(timeInMilliseconds / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const milliseconds = Math.floor((timeInMilliseconds % 1000) / 10);

      const formattedMinutes = padNumber(minutes);
      const formattedSeconds = padNumber(seconds);
      const formattedMilliseconds = padNumber(milliseconds);

      return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    }

    function padNumber(number) {
      return number.toString().padStart(2, "0");
    }