"use client";

import React from "react";

// Basic TypeScript examples
const myString: string = "Hello, TypeScript!";
const myNumber: number = 42;
const myBoolean: boolean = true;

const myArray: number[] = [1, 2, 3, 4, 5];
const myTuple: [string, number] = ["Age", 30];
const myObject: { name: string; age: number } = { name: "Jose", age: 30 };

// Function with typed parameters and return type
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Enum example
enum Navigation {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// Define a TypeScript interface for props
interface GreetingProps {
  name: string;
  age?: number; // Optional property
}

// A functional component using the props interface
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

// Example of a function with typed parameters and return value
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// Example of a union type
type Status = "success" | "error" | "loading";

const StatusMessage: React.FC<{ status: Status }> = ({ status }) => {
  return <p>Status: {status}</p>;
};

// Main component to showcase examples
const TypescriptExamples: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">TypeScript Examples</h1>
      <Greeting name="Jose" age={30} />
      <Greeting name="Maria" />
      <p>Sum of 5 and 10 is: {addNumbers(5, 10)}</p>
      <StatusMessage status="success" />
    </div>
  );
};

export default TypescriptExamples;