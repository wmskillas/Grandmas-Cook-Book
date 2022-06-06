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
  
// const fetchData = async () => {
//   const newData = await fetch('/api', {
//     method: 'POST',
//     headers: {
//       'Content Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//   .then(res => res.json())
//   console.log(newData);
//   setReturnedData(newData.result)
// }

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <body className='bodybg' >
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
     </body>
   
  );
}

export default App;
