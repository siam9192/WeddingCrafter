1. 
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

*Answer: B
*explanation: The questions answer is B. Here a variable is declared which name is greeting . but then when i  tried to assign an empty object to greetign. then js will give a ReferenceError because js doesn't recognize greetign.

2. 
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

*Answer : C

*explanation: The questions answer is C .Here a function is declared which name is  sum . The function has 2 parameters a and b .function will  return the sum of a and b.after declaration the function is called with tow arguments. 1st argument for a and second is b.then it will return the sum of a + b.but the value type of b is not a number it is in string type.So  the function will not return 3 it will return 12.


3. 
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
*Answer : A
*explanation :The questions answer is A. Because the value of food variable is ['🍕', '🍫', '🥑', '🍔'] And i noticed that the  next lines code  of food variable doesn't create any effect on food variable.

4. 
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

*answer: B.
*explanation: The question answer is B.Because i see that the function has one   parameter which is name but the argument of name parameter has not passed .so that the sayHi function will return Hi there, undefined.

5. 
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

*answer:The questions answer is C.

*explanation: First count value is = 0.By running the forEach loop on the num variable which is an array  it will add 1 every time with count value depending on the array length. After completing for each loop the value of count comes to 3. 