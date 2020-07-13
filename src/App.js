import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResultTable } from "./components/Table"
import  Navbar  from "./components/Navbar"
import Header  from "./components/Header"



function App() {
  const [employee, setEmployee] = useState({
    list: []
  })

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then(res => {
      console.log(res)
      setEmployee({ list: res.data.results
        
      //   .map(result => {
      //   return { 
      //     name: result.name.first
      //   }
      // })
     })
    })
  }, [])

// sort by last name
  const sort = (e) => {
    console.log(e)
    setEmployee({ list: employee.list.sort((a, b) => a[e].last.localeCompare(b[e].last)) })
  }
// filters


  return (
    <div>
      <Navbar />
      <Header />
      <ResultTable results={employee.list} onClick={sort} />
    </div>
  );
}

export default App;
