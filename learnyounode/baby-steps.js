let sum = 0;
let inputArray = process.argv

for (let i = 2; i < inputArray.length; i++){
    sum += Number(inputArray[i]);
}

console.log(sum);