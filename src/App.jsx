import React from "react";
import Buttons from "./components/Buttons";
import ButtonGradient from "./assets/svg/ButtonGradient"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        <Buttons className="mt-10" href="#login">
          Something
        </Buttons>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
