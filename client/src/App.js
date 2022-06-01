import React, { useState } from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css"

function App() {
  const [pages] = useState([
    {
      name: "add recipe"
    },
    { name: "breakfast" },
    { name: "lunch" },
    {
      name: "dinner"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="">
      
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
     
      <main className="container">
        <Page currentPage={currentPage}></Page>
      </main>
     
    </div>
  );
}

export default App;
