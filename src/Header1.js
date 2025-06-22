import React from 'react'
import  './Header.css'
import searchIcon from '@mui/material';




function Header1() {
  return (
    <div className='header'>
      <img className='header_logo'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUZTAxqPMuU5rf1r2QU1Im2mZMxTSbG6mNEqYHcLbxUSMPm-G7MGWqi2ATJu19T8vgk8&usqp=CAU' alt='Amazon Logo'/>
      <div className='header_search'>
            <input className='header_searchInput 'type='text' placeholder='Search Amazon'></input>
            <img className='seach_image' src='https://img.icons8.com/?size=100&id=132&format=png&color=000000'/>
            <searchIcon/>
           
       </div>
       

     
      <div className='header_nav'>
            <div className='header_option'>
        <span className='header_optionLineOne'>Hello</span> 
        <span className='header_optionLineTwo'>Sign In</span> 
            </div>
            <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span> 
        <span className='header_optionLineTwo'>&Orders</span> 
            </div>
            <div className='header_option'>
        <span className='header_optionLineOne'>Your</span> 
        <span className='header_optionLineTwo'>Prime</span> 
            </div>
         
           
      </div>
      <img className= 'shop_icon' src='https://cdn-icons-png.flaticon.com/128/2838/2838895.png'/>
      
    </div>
  )
}
export default Header1;
