<?php

function sumarRecursos(int $a, int $b): int{
    return $a + $b;
}

function tieneMasRecursos(int $a, int $b): bool{
    return $a > $b;
}

function lineaMayor(int $a, int $b): int{
    if(tieneMasRecursos($a, $b)){
        return $a;
    } else {
        return $b;
    }
}

function existeLineaConRecursos(array $lineasDeProduccion, int $cantidad): bool{
    foreach($lineasDeProduccion as $linea){
        if($linea == $cantidad){
            return true;
        }
    }
    return false;
}

function lineaMaxima(array $lineasDeProduccion): int{
    $max = $lineasDeProduccion[0];

    foreach($lineasDeProduccion as $linea){
        $max = lineaMayor($max, $linea);
    }

    return $max;
}

function totalDeRecursos(array $lineasDeProduccion): int{
    $total = 0;

    foreach($lineasDeProduccion as $linea){
        $total = sumarRecursos($total, $linea);
    }

    return $total;
}

function produccionEnParalelo(int $cantidad, int $lineasDeProduccion): int{
    $resultado = 0;

    for($i = 0; $i < $lineasDeProduccion; $i++){
        $resultado = sumarRecursos($resultado, $cantidad);
    }

    return $resultado;
}

function produccionReplicada(int $base, int $nivel): int{
    $resultado = 1;

    for($i = 0; $i < $nivel; $i++){
        $resultado = produccionEnParalelo($resultado, $base);
    }

    return $resultado;
}

function lineasEnCrecimiento(array $lineasDeProduccion): array{
    $resultado = [];
    $resultado[] = $lineasDeProduccion[0];

    for($i = 1; $i < count($lineasDeProduccion); $i++){
        if($lineasDeProduccion[$i] > $lineasDeProduccion[$i - 1]){
            $resultado[] = $lineasDeProduccion[$i];
        }
    }

    return $resultado;
}
?>




 EJERCICIO 2


 2.1)
 Las funciones produccionEnParalelo y produccionReplicada tienen en común que:
 - utilizan un ciclo (for)
 - acumulan un resultado en cada iteración
 - repiten una operación varias veces

 Se diferencian en que:
 - produccionEnParalelo realiza sumas repetidas (simula una multiplicación)
 - produccionReplicada realiza multiplicaciones repetidas (simula una potencia)

 2.2)
 Sí, este patrón se puede generalizar ya que ambas funciones repiten un proceso
 acumulativo a lo largo de varios ciclos. Se puede crear una función que reciba
 el proceso como parámetro y lo aplique múltiples veces.


 EJERCICIO 3


 3.1)
 Las funciones de orden superior son funciones que pueden recibir otras funciones
 como parámetro o devolver funciones como resultado. En PHP se utiliza el tipo
 "callable" para poder pasar funciones como argumento. Esto permite reutilizar lógica
 y hacer el código más flexible.

3.2)
 La función procesarEnCadena permite aplicar un proceso varias veces acumulando
 un resultado. Recibe:
 - un valor base ($x)
 - la cantidad de ciclos
 - una función ($proceso)
 - un valor inicial
 y devuelve el resultado final luego de aplicar el proceso en cada ciclo.

 3.3)
 Las funciones produccionEnParaleloHOF y produccionReplicadaHOF son versiones
 de las funciones originales pero utilizando la función generalizada
 procesarEnCadena. De esta manera se reutiliza lógica y se evita repetir código.
