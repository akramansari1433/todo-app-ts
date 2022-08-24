import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

interface logedUser {
   userId: number;
   name: string;
}

function App() {
   const [user, setUser] = useState<logedUser>(
      JSON.parse(window.localStorage.getItem("user")!)
   );

   return (
      <BrowserRouter>
         <Navbar user={user} setUser={setUser} />
         <Routes>
            <Route
               path="/login"
               element={
                  user ? <Navigate to="/" /> : <Login setUser={setUser} />
               }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home userId={user.userId} />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
