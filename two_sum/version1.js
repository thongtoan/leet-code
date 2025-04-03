const nums = [3, 5, 7, 7];
const target = 7;
let output = [];

function twoSum (arr, target) {
    let i = 0;
    let j = arr.length - 1;
    while (i !== j && j < arr.length) {
        if (arr[i] + arr[j] === target)  {
            output.push(i, j);
            return output;
        }
        j--;
        if (i === j) {
            i++;
            j = i + 1;
        }    
    }
    return "Not value to right";
}

const result = twoSum(nums, target);
console.log(result);