// Iteration 1: Names and Input
var hacker1 = "Peter";
console.log("The driver's name is " + hacker1);
var hacker2 = "Raul" ;
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}else if (hacker2.length === hacker1.length){
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
} else {
    if (hacker1.length < hacker2.length){
        console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
    }
}

// Iteration 3: Loops
let newDriversName = "";
for(let i = 0; i < hacker1.length; i++) {
    newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());

let newNavigatorsName = "";
for(let i = hacker2.length -1; i >= 0; i--){
    newNavigatorsName += hacker2[i] ;
}
console.log(newNavigatorsName);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.

Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.`

// inicialización de las variables
let words = 0;
let etCount = 0;

// convertimos el párrafo en un array de palabras
let splittedParagraph = paragraph.split(' ');

for (let i= 0; i < splittedParagraph.length; i++) {
  if(splittedParagraph[i].includes('\n')) {
    words++
  } else if(splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
 }

console.log('words -->', words);
console.log('et count  -->', etCount);

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}