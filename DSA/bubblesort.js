function array(arr) {
    let n = arr.length;
    for ( let i = 0; i <  n - 1 ; i++) {
        for (let j = 0; j < n - i - 1;j++) {
          if (arr[j] > arr[j+1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
    }
    return arr
}
let a = [1,2,4,6,5,10,7,9,8]
 console.log(array(a));