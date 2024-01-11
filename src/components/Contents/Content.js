
import NavBar from './../NavBar'
import { useState } from 'react';
import { About } from '../About/About';
  
export function Content(){
    const [activeItem, setActiveItem] = useState('about');
    
    return(
        <div className='about' id="About">
            <div className='container-fluid' style={{paddingLeft:"60px"}}>
                <div className='row'>
                    <div className='col-md-2 '>
                        <NavBar setActiveItem={setActiveItem}/>
                    </div>
                    <div className='col-md-10 allContents' style={{padding:"0"}} >
                        <div class="card cardContent" >
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
                                        {/* ... (content for projects) */}
                                          
                                    </>
                                  )}
                                  {activeItem === 'toolBox' &&(
                                    <>
                                        <h5 class="card-title">TOOL BOX</h5>
                                            {/* ... (content for projects) */}
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