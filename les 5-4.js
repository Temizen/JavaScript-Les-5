function toonWillekeurigGetal() {
    const willekeurigGetal = Math.round(Math.random() * 100); // Getal tussen 0 en 100
    document.getElementById('DivResult').innerHTML = "Willekeurig getal: " + willekeurigGetal;
}