"use client";
import React from "react";

export default function Contador() {
  const [contador, incrementarContador] = React.useState(0);

  const incrementarContador = () => {
    incrementarContador(contador + 1);
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-4">Contador</h1>
      <p className="text-sm text-gray-700 dark:text-gray-200">
        Contador: {contador}
      </p>
      <button
        onClick={incrementarContador}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Incrementar
      </button>
    </div>
  );
}