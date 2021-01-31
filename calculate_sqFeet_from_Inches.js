function calcSqFeetFromInches(xInInches, yInInches) {
    xInInches = prompt("Give x length in Inches: ");
    yInInches = prompt("Give y length in Inches: ");
    let x = xInInches / 12;
    let y = yInInches / 12;
    alert(x * y);
}

calcSqFeetFromInches()


