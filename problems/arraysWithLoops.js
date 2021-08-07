/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  for(i = 0; i < array.length; i++){
    array[i] = array[i]+"!"
  }
  return array
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  var lb = 0
  let ub = array.length-1
  while(lb <= ub) {
    array[lb] = array[lb]+"!"
    lb++
  }
  return array
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(arr) {
  var i = 0
  for (const element of arr) {
    arr[i++] = element+"!"
  }
  return arr
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  var sum = 0
  for(i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  var arr = []
  for(i = 0; i < nums.length; i++) {
    if(nums[i] % 2 !== 0) {
      arr.push(nums[i])
    }
  }
  return arr
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  var arr = []
  for(i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      arr.push(nums[i])
    }
  }
  return arr
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = nums[0]
  for(i = 0; i < nums.length; i++) {
    if(nums[i] < smallest) {
      smallest = nums[i]
    }
  }
  return smallest
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {

  // find the smallest first
  let smallest = nums[0]
  for(i = 0; i < nums.length; i++) {
    if(nums[i] < smallest) {
      smallest = nums[i]
    }
  }

  // then use the smallest to find the second
  let secondSmallest = Number.MAX_SAFE_INTEGER - 1
  for(i = 0; i < nums.length; i++) {
    if(nums[i] !== smallest) {
      if(nums[i] > smallest && nums[i] < secondSmallest) {
        secondSmallest = nums[i]
      }
    }
  }
  return secondSmallest
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  var max = Number.MIN_SAFE_INTEGER - 1
  var secondMax = Number.MIN_SAFE_INTEGER - 1

  for(i = 0; i < nums.length; i++){
    if(nums[i] > max) {
      max = nums[i]
    }
  }

  for(i = 0; i < nums.length; i++){
    if(nums[i] !== max){
      if(nums[i] < max && nums[i] > secondMax){
        secondMax = nums[i]
      }
    }
  }
  return secondMax
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {

  // create new array
  let arr = []

  // iterate thru array
  for(i = 0; i < nums.length; i++){

    // if our first empty array DOES NOT include a number in our original array
    if(!arr.includes(nums[i])) {
      arr.push(nums[i])
    }
    
  }
  return arr
}

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};
