/*
Project Goals (by Codecademy)
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const valid6 = [4,5,3,9,6,8,9,8,8,7,7,0,5,7,9,8];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


//The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid.
function validateCred(arr){
  let sum=0;
  for(let i=arr.length-1; i>=0; i=i-2){
    sum+=arr[i];
    if(arr[i-1])
      sum+= arr[i-1]*2 > 9 ? arr[i-1]*2 - 9 : arr[i-1]*2;
  }
  return sum%10 === 0;
}
// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = arrCards => {
  return arrCards.filter(creditCard => !validateCred(creditCard));
}
//idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers.
const idInvalidCardCompanies = arrCards => {
  let arrCompanies = [];
  let company;
  arrCards.forEach(creditCard => {
    switch(creditCard[0]){
      case 3:
        company = 'Amex (American Express)';
        break;
      case 4:
        company = 'Visa';
        break;
      case 4:
        company = 'Mastercard';
        break;
      case 4:
        company = 'Discover';
        break;
      default:
        company = 'Company not found';
    }
    if(arrCompanies.indexOf(company) === -1)
      arrCompanies.push(company);
      //madeByFernandoZanutto
  })
  return arrCompanies;
}

console.log(idInvalidCardCompanies(batch));
