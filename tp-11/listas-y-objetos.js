var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 */
function ordenarPorApellido(listaDePersonas) {
    listaDePersonas.sort(function(a, b) {
        return a.apellido.localeCompare(b.apellido);
    });

    return listaDePersonas;
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 */
function soloNombres(listaDePersonas) {
    let nombres = [];

    for (let persona of listaDePersonas) {
        nombres.push(persona.nombre);
    }

    return nombres;
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 */
function promedioEdades(listaDePersonas) {
    let suma = 0;

    for (let persona of listaDePersonas) {
        suma = suma + persona.edad;
    }

    return suma / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 */
function cumplirAños(listaDePersonas) {
    let nuevaLista = [];

    for (let persona of listaDePersonas) {
        let nuevaPersona = {
            apellido: persona.apellido,
            nombre: persona.nombre,
            edad: persona.edad + 1,
            documento: persona.documento
        };

        nuevaLista.push(nuevaPersona);
    }

    return nuevaLista;
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 */
function soloMayoresDeEdad(listaDePersonas) {
    let mayores = [];

    for (let persona of listaDePersonas) {
        if (persona.edad > 18) {
            mayores.push(persona);
        }
    }

    return mayores;
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 */
function laPersonaMayor(listaDePersonas) {
    let personaMayor = listaDePersonas[0];

    for (let persona of listaDePersonas) {
        if (persona.edad > personaMayor.edad) {
            personaMayor = persona;
        }
    }

    return personaMayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    let nuevaLista = [];

    for (let i = 0; i < listaDePersonas.length; i++) {
        let persona = {
            apellido: listaDePersonas[i].apellido,
            nombre: listaDePersonas[i].nombre,
            edad: listaDePersonas[i].edad,
            documento: listaDePersonas[i].documento
        };

        if (i < listaDeHelados.length) {
            persona.heladoFavorito = listaDeHelados[i];
        } else {
            persona.heladoFavorito = "vainilla";
        }

        nuevaLista.push(persona);
    }

    return nuevaLista;
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
