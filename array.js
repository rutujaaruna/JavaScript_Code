//Array is a dataType where we can enables  storing a collection of multiple items under a single variable name 
//Javascript array is resizable and can contain a mix of different datatypes
// Javascript array -copy-oprations created shallow copies and deep copies


//1st way  to decalre array
const arr =["Rutuja","Rushi","Vishnu","Sangeeta"];

//2nd way to declare array
const myArr= new Array(1,2,3,4,5,6);
// console.log("myArr", myArr,myArr[0])  //print array and access elements of an array using index number;

//to push(Add elements in an array) elements in an array
arr.push("Vandana");
console.log("Add new element in an array",arr);

//to pop(remove last element from array)
myArr.pop();
console.log("Remove last element from array", myArr);

//unshift(add values in an array at starting point) shift(remove elements from array at starting point)
myArr.unshift(0);
console.log("Added elements at starting position of an array", myArr);
myArr.shift();
console.log("Remove elements from array at starting position", myArr);


//includes it is check specified element is in array or not and gives us boolean values(true and false)
console.log("Check specified element",arr.includes("Rutuja"));

//indexOf it is simply give us index value of array specified elements and it is gives -1 values when that value is not in array
console.log("Check index of specified element from array", arr.indexOf("Rutuja"));

//Join  it is converted the typeof array it is converted  array to string and separated elements by comma.
const newArray = arr.join();
console.log("NewArray", newArray, typeof(newArray),typeof(arr));

//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log("Original array before use slice method", myArr);
const newMyArr = myArr.slice(1,3);
console.log("newMyArr", newMyArr);
console.log("Originalarray after use slice method", myArr);

//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). 
console.log("Original array before use splice method", myArr); //o/p:[ 1, 2, 3, 4, 5, 6 ]
myArr.splice(2); // removing items from its index number  op: [ 1, 2 ]
myArr.splice(0,4); //removing items start from index and give deletecount here 0 is the index numberand 4 is delete count means itdelete 4 elements from 0 index op:[5,6]
myArr.splice(4,2,7,8); // here4is index number 2 is deletecount and 7 and 8 is the items to insert here you can insertitems in array you insert nth  numberof items. op:  op: [ 1, 2 ,3,4,7,8]
console.log("newMyArr", myArr); 
console.log("Originalarray after use splice method", myArr);//op:[ 1, 2 ]


// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log("Joining of array", arr.join());//this isnot change the original array
console.log("Joining of array", arr.join(''));// Basically ye method return karata hai new string by concatenation all of the elements of an array.
console.log("Joining of array", arr.join('-'));
console.log("Join", myArr.join(''));

// Array.isArray() method determines whether the passed value is an Array or not and gives us boolean values.
console.log(Array.isArray(new Array(400,true,'Rutuja')));


// Note : The pop() method in JavaScript removes the last element from an array and returns that element. It doesn't accept an index as an argument because it always removes the last element. If you want to remove elements from an array based on their index, you should use the splice() 