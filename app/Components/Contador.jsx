"use client";

import React from "react";

// Se importa el hook useState de React para manejar el estado del contador
import { useState } from "react";

// Se crea este componente hijo llamado Contador que se conecta con el componente padre llamado Page.jsx

 
// Se importa el componente Contador que se encuentra en la carpeta Components
//Se usan los parametros initialValue y etiqueta para inicializar el contador 
// y la etiqueta que se va a mostrar en pantalla ademas 
//onIncrement sirve para enviar el valor del contador al componente padre
export default function Contador({ initialValue = 0, etiqueta = "Contador", onIncrement }) {
  //se defien una constante reactiva llamada contador y se inicializa en 0
  const [contador, setContador] = useState(initialValue);

  const incrementarContador = () => {
    const newValue = contador + 1;
    // setConstador sirve para actualizar el estado del contador en el componente hijo
    setContador(newValue);
    //Esta es una condición que verifica si existe un prop llamado onIncrement. 
    // Esto sugiere que el componente que contiene esta función "newValue" podría recibir una función como prop desde su componente padre.
    if (onIncrement) {
      onIncrement(newValue);
    }
  };

  return (
    <div>
      <br />
      <h1>Componente hijo</h1>
      <p>{etiqueta}: {contador}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}