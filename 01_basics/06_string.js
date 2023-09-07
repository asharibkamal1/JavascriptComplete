//console.log("asharib"+' kamal');
const name ="asharib"
const repocount = 50 

console.log(name + repocount + "value");


//string interpulation
console.log(`my name is ${name} and my repo count is ${repocount}`);//best choice to use strings


const gameName = new String('asharib')
console.log(gameName[5]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newstring = gameName.substring(0,5)

console.log(newstring);

const anotherstring = gameName.slice(-5,5)
console.log(anotherstring);

const newstringone ="  asharib    "
console.log(newstringone);
console.log(newstringone.trim())

const URL  = "https://asharibkamal.com/asharib%20kamal"

console.log(URL.replace('%20','-'));
console.log(URL.includes('asharib'));

console.log(gameName.split('-'));