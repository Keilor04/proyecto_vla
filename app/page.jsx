"use client";

import Image from "next/image";
import { useState } from 'react';

import Navigation from "./components/Navigation";
import Content from "./components/Content";  
import Contador from "./components/Contador";

// Se definen las variables que se van a utilizar

const opcionesmenu = [
  { id: 1, nombre: "Acerca De", url: " " },
  { id: 2, nombre: "Tecnologia", url: " " },
  { id: 3, nombre: "Contacto", url: " " },
];

const menu = function () {
  const [elementoActivo, setElementoActivo] = useState(1);

  // Se establece una constante para el contador y se inicializa en 0
  // Se establece una función para incrementar el contador
  //se usa useState para asignar el valor inicial del contador a 0
  // useState es un hook de React que permite manejar el estado en componentes funcionales
  const [contador, setContador] = useState(0);

  //Se establece una función para incrementar el contador
  //handleIncrement es una función que se pasa como prop a Contador como componente hijo
  //y sirve para actualizar el estado del contador en el componente padre
  const handleIncrement = (newValue) => {
    setContador(newValue); // Actualiza el estado del contador en el componente padre
  };

  return (

    <nav>
      <h1 className="text-4xl font-extrabold mb-4">Menu</h1>
      {opcionesmenu.map((opcion) => (
        <a
          key={opcion.id}
          href={opcion.url}
          className="p-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => {
            setElementoActivo(opcion.id);
          }}
        >
          {opcion.nombre}

          {/* Se indica que elementoActivo es igual a la opción id seleccionada
      y && sirve para que si se cumple entonces se ejecute el código
      que está a la derecha de && */}

          {elementoActivo === opcion.id &&
            (<span>→</span>)}
        </a>
      ))}

<Content elementoActivoHijo={elementoActivo} />




      <h1>Componente padre</h1>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setContador(contador + 1)}
      >
        Click Me: {contador}
      </button>
      <br />
      <hr />

      <Contador
        initialValue={contador}
        onIncrement={handleIncrement} />

    </nav>

  );
};



export default function Home() {
  // Ensure this component is used in your application
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation name="Keilor RC" />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {menu()}

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.jsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly; then deploy to production
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}