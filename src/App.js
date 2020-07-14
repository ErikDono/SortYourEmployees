import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResultTable } from "./components/Table"
import Navbar from "./components/Navbar"
import Header from "./components/Header"



function App() {
  const [employee, setEmployee] = useState({
    list: []
  })

  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then(res => {
      console.log(res.data.results)
      return setEmployee({
        list: res.data.results
      })
    })
  }, [])

  // sort by last name
  const sort = (e) => {
    console.log(e)
    switch (e) {
      case "name":
        setEmployee({ list: employee.list.sort((a, b) => a[e].last.localeCompare(b[e].last)) })
        break;
      case "location":
        setEmployee({ list: employee.list.sort((a, b) => a[e].country.localeCompare(b[e].country)) })
        break;
      case "time with company":
        setEmployee({
          list: employee.list.sort((a, b) => a.registered.age - b.registered.age)
        })
        break;
      default:
        alert("Erik, set that shit up")
        break;
    }
  }

  const search_list = (e) => {
    setEmployee({
      list: employee.list.filter((emp, index) => emp.name.last.includes(employee.search))
    })
  }

  return (
    <div>
      <Navbar />
      <Header />
      <input type="text" value={employee.search} placeholder="Search" onChange={e => setSearch(e.target.value)} />
      <ResultTable results={employee.list} onClick={sort} />
    </div>
  );
}

export default App;
