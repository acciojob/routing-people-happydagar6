
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <div id="main">
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;