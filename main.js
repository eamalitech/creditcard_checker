// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

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


// Add your functions below:
const validateCred = list => {
  //reversing the input array into a new variable
  let listReversed = list.reverse();
  
  let even = [];
  let odd = [];
  let oddSum = 0;
  let evenSum = 0;
  let total = 0;

  //looping through the list array to split the set of numbers to even and odd positions
  for(let i=0; i<list.length; i++){
    if(i % 2 === 0){
      odd.push(listReversed[i]);
    }else{
      even.push(listReversed[i]);
    }
  }
    //using the reduce function to calculate the sum of all numbers in the even array
  oddSum = odd.reduce((acc, num) => acc + num);

  //doubling each value in the even list and store back into the even array
  even = even.map(num => num * 2);

  //using the reduce function to calculate the sum of all numbers in the even array
  evenSum = even.reduce((acc, num) => acc + (num > 9? num - 9: num));
  total = evenSum + oddSum;
  return total%10 === 0? 'valid': 'invalid'
};


const findInvalidCards = nestedArray => {
  let valid = [];
  let invalid = [];
  for (let arr of nestedArray){
    if(validateCred(arr) === 'valid'){
      valid.push(arr);
    }else{
      invalid.push(arr);
    }
  }
  return invalid;
};


const idInvalidCardCompanies = nestedArray => {
  let invalidCards = findInvalidCards(nestedArray);
  let companies = [];
  for(let card of invalidCards){
    let check = card[0];
    
    switch(check){
      case 3:
        companies.push('Amex (American Express)');
        break;
      case 4:
        companies.push('Visa');
        break;
      case 5:
        companies.push('Mastercard');
        break;
      case 6:
        companies.push('Discover');
        break;
      default:
        break;
    }
  }
  //return a unique set of companies without duplicates 
  let companiesSet = companies.filter((company, index) => {return companies.indexOf(company) === index});

  return companiesSet;
};

//Return an array of Credit Card number from a number string
const getCCNum = aString => {
  let arr = aString.split('');
  for(num of arr){
    if(!Number(num)){
      return 'invalid string'
    }
  }
  return arr.map(num => Number(num));
};

//Testing the getCCNum function 
console.log(getCCNum('394734538483'));

//testing the idInvalidCardCompanies function
//console.log(idInvalidCardCompanies(batch));
