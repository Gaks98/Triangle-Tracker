function triangle(){
    var sideA = parseFloat(document.getElementById("A").value);
    var sideB = parseFloat(document.getElementById("B").value);
    var sideC = parseFloat(document.getElementById("C").value);
    var triType = document.getElementById("triType");

    if(sideA <=0 ||  sideB <= 0 || sideC <= 0){
        triType.textContent = "values too small to form triangle"
    }
    else if ((sideA===sideB && sideB===sideC)){
        var equilateral = "equilateral";
        triType.textContent = "Triangle : " + equilateral;
    }
    else if (sideA+sideB <= sideC || sideA+sideC <= sideB || sideB+sideC <= sideA ) {
        triType.textContent = "Not a Triangle! the sum of any two sides of the triangle must be greater than the third side.Try again";
    }
    else if (sideA===sideB && sideA!==sideC && sideB!==sideC || sideB===sideC
        && sideB!==sideA && sideC!==sideA || sideA===sideC && sideA!==sideB && sideB!==sideC) {
        var isosceles = "isosceles";
        triType.textContent = "Triangle : " + isosceles;
    }
    else if(a!==b && b!==c && c!==a) {
        var scalene = "scalene";
        triType.textContent = "Triangle : " + scalene;
    }
    else {
        triType.textContent = "Enter valid number"
    }
}
