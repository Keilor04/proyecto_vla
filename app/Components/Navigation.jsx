"use client";

import React from "react";

export default function Navigation({ name }) {
  return (
    <div className="p-4 text-center">
      <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
        Esta es la navegacion {name}
      </p>
    </div>
  );
}