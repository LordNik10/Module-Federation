import React from "react";

function Counter() {
  return (
    <>
      <h1>Ecco il bottone</h1>
      <button type="button" onClick={() => alert("hai cliccato il bottone")}>
        cliccami
      </button>
    </>
  );
}
export default Counter;
