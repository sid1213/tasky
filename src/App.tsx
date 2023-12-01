import React from "react";
import "./App.scss";
import Container from "./components/Container";
import { TaskProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Container />
      </TaskProvider>
    </div>
  );
}

export default App;
