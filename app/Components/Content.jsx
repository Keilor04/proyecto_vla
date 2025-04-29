"use client";
import React from "react";

//Se estable elemento activo por defecto en 1, 
// que es el primer elemento del array de opcionesmenu
export default function Content(elementoActivo = 1) {
  return (
    <div className="max-w-lg mx-auto p-8">
       { elementoActivo === 1 &&
          (<div className="max-w-lg">
            <h1 className="text-4xl font-extrabold mb-4">About</h1>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc at bibendum facilisis, nunc nisl aliquet nunc, nec
              aliquet nunc nisl nec nunc. Sed tincidunt, nunc at bibendum
              facilisis, nunc nisl aliquet nunc, nec aliquet nunc nisl nec nunc.
            </p>
          </div>)
      }

      { elementoActivo === 2 &&
          (<div className="max-w-lg">
            <h1 className="text-4xl font-extrabold mb-4">Experiencia</h1>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc at bibendum facilisis, nunc nisl aliquet nunc, nec
              aliquet nunc nisl nec nunc. Sed tincidunt, nunc at bibendum
              facilisis, nunc nisl aliquet nunc, nec aliquet nunc nisl nec nunc.
            </p>
          </div>)
      }

      { elementoActivo === 3 &&
          (<div className="max-w-lg">
            <h1 className="text-4xl font-extrabold mb-4">Contacto</h1>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc at bibendum facilisis, nunc nisl aliquet nunc, nec
              aliquet nunc nisl nec nunc. Sed tincidunt, nunc at bibendum
              facilisis, nunc nisl aliquet nunc, nec aliquet nunc nisl nec nunc.
            </p>
          </div>)
      }
    </div>
  );
}