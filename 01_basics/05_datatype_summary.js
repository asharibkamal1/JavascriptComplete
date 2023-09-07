// premitive data type all are call by value 
//7 types
// string, number , boolean, null, undefined ,symbol,bigint
//refrence non premitive 

//array, object, functions

// const id= symbol('123')
// const id2 = symbol('123')
//console.log(id=id2);//false

const bigNumber=31123123123123123123n

const heros =["Allah","muhammad"] //array

let myobj={
    name: "Asharib",
    age : 28

};

const myfunction=function(){
    console.log("test");
}




// memory 2 types stack , heap

//stack (premitive ) , heap (non premitive)

//stack example return copy 
let myyoutubename ="asharibkamal"
let anothernaem = myyoutubename
anothernaem="ashu"
console.log(anothernaem)//ashu
console.log(myyoutubename);//asharibkamal

// heap example return actual value refrence

let userone= {
    name: "asharib",
    age:28
}

let usertwo = userone
usertwo.name ="Asharibkamal"

console.log(userone);//Asharibkamal
console.log(usertwo);//Asharibkamal


console.log("hello"+ ' world');



