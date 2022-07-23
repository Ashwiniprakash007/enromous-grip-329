import React from 'react'
import './Search.css'
import {SearchIcon,CloseIcon} from '@chakra-ui/icons'

export const Search = ({value,something}) => {
  return (
    <div className={value ? "true" : "false"}>
     <div className='search-container'>
     <div className='search-in-div'>
     
      <input type="text" placeholder='What do you want to Learn'/>
      
     </div>
     <div className='back-button' onClick={()=>{
        something(false)
     }}> <CloseIcon/></div>
     </div>
    </div>
    
  )
}
