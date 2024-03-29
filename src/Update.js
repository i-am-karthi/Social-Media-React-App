import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Update = ({posts,handleedit,edittitle,setedittitle,editbody,seteditbody}) => {
    const {id}=useParams();
    const k = posts.find((x) => (x.id).toString() == id)
  useEffect(()=>{
     if(k){
    seteditbody(k.body)
    setedittitle(k.title)
   }
  },[])
  return (
    <div className='edit'>
        <label htmlFor='edittitle'>Title:</label>
        <input
          type='text'
          id='edittitle'
          className='edittitle'
          placeholder='Add title'
          required
         value={edittitle}
          onChange={(e) => setedittitle(e.target.value)}
        />

        <label htmlFor='editbody'>Post:</label>

        <textarea
         id='editbody'
          className='editbody'
          placeholder='Add Content'
          value={editbody}
          required
          onChange={(e) => seteditbody(e.target.value)}
        />
        <br></br>
        <button onClick={()=>handleedit({id})}>Save</button>
    </div>
  )
}

export default Update 