export class Radix {
  constructor(val: Array<number>) {
    console.log(val);
    console.log(this.sort(val));
  }

  sort(arr: Array<number>): any {
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxNum = Math.max(...arr) ;
    let divisor = 10;
    while (divisor < maxNum) { // divisor stands for pass; 10 means units place and so on
      // Create bucket arrays for each of 0-9
      let buckets = [...Array(10)].map(() => []);
      // For each number, get the current significant digit and put it in the respective bucket
      for (let num of arr) {
        (buckets[Math.floor((num % divisor) / (divisor / 10))] as Array<number>).push(num);
      }
      // Reconstruct the array by concatinating all sub arrays
      arr = [].concat.apply([], buckets);
      // Move to the next significant digit
      divisor *= 10;
    }
    return arr;
  }
}
