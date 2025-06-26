const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const secHand = now.getSeconds();
    const secDeg = ((secHand/60)*360)+90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    if(secHand===0){
        secondHand.style.transition = 'none';                                   /*convert snake-case to camelCase*/
                                                                                /*don't forget to add single quotes '' */
    }
    else{
        secondHand.style.transition = 'all 0.05s cubic-bezier(0, 2.6, 0.53, 1)';
    }

    const minHand = now.getMinutes();
    const minDeg = ((minHand+secHand/60)/60)*360 + 90;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    console.log(minHand);

    const houHand = now.getHours();
    const hourDeg = ((houHand%12+minHand/60)/12)*360 +90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

// setInterval executes the function after the interval
setInterval(setDate, 1000);  






















/*set interval example usage */
// let count = 0;
// let intervalId = setInterval(() => {
//   console.log("Count:", count);
//   count++;
//   if (count === 5) {
//     clearInterval(intervalId); // stops after 5 iterations
//   }
// }, 1000);