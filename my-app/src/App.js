import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
};

export default App;
