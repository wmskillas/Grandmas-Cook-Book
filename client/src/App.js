import React, { useState } from "react";
import {} from 'react-router-dom';
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
    <section className='bodybg' >
      <div className='navbg'>
        <Navbar
        
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </div>
      <br/> 
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
     </section>
   
  );
}

export default App;
