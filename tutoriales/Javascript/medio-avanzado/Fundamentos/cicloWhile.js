/*
    CICLOS WHILE y DO WHILE
        
    - WHILE:
        - Igual que el ciclo for pero con estructura diferente mas simple. Tiene una expresión condicional.
        - Se usa menos que el ciclo for
        - Cuidado con los ciclos infinitos
        - Solemos tener fuera del ciclo una vble indice con el valor inicial y lo aumentarlo dentro del ciclo
    
    - DO WHILE:

        - A diferencia del ciclo while. Se ejecuta al menos una vez


*/

// Ejemplo ciclo while: Contar de uno a diez
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// Ejemplo ciclo do while. Contar de uno a diez
let i2 = 1;
do {
    console.log(i2);
    i2++;
} while (i2 <= 10);

// Ejemplo ciclo do while. El indice está fuera de rango. Entrará una vez y mostrará 100
let i3 = 100;
do {
    console.log(i3);
    i3++;
} while (i3 <= 10);


