import React from 'react'
import { useLocation } from 'react-router'

const CurrentPath = () => {

    const loaction = useLocation();

  return (
    <div className='px-38 py-14'>
        {/* <p className='text-l'>Home { loaction.pathname }</p> */}
        {location.pathname === "/" ? "Home" : `Home ${location.pathname}`}
      
    </div>
  )
}

export default CurrentPath
