/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Solution Six
function getIndexToIns(arr, num) {                //1
  return arr                                      //2
    .concat(num)                                  //3
    .sort((a, b) => a - b)                        //4
    .indexOf(num);                                //5
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
//Output = 2 
 
 



//Notes
/*
//1 
Function which takes in two arguments:
  Arg1: an Array
  Arg2: a number/integer

//2, 3, 4, 5

Section will return array with specified methods attached to it using chaining. 

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

Source - [https://devdocs.io/javascript/global_objects/array/concat]

In this case the num input is concatenated on to the original array. The output will be [ 5, 3, 20, 3, 5 ]

The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

Source - [https://devdocs.io/javascript/global_objects/array/sort]

The sort method will return the concatenated array sorted from lowest to highest. The sort order is determined by the return statement. If the return statement were to be b - a the sort order would be from highest to lowest.

OUTPUT = [ 3, 3, 5, 5, 20 ]

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

Source - [https://devdocs.io/javascript/global_objects/array/indexof]

The indexOf method will return the output of index 2 (Which is the first 5 in the array)

*/

