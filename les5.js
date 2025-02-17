//const Gebruiker = 'Veridian';

//function printNaam(Naam) {
  //  document.getElementById('DivResult').innerHTML =
    //'<h2> Uw naam is: ' + Naam + '</h2>';
//}
//printNaam(Gebruiker);

//const aanroep = kwadraat(10);

//function kwadraat(getal){
//    const kwadraat = getal * getal ;
//    const resultaat = 'OK';
//    return { 
  //      'getal': getal,
    //    'uitkomst': kwadraat,
      //  'resultaat': resultaat
//}
//}

//document.getElementById('DivResult2').innerHTML = 'het kwadraat van ' + aanroep.getal +  
//' is: ' + aanroep.uitkomst + '<br>' +  'dit getal is: ' + aanroep.resultaat;

//const oldLogger = function(msg) {
//    console.log(msg);
//};

//oldLogger('1. oldLogger: Hallo Ouderwetse ES%!');

//const newLogger = (msg) => console.log(msg);
//newLogger('2. newLogger: Hallo ES6 met Arrow Functions');

//const greeter = (name, age) => {
  //  let msg = 'Hallo ' + name + ', je bent ' + age + ' jaar.';
    //return msg;
//}

//const tekst1 = 'Hello World';
//function schrijfTekst(tekst){
  //  document.getElementById('DivResult3').innerHTML = tekst;
    //alert(tekst);
//}
//schrijfTekst(tekst1);


//huiswerk les 5-1

//const naam = prompt('Wat is uw naam?', 'Uw naam');
//function welkom() {
//    alert('Welkom ' + naam);
//}
//welkom();

//huiswerk les 5-2

//function optellen(getal1, getal2) {
//    const resultaat = getal1 + getal2;
//    alert(getal1 + " + " + getal2 + " = " + resultaat);
//}
//optellen(5, 10);


//huiswerk Les 5-3

//function optellen(getal1, getal2) {
//    const resultaat = getal1 + getal2;
//    const aantalParameters = arguments.length; // Telt het aantal meegegeven parameters

//    document.getElementById('DivResult').innerHTML = 
//    getal1 + " + " + getal2 + " = " + resultaat + 
//    "<br>Aantal parameters: " + aantalParameters;
//}

// Roep de functie aan met twee getallen
//optellen(5, 10);

//huiswerk les 5-4
function toonWillekeurigGetal() {
    const willekeurigGetal = Math.round(Math.random() * 100); // Getal tussen 0 en 100
    document.getElementById('DivResult').innerHTML = "Willekeurig getal: " + willekeurigGetal;
}