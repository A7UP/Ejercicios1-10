function ejercicio6 (){
    var num = prompt ("Ingresar un numero");
    
    let paroImp1 = paroImp(num);

    console.log(paroImp1);
}

function paroImp(num) {
    if (numero == 0 ) {
        return "ingrese un numero valido";
    }
    else if (num % 2 === 0) {
        return `El numero ${num} es par`;
    }
    else if (num % 2 !==0) {
        return `El numero ${num} es impar`;
    }
}