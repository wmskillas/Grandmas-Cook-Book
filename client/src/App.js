import React, { useState } from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

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
    <div className='bodybg' >
      <nav className='navbg'>
        <Navbar
        
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </nav>
      <br/> 
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
     </div>
   
  );
}

export default App;
