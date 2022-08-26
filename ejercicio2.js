"use strict";

let cat1 = 1000, cat2 = 1500, cat3 = 2000;
let subcatA = 1.5, subcatB = 2, subcatC = 2.5;
let sueldo;

let categoria = parseInt(prompt(`¿Cúal es tu categoría (1, 2 ó 3)?`));
let subcategoria = prompt(`¿Cúal es tu subcategoría (A, B ó C)?`);

if (categoria == 1){
    switch (subcategoria){
        case "a":
            sueldo = 1000 * 1.5;
            break;
        case "b":
            sueldo = 1000 * 2;
            break;
        case "c":
            sueldo = 1000 * 2.5;
            break
    }

    if (sueldo >= 1500 && sueldo <= 3000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Inicial".`);
    } else if (sueldo > 3000 && sueldo <= 4000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Intermedio".`);
    } else if (sueldo > 4000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Avanzado".`);
    }
} else if (categoria == 2){
    switch (subcategoria){
        case "a":
            sueldo = 1500 * 1.5;
            break;
        case "b":
            sueldo = 1500 * 2;
            break;
        case "c":
            sueldo = 1500 * 2.5;
            break
    }

    if (sueldo >= 1500 && sueldo <= 3000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Inicial".`);
    } else if (sueldo > 3000 && sueldo <= 4000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Intermedio".`);
    } else if (sueldo > 4000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Avanzado".`);
    }
} else if (categoria == 3){
    switch (subcategoria){
        case "a":
            sueldo = 2000 * 1.5;
            break;
        case "b":
            sueldo = 2000 * 2;
            break;
        case "c":
            sueldo = 2000 * 2.5;
            break
    }

    if (sueldo >= 1500 && sueldo <= 3000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Inicial".`);
    } else if (sueldo > 3000 && sueldo <= 4000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Intermedio".`);
    } else if (sueldo > 4000){
        alert(`Tu sueldo es: u$s${sueldo} y está en el rango "Avanzado".`);
    }
}

