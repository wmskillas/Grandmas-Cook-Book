import React, { useState } from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import "../src/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pages] = useState([
    {
      name: "Add Recipe",
    },
    { name: "Breakfast" },
    { name: "Lunch" },
    {
      name: "Dinner",
    },
    {
      name: "Login",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <body className='bodybg'>
      <div className='navbg'>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </div>
      <br />
      <div>
        <Page currentPage={currentPage}></Page>
      </div>
    </body>
  );
}

export default App;
