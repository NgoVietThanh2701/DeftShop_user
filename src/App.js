import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./common/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
