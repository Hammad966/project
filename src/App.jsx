import React from "react";
import CollectionPage from './pages/CollectionPage'
import {Route, Routes} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
 
  return (
    <div className="min-h-screen w-full text-white bg-gray-950">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/collection" element={<CollectionPage/>} />
      </Routes>
    <ToastContainer/>
    </div>
  );
};

export default App;
