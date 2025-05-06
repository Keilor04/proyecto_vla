"use client";

import React from "react";

export default function Content({ elementoActivoHijo = 1 }) {
  return (
    <div className="p-4 text-center">
      { elementoActivoHijo === 1 &&
                (<div className="max-w-lg">
                  <h1 className="text-4xl font-extrabold mb-4">About #1</h1>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tincidunt, nunc at bibendum facilisis, nunc nisl aliquet nunc, nec
                    aliquet nunc nisl nec nunc. Sed tincidunt, nunc at bibendum
                    facilisis, nunc nisl aliquet nunc, nec aliquet nunc nisl nec nunc.
                  </p>
                </div>)
            }
      
            { elementoActivoHijo === 2 &&
                (<div className="max-w-lg">
                  <h1 className="text-4xl font-extrabold mb-4">Experiencia #2</h1>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tincidunt, nunc at bibendum facilisis, nunc nisl aliquet nunc, nec
                    aliquet nunc nisl nec nunc. Sed tincidunt, nunc at bibendum
                    facilisis, nunc nisl aliquet nunc, nec aliquet nunc nisl nec nunc.
                  </p>
                </div>)
            }
      
            { elementoActivoHijo === 3 &&
                (<div className="max-w-lg">
                  <h1 className="text-4xl font-extrabold mb-4">Contacto #3</h1>
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