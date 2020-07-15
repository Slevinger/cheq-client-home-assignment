import React from "react";
import { Provider as VastsProvider } from "./context/VastsContext";
import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <VastsProvider>
      <Table />
    </VastsProvider>
  );
}

export default App;
