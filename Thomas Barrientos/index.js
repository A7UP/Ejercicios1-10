function ejercicio8(){
  
    let result1 = prompt("Ingrese una cadena de texto");

    let date = palabra1(result1);

    console.log(date);

}

function palabra1(texto){
    
    var textoLimpio = texto.replace(/ /g,  '' ).toLowerCase();
    var textoInvertido = textoLimpio.split('').reverse().join('');

    if(textoLimpio === textoInvertido) {
        return 'Es polindromo';
    } else {
        return 'No es palindromo';
    }
}