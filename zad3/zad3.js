function range(a, b) {
    const wynik = [];
    for (let i = a; i <= b; i++) {
        wynik.push(i);
    }
    return wynik;
}

console.log(range(7, 12));
