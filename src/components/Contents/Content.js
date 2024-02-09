
import NavBar from './../NavBar'
import { useState } from 'react';
import { About } from '../About/About';
import {ToolBox} from './../ToolBox/ToolBox';
import { Projects } from '../Projects/Projects';
  
export function Content(){
    const [activeItem, setActiveItem] = useState('about');
    
    return(
        <div className='about' id="About">
            <div className='container-fluid myContentContainer' style={{paddingLeft:"60px",backgroundColor:"black"}}>
                <div className='row'>
                    <div className='col-md-2 myNavbar'>
                        <NavBar setActiveItem={setActiveItem}/>
                    </div>
                    <div className='col-md-10 allContents col-sm-12' style={{padding:"0"}} >
                        <div className="card cardContent" >
                                <div class="card-body">
                                  {activeItem === 'about' && (
                                    <>
                                        <h5 class="card-title"> ABOUT ME</h5>
                                        <About/>
                                    </>
                                  )}
                                  {activeItem === 'projects'&&(
                                    <>
                                        <h5 class="card-title">PROJECTS</h5>
                                        <Projects/>
                                          
                                    </>
                                  )}
                                  {activeItem === 'toolBox' &&(
                                    <>
                                        <h5 class="card-title">TOOL BOX</h5>
                                         <ToolBox/>
                                    </>
                                  )}
                                  {activeItem === 'contact' &&(
                                    <>
                                        <h5 class="card-title">CONTACT</h5>
                                            {/* ... (content for projects) */}
                                    </>
                                  )}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}