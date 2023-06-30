/*5. Dado el siguiente objeto {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
}
recorrer el objeto y mostrar cuántos usuarios están habilitados.*/

let objeto = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
};

let contador = 0;

for (const clave in objeto) {
    let estado = objeto[clave];
    if (estado == "habilitado") {
        contador++;
    }
}

console.log("El número de usuarios habilitados es: " + contador);