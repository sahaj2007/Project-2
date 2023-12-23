let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const random = document.querySelector(".random");

btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
     const styles = e.currentTarget.classList;
     if (styles.contains("decrease")) {                      /*a button the deceases count -10 */
        count-=10;
     }
     else if(styles.contains("increase")) {         /*a button that increases count +10 */
       count+=10;
     }
     else if(styles.contains("reset")){
      count = 0;
     }  
     else {                /*a button that increases or decreases count depending on a random number in a 10 digit array */
       random.addEventListener("click", function() {
        const randomNumber = getRandomNumber();
        count-= randomNumbers[randomNumber];
       });
     }
     if(count > 0){
      value.style.color = "green";
     }
     if(count < 0) {
      value.style.color = "red";
     }
     if(count === 0) {
      value.style.color = "#222";
     }
     value.textContent = count;
  });
});


/*a button that increases or decreases count depending on a random number in a 10 digit array */
const randomNumbers = [-50, -40, -30, -20, -10, 10, 20, 30, 40, 50]; 

function getRandomNumber() {
  return Math.floor(Math.random() * randomNumbers.length);
}