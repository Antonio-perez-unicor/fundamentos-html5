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

