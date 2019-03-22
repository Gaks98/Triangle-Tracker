
function triangle (sideA,sideB,sideC) {
    var sideA = prompt("Enter a value for side A: ");
    var sideB = prompt("Enter a value for side B: ");
    var sideC = prompt("Enter a value for side A: ");

    var a = parseInt(sideA);
    var b = parseInt(sideB);
    var c = parseInt(sideC);

    if (a===b && b===c && c===a) {
        alert("Equilateral");
    }
    else if (a===b && a!==c && b!==c || b===c && b!==a && c!==a || a===c && a!==b && b!==c) {
        alert("isosceles");
    }
    else if(a!==b && b!==c && c!==a)  {
        alert("scalene");
    }
    else{
        alert("Not a Number");
    }
}
triangle();


if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    triType.textContent = "Please enter numbers only!";
}
(sideA===null || sideB===null || sideC===null)