import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=> {
    //     fetch("https:/api.github.com/users/Shkkhwaja").then(res => res.json()).then(data => {
    //     console.log(data)
    //     setData(data)
    // })
    // },[])
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers {data.followers}</div>
    <img src={data.avatar_url} alt="c" className='h-40 rounded-full' />
    <h2 className='text-2xl relative '>
        <span className='text-blue-500 bg-cyan-100 p-2 absolute left-44 bottom-24'>{data.name}</span>
      </h2>  
      </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch("https:/api.github.com/users/Shkkhwaja")
    return res.json()
}
