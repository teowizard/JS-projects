const getSleepHours = day => {
  if (day === `monday`) {
    return 8;
  } 
  else if(day === `tuesday`){
    return 7
  }
  else if(day === `wednesday`){
    return 6
  }
  else if(day === `thursday`){
    return 9
  }
  else if(day === `friday`){
    return 8
  }
  else if(day === `saturday`){
    return 8
  }
  else if(day === `sunday`){
    return 8
  }
  else {
    return 'Error!'
  }
};

const getActualSleepHours = () => 
  getSleepHours(`monday`) + getSleepHours(`tuesday`) + getSleepHours(`wednesday`) + getSleepHours(`thursday`) + getSleepHours(`friday`) + getSleepHours(`saturday`) + getSleepHours(`sunday`)

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours) {
  console.log('You slept just enough!');
} else if (actualSleepHours > idealSleepHours) {
  console.log('You slept '+ (actualSleepHours - idealSleepHours) +' hours more than ideal!');
} else {
  console.log('You slept '+ (idealSleepHours - actualSleepHours) + ' hours less than ideal!');
}
}

calculateSleepDebt();
