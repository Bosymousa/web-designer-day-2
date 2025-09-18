// 1) Grade Calculator
function calcGrade() {
    let phy = Number(prompt("Enter Physics marks (out of 20):"));
    let chem = Number(prompt("Enter Chemistry marks (out of 20):"));
    let bio = Number(prompt("Enter Biology marks (out of 20):"));
    let math = Number(prompt("Enter Math marks (out of 20):"));
    let comp = Number(prompt("Enter Computer marks (out of 20):"));

    let total = phy + chem + bio + math + comp; // max 100
    let percentage = (total * 100) / 100;

    let grade;
    if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B";
    else if (percentage >= 70) grade = "C";
    else if (percentage >= 60) grade = "D";
    else if (percentage >= 40) grade = "E";
    else grade = "F";

    console.log("Percentage: " + percentage + "%, Grade: " + grade);
}

// 2) Max & Min
function findMaxMin() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    let c = Number(prompt("Enter third number:"));

    let max = a;
    let min = a;

    if (b > max) max = b;
    if (c > max) max = c;

    if (b < min) min = b;
    if (c < min) min = c;

    console.log("Max: " + max + ", Min: " + min);
}

// 3) Positive or Negative
function checkSign() {
    let num = Number(prompt("Enter a number:"));
    if (num > 0) console.log(num + " is Positive");
    else if (num < 0) console.log(num + " is Negative");
    else console.log("Number is Zero");
}

// 4) Even or Odd
function checkEvenOdd() {
    let num = Number(prompt("Enter a number:"));
    if (num % 2 === 0) console.log(num + " is Even");
    else console.log(num + " is Odd");
}

// 5) Root (simple method)
function calcRoot() {
    let number = Number(prompt("Enter a number:"));
    let root = Number(prompt("Enter root (only 2 supported here):"));

    let guess = 1;
    let result = 0;

    while (guess * guess <= number && root == 2) {
        if (guess * guess === number) {
            result = guess;
            break;
        }
        guess++;
    }

    if (result !== 0) {
        console.log(root + " root of " + number + " = " + result);
    } else {
        console.log("Approx/root not perfect in this method.");
    }
}

// 6) Simple Calculator
function calculator() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    let operation = prompt("Enter operation (+, -, *, /, %):");

    let result;
    if (operation === "+") result = num1 + num2;
    else if (operation === "-") result = num1 - num2;
    else if (operation === "*") result = num1 * num2;
    else if (operation === "/") result = num1 / num2;
    else if (operation === "%") result = num1 % num2;
    else {
        console.log("Invalid Operation");
        return;
    }

    console.log("Result: " + result);
}

// -------- Run All --------
calcGrade();
findMaxMin();
checkSign();
checkEvenOdd();
calcRoot();
calculator();

// Signature
console.log("%cMade in", "color: blue; font-size: 16px; font-weight: bold;");
