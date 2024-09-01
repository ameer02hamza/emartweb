"use client";
import React from "react";
import Clickcounter from "./components/clickcounter";
import Hovercounter from "./components/hoverHoc";
import InputTestField from "./components/inputfield";
/**
 *This is the testing component for the Test cases also you can
  add any other component here to make a trial version before using it any where else
 */
function TestPage() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen w-screen grid place-content-center">
      <form action={handleSubmit}>
        <InputTestField
          label="First Name"
          type="password"
          placeholder="Enter your first name"
        />
        <br />
        <InputTestField
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
        />
        <button>click here</button>
      </form>
    </div>
  );
}

export default TestPage;
