import { Home } from "../Home/Home"
import { About } from "../About/About"
import './Main.css'
export function Main(){
    return(
        <>
            <Home/>
            <div className="Main">
                <About/>
            </div>
            
        </>
    )
}