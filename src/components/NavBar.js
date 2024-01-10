import './ComponentStyles.css'
export function NavBar(){
    return(
        <>
        <nav class="nav flex-column sectionNav">
            <a class="nav-link " aria-current="page" href="#" style={{paddingBottom:"30px",paddingTop:"25px",fontWeight:"700"}}><h5>Pinky</h5></a>
            <a class="nav-link active" aria-current="page" href="#">About</a>
            <a class="nav-link" href="#">ToolBox</a>
            <a class="nav-link" href="#">Projects</a>
            <a class="nav-link " >Contact</a>
        </nav></>
    )
}