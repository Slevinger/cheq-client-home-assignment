import React from "react";
import { Provider as VastsProvider } from "./context/VastsContext";
import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <VastsProvider>
      <div className="App">
        <Table />
      </div>
    </VastsProvider>
  );
}

export default App;
