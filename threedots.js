const ages = [26, 27, 28, 29];
const ages2 = [27, 28, 30, 34];
const ages3 = [30, 31, 32, 33];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [ages, ages2, 5, ages3];
//using spread operator
const allAges3 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges3);

const businessMan = 650;
const minister = 450;
const bcsCadre = 250;

const richOne = Math.max(businessMan, minister, bcsCadre);

const maximumWealth = [650, 450, 250];
const richPerson = Math.max(maximumWealth);
//using spreading operator
const wealthyPerson = Math.max(...maximumWealth);
console.log(wealthyPerson);