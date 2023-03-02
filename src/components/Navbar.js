import {Link} from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import './Navbar.css'
import DropDown from './DropDown'


  
const Navbar=() => {
////////////////////////
const [click, setClick] = useState(false)
const [dropdown, setDropdown] = useState(false)
const changeClick = () => setClick(!click)

const onMouseEnter = () => {
    setDropdown(true)
}

const onMouseLeave = () => {
    setDropdown(false)
}
////////////////////////
const [scrolled,setScrolled]=React.useState(false);
      const handleScroll=() => {
        console.log(handleScroll)
          const offset=window.scrollY;
          if(offset > 100 ){
            setScrolled(true);
          }
          else{
            setScrolled(false);
          }
        }
      
        useEffect(() => {
          window.addEventListener('scroll',handleScroll)
        }, [])
      let navbarClass=['navbar'];
        if(scrolled){
          navbarClass.push('scrolled');
        }    
    

        /////////////

    return(
        <div className='nav'>
            <header className={navbarClass.join(" ")}>
            {/* <header className='navbar'> */}
                      <ul className='nav-side-menu'>
                          <li className='nav-items '>
                              <Link to="/" className='nav-links'> Home </Link>
                          </li>
                          <li className='nav-items'>
                              <Link to="/search" className='nav-links'> Search </Link>
                          </li>
                          <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                              <Link className='nav-links'> Shop 
                                  {dropdown && <DropDown />}
                              </Link>
                          </li>
  
                          <li className='nav-items'>
                              <Link to="/about" className='nav-links'> About </Link>
                          </li>
                          <li className='nav-items'>
                              <Link to="/cart" className='nav-links'> Cart </Link>
                          </li>
                      </ul>
             </header>
        </div>
    )
    }
    
    export default Navbar;