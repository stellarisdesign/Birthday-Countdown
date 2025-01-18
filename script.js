     // Set the target date and time
     const targetDate = new Date('January 2, 2026 00:00:00').getTime();

     // Update the countdown every second
     const countdownInterval = setInterval(() => {
         const now = new Date().getTime();
         const timeLeft = targetDate - now;

         // Calculate days, hours, minutes, and seconds
         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

         // Display the countdown
         const countdownElement = document.getElementById('countdown');
         if (timeLeft > 0) {
             countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
         } else {
             // Stop the countdown
             clearInterval(countdownInterval);

             // Show the birthday message and GIF
             countdownElement.style.display = 'none';
             const birthdayMessage = document.getElementById('birthday-message');
             birthdayMessage.style.display = 'block';
         }
     }, 1000);