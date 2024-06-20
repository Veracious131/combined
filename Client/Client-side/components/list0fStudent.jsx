import React from 'react'
import axios from "axios"
function List0fStudent() {
    let url ="http://localhost:3000/"
    axios.get(url)
    .then((res) =>{
        console.log(res.data);
    })
    .catch((err) =>{
        console.log(err);
    })
  return (
    <div>

        <p>list0fStudent</p>
        <button className='bg-sky-600 text-white'>see list of student</button>

    </div>
  )
}

export default List0fStudent