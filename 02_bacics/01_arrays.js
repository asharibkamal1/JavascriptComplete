//Arrays

const myarray=[0,1,2,3,5,6]

const myarray2=new Array(0,1,2,3,4,"asharibkaml")
// console.log(myarray);
// console.log(myarray[4]);
// console.log(myarray2);


// Arrays Methods

myarray2.push(6)//add new value
myarray2.push(7)
myarray2.pop //last value remove
//console.log(myarray2);

myarray2.unshift(9)//add value in start
myarray2.shift()//remove first value
//console.log(myarray2);

// console.log(myarray2.includes(9));//-1
// console.log(myarray2.indexOf(19));//-1

// const newarray = myarray2.join()//convert array in strings stype and bind   type change
// console.log(myarray2);
// console.log(newarray);

// console.log(typeof(newarray));
// console.log(typeof(myarray2));

//slice
console.log("A",myarray);//not change origional array not add last index value


const myna1=myarray.slice(1,3)//output 12

console.log(myna1);
console.log(myarray);

//splice

console.log("B",myarray);//


const myna2=myarray.splice(1,3)//change origional array and add last index also output 123

console.log(myna2);
console.log(myarray);