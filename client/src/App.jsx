import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, Posts } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex dark:bg-[#8BAA36] bg-white justify-between items-center sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-[#83868b]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create your image
        </Link>
      </header>
      <main
        className="sm:px-8 px-4 py-8 w-full dark:bg-[#1E1F28]
       bg-[#f9fafe] min-h-[calc(100vh-73px)]"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<Posts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
