// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. 
// Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
const firstVal = 40;
const secondVal = 60;

if ((firstVal>=50 && firstVal<=99) || (secondVal>=50 && secondVal<=99) ) {
    console.log(true);
};
// if (secondVal>=50 && secondVal<=99) {
//     console.log("The "+secondVal+" is in the range");
// };


// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
const x = 60;
const y = 30;
const z = 99;

if ((x>=50 && x<=99) || (y>=50 && y<=99) || (z>=50 && z<=99)){
    console.log(true);
};
// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console.
//  Then change the values of the variables to see if your conditional still works. 
const a = 5;
const b = 9;
const c = 15;
if (a>b && a>c) {
    console.log(a)
};
if (b>a && b>c) {
    console.log(a)
};
if (c>b && c>a) {
    console.log(c)
};

console.log(Math.max(a,b,c));

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
const firstWord  = "mold";
const secondWord = "Py"+firstWord;
console.log(secondWord);
if (secondWord.startsWith("Py")){
    console.log(firstWord)
};

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
if ((35+60)>50 && (35+60)<80){
    console.log(65);
} else {
    console.log(80)
};

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
if (10+2===8 || 10-2===8){
    console.log(true);
}
// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
if ((10===15 || 15===15) || (10+15===15)) {
    console.log(true);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
const h = 55;
const l = 49;
if (h%7===0 || h%11===0 || l%7===0 || l%11===0) {
    console.log(true);
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
const r = h + l;
if (h===l){
    console.log(r*3);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
const p = 30;
const diffp = p - 19;
if (p>19){
    console.log(diffp*2);
}


// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values.
//  Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". 
// If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". 
// If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". 
// If none of these conditions apply, print "firstName is a adult". 
const firstName = "Tom";
const age = 30;
if (age<13){
    console.log(`${firstName} is a child`);
} else if (age>=13 && age<20){
    console.log(`${firstName} is a teenager`);
} else if (age>=20 && age<30){
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is an adult`);
}
// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. /*  */