// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length); //this is to randomly select which base will be mutated in the original dna
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) { //if the random new base is the same as in the DNA then it will try it again until it is not the same, e.g. if both equal A then it will try again
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => { //the reduce function takes in the accumulator which adds 1 starting from 0, this is then added to the current value, so the first call would return 1 if the array is [0, 1, 2, 3, 4] and the index 1 (so the current value is 1 in the array) thena dding accumulator which is 0 then it equals to 0+1=1
        if (arr[idx] === otherOrg.dna[idx]) { // if the array number is the same in the dna and otherOrg then it will add 1 to the accumulator
          return acc + 1;
        } else {
          return acc; //we wants the accumulator so we check how many are the same
        }
      }, 0); // the 0 is the first value for the accumulator
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`); 
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G"); //this is to calculate if the organism has a likelyhood of survival if C or G are present in the dna bases
      return cOrG.length / this.dna.length >= 0.6; //return true if more than 60% contains C or G
    },
  }
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {   //this will loop through until there are 30 specimens
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)


console.log(pAequorFactory)
