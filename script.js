// const number1 = 2  //number
// const number2 =3    //number

// if (number1 == number2) { 
//     console.log('3 est égal à 3')
// } else {
//     console.log('les 2 valeurs ne sont pas égales')
// }

// const firstName = 'Pierre'
// const age = 45 

// if (firstName === 'Pierre' && age === 45) {   //les 2 conditions doivent être vraies
//     console.log('Les valeurs sont correctes')
// } else {
//     console.log('Les valeurs ne sont pas correctes')
// }

// const firstName = 'Pierre'
// const age = 4

// if (age >= 18) {
//     console.log('Adulte')
// } else if (age > 3 && age < 18) {
//     console.log('Enfant')
// } else if (age === 4) {
//     console.log('Bébé')
// }

const dice = 2

switch(dice) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    default:
        console.log('default value') 
}

const firstName = 'Pierre'
const age = 22
let isAdult = age>=18 ? 'La personne est majeure' : 'La personne est mineure'

// if(age >=18) {
//     isAdult = 'La personne est majeure'
// } else {
//     isAdult = 'La personne est mineure'
// }

console.log(isAdult)