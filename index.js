// Function to generate random dice number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Roll the dice and update images and sum
  function rollTheDice() {
    var randomNumber1 = rollDice();
    var randomNumber2 = rollDice();
  
    // Update dice images
    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");
    
    dice1.src = "images/dice" + randomNumber1 + ".png";
    dice2.src = "images/dice" + randomNumber2 + ".png";
    
    dice1.classList.add("rolling");
    dice2.classList.add("rolling");
  
    // Remove animation class after 300ms
    setTimeout(() => {
      dice1.classList.remove("rolling");
      dice2.classList.remove("rolling");
    }, 300);
  
    // Calculate and display the sum
    var sum = randomNumber1 + randomNumber2;
    document.getElementById("sumText").innerText = "Sum of Dices is " + sum;
  
    // Update history
    updateHistory(randomNumber1, randomNumber2, sum);
  }
  
  // Function to update roll history
  function updateHistory(dice1, dice2, sum) {
    var historyList = document.getElementById("historyList");
    var newItem = document.createElement("li");
    newItem.innerText = `Dice 1: ${dice1}, Dice 2: ${dice2} - Sum: ${sum}`;
    historyList.appendChild(newItem);
  }
  
  // Attach rollTheDice function to button
  document.getElementById("rollBtn").addEventListener("click", rollTheDice);