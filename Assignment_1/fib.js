/**
 * Returns n numbers of the fibonacci sequence in an array
 * 
 * @param {number} n - Amount of numbers to be generated
 * @returns - Array of n number in fibonacci sequence
 */
function fib(n){
    //First two numbers will always be 0 and 1
    let nums = [0 , 1];

    //Base cases
    if(n === 1){
        return [0]
    } else if(n === 2){
        return nums;
    }

    /* If user wants to the 3rd number of higher,
     * keep getting next number in fibonacci sequence 
     * until i == n
     */
    for(let i = 2; i !== n; i++){
        //Add two previous numbers
        nums.push(nums[i-1] + nums[i - 2]); 
    }

    return nums;
    
}

console.log(fib(1)); // [ 0 ]
console.log(fib(2)); // [ 0, 1 ]
console.log(fib(8)); // [0, 1, 1, 2, 3, 5, 8, 13]