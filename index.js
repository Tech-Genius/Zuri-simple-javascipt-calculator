let x = prompt("Enter Your First Number");
let y = prompt("Enter Your Second Number");
var num1 = parseInt(x)
var num2 = parseInt(y)
let operation = prompt(`
For addition enter 1
For subtraction enter 2
For multiplication enter 3
For division enter 4
For a modulus operation enter 5
`)
if(operation == "1"){
    let result = num1 + num2
    alert("The addition of " + num1 + " and " + num2  + " is " + result)
}
else if(operation == "2"){
    let result = num1 - num2
    alert("The subtraction of " + num1 + " from " + num2  + " is " + result)

}

else if(operation == "3"){
    let result = num1 * num2
    alert("The multiplication of " + num1 + " by " + num2  + " is " + result)
}
else if(operation == "4"){
    let result = num1 / num2
    alert("The division of " + num1 + " by " + num2  + " is " + result)

}

else if(operation == "5"){
    let result = num1 % num2
    alert("The modulus of " + num1 + " and " + num2  + " is " + result)

}
