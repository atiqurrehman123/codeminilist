import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import PostDetail from "./components/PostDetail";
import PostTable from "./components/PostTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PostTable/>}/>
        <Route exact path="/postdetail/:id" element={<PostDetail/>}/>
      </Routes>
  </Router>
  );
}

export default App;
