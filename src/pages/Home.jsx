import React, { useState } from 'react'
import Add from '../componentes/Add'
import View from '../componentes/View'
import Category from '../componentes/Category'
function Home() {
  const[uploadVideo,setUploadVideStaus]=useState({})
  return (
    <div>
      <div className=' border border-dark p-3'>
       <Add setUploadVideo={setUploadVideStaus}/>
      </div>
      <div className='border border-dark p-3 d-flex   justify-content-between'>
    
      <View uploadVideos={uploadVideo} />
      <Category/>
      </div>
    </div>
  )
}

export default Home