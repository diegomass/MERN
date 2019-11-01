import React from 'react'
import home from '../img/homeIcon.png';
import circle from '../img/circled-right-2.png';
import logo from '../img/MYtineraryLogo.png';

 const Navbar = () => { 
 return (
    <div>
        <div>
        <img src={logo} className="App-logo" alt="logo"/>  
        </div>
        <p>Find your perfect trip, designed by insiders who know and love their cities</p>
        <br></br>
        <br></br>
        <h1>Start browsing</h1>
        <br></br>
        <br></br>
        <nav>
        <a href="/Cities"><img src={circle} className="App-circle" alt="circle"/></a>
        </nav>
        <br></br>
        <br></br>
        <p>Want to build your own MYtinerary?</p>
        <br></br>
        <br></br>
        <div className="linkl">
        <nav>
        <a href="/Log">Log In</a>
        </nav>
        </div>
        <div className="linkc">
        <nav>
        <a href="/Account">Create Account</a>
        </nav>
        </div>
        <br></br>
        <br></br>
        <nav>
        <a href="/"><img src={home} className="App-home" alt="home"/></a>
        </nav>
        
    </div>
 )
}
export default Navbar;