import React from "react";
import "./App.css";
// fare esempio importando poi button
// const Button = React.lazy(() => import("Remote/Button"));
const Counter = React.lazy(() => import("Remote/Counter"));

function App() {
  return (
    <div className="App">
      <h1>Host</h1>
      {/* <Button /> */}
      <Counter />
    </div>
  );
}

export default App;
