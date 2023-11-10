import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getallHistory } from '../services/allAPI'

function WatchHistory() {
const[his,setHis]=useState([])

  const watchHistory=async()=>{
    const {data}= await getallHistory()
    console.log(data)
    setHis(data)
  }

const removehis=async(id)=>{
  await deleteHistory(id)
  watchHistory()
}

  useEffect(()=>{
    watchHistory()
  },[])


  console.log(his)
  return (
    <div className='p-4'>
      <div className='d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link style={{textDecoration:'none'}} to={'/home'}><i class="fa-solid fa-house me-2"></i>Back to Home</Link>
      </div>
      
      <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Caption</th>
      <th scope="col">Url</th>
      <th scope="col">Timestamp</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {his.length>0?
    his.map((item,index)=>(<tr> <th scope="row">{index+1}</th>
      <td>{item.caption}</td>
      <td><a style={{textDecoration:'none'}} target='_blank' href={item.embedLink}>{item.embedLink}</a></td>
      <td>{item.timestamp} </td>
      <td><button className='btn btn-danger' onClick={()=>removehis(item?.id)}> <i class="fa-solid fa-trash fa-xl"></i></button> </td>
    </tr>)):
     
    <p>nothing to display</p>}
    
    </tbody>
    </table>



      </div>
    </div>
  )
}

export default WatchHistory