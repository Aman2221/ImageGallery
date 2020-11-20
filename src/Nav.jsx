import React, { useState } from 'react'
import './Nav.css'

const Nav = () =>{
    const [img,setImg] = useState('');

    const InputVal = (event) => {
        setImg(event.target.value)
    }
    return(
        <>
        <div id='nav'>
            <h2>SEARCH<i class='bx bx-search'></i></h2>
            <input type='text' name='ipBx' placeholder='Search items' onChange={InputVal} value={img}/>
            <div id='img'>
                <img src={`https://source.unsplash.com/weekly/?${img}`} alt='img'/>
            </div>
        </div>
        </>
    )
}

export default Nav;