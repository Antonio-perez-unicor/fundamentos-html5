const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
 {
    pregunta: "1: ¿En la fracción ¾  el numerador es el número?",
    respuestas: {
    a: "A: el número 3",
    b: "el número 4",
	c: "Ninguno de los anteriores", 
    
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2:¿Cómo se escribe la fracción cinco medio?",
    respuestas: {
     a:"5/5" ,
     b:"5/2" ,
     c:"2/5" ,

    },
    respuestaCorrecta: "b",
  },

 {
    pregunta: "3: ¿En la fracción 5/6 cuál numeron es el denominador?",
    respuestas: {
      a: "el número 5",
      b: "el número 3",
      c: "el número 6",  
      d:"Todas son correctas",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "4: ¿ para restar dos fracciones se debe invertir la segunda fracción y luego restar?",
    respuestas: {
      a: "verdadero",
      b: "falso",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "5: Juanito camino 3/2 km. Y al otro día camino 5/2 de  km ¿Cuánto camino en los dos días?",
    respuestas: {
      a: "8 Km",
      b: "6 Km",
      c: "4 Km",

    },
    respuestaCorrecta: "c",
  },

{
    pregunta: "6:  El resultado de sumar 7/4  y 1/3 es igual  a: ",
    respuestas: {
       a: "un entero, un medio ",
       b: "dos entero un medio",
       c: "un entero, un doceavo",
       d: "dos enteros, un doceavo"

    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "7:si juan tiene 3/2  kilos de pan y se come un 1/4 de kilo. ¿Cuántos kilos de pan le quedan?",
    respuestas: {
       a: "3/4", 
       b: "1/4",
       c: "5/4",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8: si la fracción 2/3  aumenta en 2/4. ¿Que fracción resulta?",
    respuestas: {
      a: "4/7",
      b: "4/12",
      c: "7/6",
    },

    respuestaCorrecta: "a",  
    },
  { 
     
     pregunta: "9: una fracción es un numero que representa la cantidad que tomamos de una cifra entera.",
        respuestas: {     
     a: "verdadero",
     b: "falso",
    
    },

    respuestaCorrecta: "a",  
    },
	
  {
  pregunta: "10:  el resultado 5/3 + 1/2 es igual a:",
      
    respuestas: {
	a: "6/6",
    b:"1",
    c:"13/6",
    d:"6/5"
    },

    respuestaCorrecta: "d",  
    },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<br/><label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              <br/></label>`
      );
    }
	  

