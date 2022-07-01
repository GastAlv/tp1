// Funcion, indicar que numero es el mayor y cual es el menor.
function func_ej1(){
    let ej1_n1 = parseFloat(document.getElementById("ej1_n1").value);
    let ej1_n2 = parseFloat(document.getElementById("ej1_n2").value);
    let ej1_n3 = parseFloat(document.getElementById("ej1_n3").value);
    
    if (ej1_n1 > ej1_n2 && ej1_n1 > ej1_n3) {
    
        document.getElementById("ej1_resultado").value = "Valor 1 es el mayor";

    }
    
    if (ej1_n2 > ej1_n1 && ej1_n2 > ej1_n3) {

        document.getElementById("ej1_resultado").value = "Valor 2 es el mayor";

    }
   
    if (ej1_n3 > ej1_n1 && ej1_n3 > ej1_n2) {

        document.getElementById("ej1_resultado").value = "Valor 3 es el mayor";
       
    }

}     

// Suma de dos elementos.
function func_ej2(){
    let ej2_n1 = parseFloat(document.getElementById("ej2_n1").value);
    let ej2_n2 = parseFloat(document.getElementById("ej2_n2").value);
    
    const suma = ej2_n1 + ej2_n2

    document.getElementById("ej2_resultado").value = suma

}

//Multiplicador de palabras

function func_for(){
    let ej3_palabra = (document.getElementById("ej3_palabra").value);
    let ej3_n1 = parseFloat(document.getElementById("ej3_n1").value);
    frase = ""
    for (x = 0; x < ej3_n1; x++){
    
        frase = frase + ej3_palabra
}

document.getElementById("ej3_resultado").value = frase

}

// Convetidor de grados c y f

function func_convert(){
    let ej4_grados = parseFloat(document.getElementById("ej4_grados").value);
    let ej4_grados_f = parseFloat(document.getElementById("ej4_grados_f").value);
    
              
    const convertidor_c = (ej4_grados * (9/5) + 32)

    const convertidor_f = (ej4_grados_f - 32) * (5/9)
    if (!Number.isNaN(convertidor_c)) {
        document.getElementById("ej4_resultado").value = convertidor_c                
    } else {
        document.getElementById("ej4_resultado").value = convertidor_f                
    }
               
}

// Contador de una palabra
function func_contador(){
    const palabra = document.getElementById("ej5_palabra").value;
    const cantidad = palabra.length;
    
    document.getElementById("ej5_resultado").value = cantidad
}


// Determinar si es par o impar
function func_par(){
    let resultado = document.getElementById("ej6_resultado");
    const numero = document.getElementById("ej6_n1").value;        
    const valor = numero % 2;
    
    if (valor === 0) {
        resultado.textContent = `El numero ${numero} es par`
    } else {
        resultado.textContent = `El numnero ${numero} es impar`
    }
}
//Determinar multiplos de 3
function func_multiplos3(){
    const num1 = document.getElementById("ej7_n1").value;
    const num2 = document.getElementById("ej7_n2").value;
    //const multiplos = document.getElementById("ej7_resultado")


    if (num1 > num2) {
        mayor = num1;
        menor = num2;               
    } else {
        mayor = num2;
        menor = num1;
    }
    
    while (menor <= mayor) {
        const calculo = menor % 3;
        if (calculo === 0) {
            //multiplos.textContent = `Es ${menor} multiplo de 3 `
            alert(`Es ${menor} multiplo de 3 `)                    
        }
        menor++;                       
    }
}

// Funcion numeros primos
const func_primos = () => {
const num1 = document.getElementById("ej8_num1").value * 1;
const resultado = document.getElementById("resultado_ej8");
resultado.textContent = "";

    const esPrimo = (num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
            return false;
            }
            return true;
        }
    };
    for (let x = 0; x <= num1; x++) {
        esPrimo(x) && (resultado.textContent = resultado.innerHTML + " | " + x);
    }
};


// Mostrar datos en pantalla
function func_datos(){
            
    let nombre = document.getElementById("ej8_nombre").value;
    let apellido = document.getElementById("ej8_apellido").value;
    let edad = document.getElementById("ej8_edad").value;
    let ciudad = document.getElementById("ej8_ciudad").value;
    resultado = document.getElementById("ej8_datos");

    resultado.textContent = `Mi nombre es ${nombre} ${apellido}, tengo ${edad} años. Nací en la ciudad de ${ciudad}`;

}

funcion10 = () => {
    num1 = document.getElementById("ej10_num1").value * 1,
    num2 = document.getElementById("ej10_num2").value * 1,
    resultado = document.getElementById("resultado_ej10");
    resultado.textContent = "";
  
    let menor = Math.min(num1, num2);
    let mayor = Math.max(num1, num2);
  
    for (let x = 0; x <= mayor; x++) {
      if (x > menor && x < mayor) {
        resultado.textContent = resultado.innerHTML + " | " + x;
      }
    }
  };