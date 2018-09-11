// 1. The difference between interpolation and concatenation is the syntax.
// 	  Interpolation looks like this: console.log(`This is how ${interpolation} works')
// 	  Concatenation looks like this: console.log('We ' + 'can ' + concatenate ' like this!')

// 2. DRY stands for Don't Repeat Yourself. You should pay attention to it because
// 	  it directly effects your code and how efficiently you write it. We can use
// 	  while and for loops to make sure that we are writing DRY code.

// 3. Declaring a variable tells the compiler that there is a variable. Defining it
// 	  gives the variable a value.

// 4. Always use const instead of let unless the system yells at you to do otherwise

// 5. A parent directory is a folder that houses other files or folders

// 6. Use a man page by typing man <the thing you need help with> or use help

// 7. Tab completion is the best tool ever because you cut key strokes by allowing
//	  the terminal window to auto complete stuff for you based what is in the folder

// a < b;
// c > d;
// 'Name' === 'Name';
// a + b = c;
// a * a = d;
// e === 'Kevin';
// 48 == '48'; 

// Loop 1:
// The while loop is an infinite loop because it does not have a condition listed that will
// make it stop running.

// Loop 2:
// This is an infinite loop because you cannot redeclare a const. So you will get an error message.

let letters = "A";
let i = 0;

while (i < 20) {
//This line will add an additional "A" to the variable letters 
	letters += "A";
//This line will bring i up by one each time the loop runs
	i++;
}
//This line will print 20 "A"
console.log(letters);

// Loop Questions

//1. For loops define the variable within the loop itself.
//	 While loops require the variable to be defined outside
//	 of the loop.

//2.
for(let i = 0; i <= 100; i++) {
	console.log(i);
}

//3. Parts of a control statement:
//		First: initialization 
//		Second: condition 
//		Third: final expression

//4. For Loop Reverse
for(let i = 999; i >= 0; i--) {
	console.log(i);
}

for(let i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`);
}




