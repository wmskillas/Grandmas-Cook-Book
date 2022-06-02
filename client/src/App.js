import React, { useState } from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";

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
<<<<<<< HEAD
    <div>
      <Navbar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Navbar>

      <main className='container'>
=======
    <body className="bodybg">
      <div className="navbg">
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </div>
      <br />
      <div>
>>>>>>> 2888ded729a41959a41d962e1438459f9aa6c125
        <Page currentPage={currentPage}></Page>
      </div>
    </body>
  );
}

export default App;
