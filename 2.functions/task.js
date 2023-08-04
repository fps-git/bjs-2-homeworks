function getArrayParams(...arr) {
  // let min = arr[0];
  // let max = arr[0];
  // let sum = arr[0];

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i]
  // } else {
  //   if (arr[i] > max) {
  //     max = arr[i]
  //   }
  // }
  // sum += arr[i];
  // }
  // let avg = Number((sum / arr.length).toFixed(2));

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number((arr.reduce(function(a, b) {
    return a + b;
  }) / arr.length).toFixed(2)); 
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = arr.reduce(function(a, b) {
      return a + b;
    })
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2) {
        sumOddElement += arr[i];
       } else {
        sumEvenElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] % 2) == false) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }  
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const tempResult = func(...arrOfArr[i]);
    if (tempResult > maxWorkerResult){
      maxWorkerResult = tempResult;
    }
  }
  return maxWorkerResult;
}