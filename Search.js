import React, { useState } from "react"
import { Card } from "react-bootstrap";
import "./Search.css";

const SearchUser = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div>
        
      <input onChange={fetchData} label="Search User" className="Search" />
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <Card>
            <li key={user.id}>{user.name}
            </li></Card>
          ))}
        </ul>
      )}
      
    </div>
  )
}

export default SearchUser