import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
function Home() {
    const [todos,setTodos]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err=>console.log(err))
    })
  return (
    <>
        <div className="home">
            <div><h2>Todo List</h2></div>
            <Create></Create>
            {
                todos.length===0
                ?
                <div><h2>No records</h2></div>
                :
                todos.map(todos=>(
                    <div>
                        {todos.task}
                    </div>
                ))
            }
        </div>
        
    </>
    
  )
}

export default Home