// demo big int
console.log(Number.MAX_SAFE_INTEGER); // <=> (2^53) - 1
console.log(Math.pow(2, 53) - 1);
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1); // true :: do vuot qua max int
console.log(BigInt(Math.pow(2, 53)) === BigInt(Math.pow(2, 53)) + BigInt(1)); // true :: do vuot qua max int

// format number
// eslint-disable-next-line no-unused-vars
const number = 9_000_000_000;

// filter in array
const man = [{ age: 21 }, { age: 22 }, { age: 25 }, { age: 38 }, { age: 24 }];
//cach cu
man.find((data) => data.age === 38);
man.findIndex((data) => data.age === 38);

//cach moi
man.findLastIndex((data) => data.age === 38);
