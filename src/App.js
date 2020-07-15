import React from "react";
import { Provider as VastsProvider } from "./context/VastsContext";
import Table from "./components/Table";
import "./App.css";
import Errors from "./components/Errors";

function App() {
  return (
    <VastsProvider>
      <Errors />
      <Table />
    </VastsProvider>
  );
}

export default App;
