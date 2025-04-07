const prices = [7, 1, 5, 3, 6, 4];
let maxProfit = [];

function profitMax (price, max) {
    let i = 0;
    let j = price.length - 1;
    let profit = 0;

    while (i < j) {
        profit = price[j] - price[i];
        if (profit > 0) {
            max.push(profit);
        }
        j--;
        if (i === j) {
            i++;
            j = price.length - 1;    
        }  
    };
    return max;
}

// const result = profitMax (prices, maxProfit);
// console.log(result);

function increaseArr(arr) {
    let c;
    let j = arr.length - 1;
    for (let i = 0; i < j; i++ ) {
       for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                c = arr[i];
                arr[i] = arr[j];
                arr[j] = c;
            }
            i++;
       };
    };
}

increaseArr(prices)