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
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path="/" element={[<Chart />, <Box />]} />
          <Route path="/news" element={<Newsslider />} />

        {/* <Navbar />
        <Box />
        <Newsslider /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;