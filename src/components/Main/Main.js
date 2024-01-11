import { Home } from "../Home/Home"
import './Main.css'
import { Content } from "../Contents/Content"
export function Main(){
    return(
        <>
            <Home/>
            <div className="Main">
                <Content/>
            </div>
            
        </>
    )
}