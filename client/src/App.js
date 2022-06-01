import React, { useState } from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar"

function App() {
  const [pages] = useState([
    {
      name: "add_recipe"
    },
    { name: "breakfast" },
    { name: "lunch" },
    {
      name: "dinner"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
     
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
     
    </div>
  );
}

export default App;
