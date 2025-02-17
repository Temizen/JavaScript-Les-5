function optellen(getal1, getal2) {
    const resultaat = getal1 + getal2;
    const aantalParameters = arguments.length;
    document.getElementById('DivResult').innerHTML = getal1 + " + " + getal2 + " = " + resultaat + "<br>" + 'Aantal Parameters: ' +  aantalParameters;
}
optellen(5, 10);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length