let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = false;

const age = 3;

if(earlyReg && age > 18) {
  raceNumber += 1000;
}

if(earlyReg && age > 18) {
  console.log(`Race will start at 9:30am your race number is ${raceNumber}.`);
}
  else if (!earlyReg && age > 18) {
  console.log(`Late adults run at 11:00 am your race number is ${raceNumber}.`);
}
  else if (age < 18) {
    console.log(`Youth registrants run at 12:30 pm (regardless of registration) your race number is ${raceNumber}.`);
  }
  else {
    console.log(`See the registration desk please.`);
  }
