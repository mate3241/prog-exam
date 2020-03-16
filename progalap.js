// feladat 1.
// szám
const num = 1;
// string
const string = 'asd';
// boolean
const bool = false;
// null
const nullV = null;
// undefined
// const und;
// tömb
const arr = new Array(5);
// object
const obj = { a: 'a', b: 'b' };

// feladat 2.
// primitív változók (string, boolean, number) érték szerint adódnak át
// tehát ha paraméterül adjuk egy fv-nek, és változtatunk az értékén, az eredeti
// érték nem módosul
// array és object referencia szerint adódik át, tehát a fv-en belüli
// módosítás az eredeti array vagy object értékét is változtatja
const a = 5;
const b = [1, 2];
console.log('eredeti értékek', a, b);
const feladat2 = (a, b) => {
  a = 10;
  b.push(3);
  console.log('fv-en belüli értékek: ', a, b);
};
feladat2(a, b);
console.log('fv-en kívüli értékek: ', a, b);

// feladat 3.
const arr3 = [1, 2, 3, 4, 5];
const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log('tömb elemeinek összege:', sumArray(arr3));

// feladat 4.
const arr4 = [1, 2, 3, 4, 5, 4];
const countElementInArray = (array, num) => {
  let count = 0;
  for (let i = 0; i < arr4.length; i++) {
    if (array[i] === num) {
      count++;
    }
  }
  return count;
};
const num4 = 4;
console.log(num4, 'szám előfordulása a tömbben:', countElementInArray(arr4, num4));

// feladat 5.
const switch5 = (num) => {
  switch (num) {
    case 0: {
      console.log('a szám nulla');
      break;
    }
    case 1: {
      console.log('a szám egy');
      break;
    }
    case 2: {
      console.log('a szám kettő');
      break;
    }
    default: console.log('a szám nem nulla, egy, vagy kettő');
  }
};
switch5(1); 
switch5(5);

// feladat 6.
const arrA = [1, 2, 3];
const arrB = [2, 3, 4, 5, 3];
const metszet = (arrA, arrB) => {
  const metsz = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        metsz.push(arrA[i]);
        break;
      }
    }
  }
  return metsz;
};
console.log('egyik tömb:', arrA);
console.log('másik tömb:', arrB);
console.log('metszetük:', metszet(arrA, arrB));

// feladat 7.
const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  return num1 / num2;
};

module.exports = { add, subtract, multiply, divide };

// feladat 8.

const feladat8 = (x, y) => {
  const array = new Array(x);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(y);
  }
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = Math.pow(2, num);
      num++;
    }
  }
  return array;
};
console.log(feladat8(3, 3));
