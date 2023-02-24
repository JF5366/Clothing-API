import {Link} from 'react-router-dom';
import React,{useEffect} from 'react';
import './Navbar.css'

// function Nav (props){
    
const Navbar=() => {
    const [scrolled,setScrolled]=React.useState(false);
      const handleScroll=() => {
          const offset=window.scrollY;
          if(offset > 200 ){
            setScrolled(true);
          }
          else{
            setScrolled(false);
          }
        }
      
        useEffect(() => {
          window.addEventListener('scroll',handleScroll)
        })
      let navbarClass=['navbar'];
        if(scrolled){
          navbarClass.push('scrolled');
        }
    
    return(
        <div className='nav'>
            <header className={navbarClass.join(" ")}>
                <div className="logo">
                    {/* my logo */}
                </div>
                <nav className="navigation">
                            <Link to="/">
                                <div>Main</div>
                            </Link>
                            <Link to="/about">
                                <div>About</div>
                            </Link>
                            {/* <Link to="/price">
                                <div>Price</div>
                            </Link> */}
                </nav>
             </header>
        </div>
    )
    }
    
    export default Navbar;