import React, { useState } from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css"

function App() {
  const [pages] = useState([
    {
      name: "Add Recipe"
    },
    { name: "Breakfast" },
    { name: "Lunch" },
    {
      name: "Dinner"
    },
    {
      name: 'Login'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    
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
