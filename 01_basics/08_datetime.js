let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString);
console.log(mydate.toJSON());
console.log(mydate.toLocaleTimeString());

let mydatenew= new Date ("01-01-2023")
console.log(mydatenew);

let mytimestamp = Date.now()

console.log(mytimestamp);

console.log(mydate.getTime());

let newdate = Date.now()

newdate.toLocaleString('default',
{
    weekday: "long"

})