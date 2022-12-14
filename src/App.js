// import { Box } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar";
import Box from "./components/Box"
import Newsslider from "./components/Newsslider";
import { BrowserRouter,Routes,Route,Link,Fragment } from "react-router-dom";
import Chart from "./components/Chart";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter >
        <Routes>
          <Route path="/news" element={<Newsslider />} />
          <Route path="/" element={[<Chart />, <Box />]} />

        {/* <Navbar />
        <Box />
        <Newsslider /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;