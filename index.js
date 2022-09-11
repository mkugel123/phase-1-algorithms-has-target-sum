function hasTargetSum(array, target) {
  // Write your algorithm here
  const arrayOfSums = []
  array.forEach((number) => {
    let numberIndex = array.indexOf(number)
    for (let i = 0; i < array.length; i++){
      let otherNumber = array[i]
      if (i !== numberIndex){
        arrayOfSums.push(number + otherNumber)
      }
    }
  })
  return arrayOfSums.includes(target)
}

/* 
  Write the Big O time complexity of your function here
*/

/*
  Add each number of the array to all the other numbers
  if any of the sums equal to the other number given return true
*/

/* 
  Add your pseudocode here
  for each number in array
    add each other number to it besides for the number itself
    and push sum into another array
     compare numbers of new array to target
*/

/*
  Add written explanation of your solution here

  for each number in the array that was used as argument,
  a for loop is used to add it to all other numbers besides
  for itself and the sums are pushed into arrayOfSums.
  Then array.includes() method is used to return true if
  arrayOfSums includes target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([12, 14, 25], 25))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 2, 5], 4));
}

module.exports = hasTargetSum;
