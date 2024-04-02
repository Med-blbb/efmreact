import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListStg from "./components/ListStg";
import AddStg from "./components/AddStg";
import DetailStg from "./components/DetailStg";
import Header from "./components/Header";
import Login from "./components/Login";
import { useSelector } from "react-redux";
function App() {
  const isConnect = useSelector((state=>state.isConnect))
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={ isConnect ?<ListStg /> : <Login/>} />
          <Route
            path="/liststg"
            element={isConnect ? <ListStg /> : <Login />}
          />
          <Route path="/addstg" element={isConnect ? <AddStg /> : <Login />} />
          <Route path="/:nom" element={isConnect ?<DetailStg /> : <Login/> } />
          <Route path="/login" element={isConnect?<Login /> : <Login/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
