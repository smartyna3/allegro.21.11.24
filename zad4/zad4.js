const tablica = [4, 7, 9];

function sum(arr) {
    let wynik = 0;  
    arr.forEach(element => {
        wynik += element;
    });
    return wynik; 
}

console.log(sum(tablica)); 
