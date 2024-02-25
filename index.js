
        // Initialize JSConfetti instance
        const jsConfetti = new JSConfetti();

        function guessNumber() {
            var userNumber = document.getElementById("numberInput").value;
            var randomNumber = Math.floor(Math.random() * 6) + 1;

            if (userNumber == randomNumber) {
                document.getElementById("result").innerHTML = "Congratulations! You guessed the number right.";
                document.getElementById("numberImage").src = "images/" + randomNumber + ".jpg";
                document.getElementById("numberImage").style.display = "inline-block";
                document.getElementById("winSound").play();

                
                jsConfetti.addConfetti({
                    
                    confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
                    confettiRadius: 6,
                    confettiNumber: 500
                });
            } else {
                document.getElementById("result").innerHTML = "Sorry, that's not correct. Try again.";
                document.getElementById("numberImage").src = "images/wrong.jpg";
                document.getElementById("numberImage").style.display = "inline-block";
                document.getElementById("buzSound").play();
            }
        }
    