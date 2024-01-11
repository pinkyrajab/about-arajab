import './ComponentStyles.css'
import { useState } from 'react'

function NavBar({setActiveItem}){
    const[activeNavItem,setActiveNavItem] = useState('about')

    const handleClick=(itemName)=>{
        setActiveItem(itemName)
        setActiveNavItem(itemName)
        console.log(itemName)
    }
    return(
        <>
        <nav className="nav flex-column sectionNav" id='sectionnav'>
                <a className="nav-link" aria-current="page" href="#" style={{ paddingBottom: "30px", paddingTop: "25px", fontWeight: "700" }}><h5>Pinky</h5></a>
                <a className={`nav-link ${activeNavItem === 'about' ? 'active' : ''}`} aria-current="page" href="#sectionnav" onClick={() => handleClick('about')}>About</a>
                <a className={`nav-link ${activeNavItem === 'toolBox' ? 'active' : ''}`}  href="#sectionnav" onClick={() => handleClick('toolBox')}>ToolBox</a>
                <a className={`nav-link ${activeNavItem === 'projects' ? 'active' : ''}`}  href="#sectionnav" onClick={() => handleClick('projects')}>Projects</a>
                <a className={`nav-link ${activeNavItem === 'contact' ? 'active' : ''}`}  href="#sectionnav" onClick={() => handleClick('contact')}>Contact</a>
        </nav></>
    )
}
export default NavBar