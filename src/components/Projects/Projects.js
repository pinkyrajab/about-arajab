import './Projects.css'
import ZRecruitment from './../../assets/ZRecruitment.png'
import IGC from './../../assets/IGC.png'
import Softlife from './../../assets/softlife.png'
export function Projects(){
    const projects = [
        {
            title:"Recriutment Website",
            content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            src:`${ZRecruitment}`,
            link:"Go somewhere}"
        },
        {
        title:"I Grow Chicken",
        content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        src:`${IGC}`,
        link:"Go somewhere"
        },
        {
        title:"SoftLife Adventures and Travellers",
        content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        src:`${Softlife}`,
        link:"Go somewhere"
        },
       

    ]
    return(
    <>
    <div className='container-fluid p-0 contentAbout'>
        <div className='row'>
        {
            projects.map((proj,index)=>(
                <>
                    <div className='col-lg-4 pb-5'>
                        <div class="card cardProjects" style={{width: '100%'}}>
                            <img src={proj.src} class="card-img-top" alt="..." height={200}/>
                            <div class="card-body ">
                                <h5 class="card-title">{proj.title}</h5>
                                <p class="card-text">{proj.content}</p>
                                <a href={proj.link} class="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                </>
            ))
        }
        </div>
        
    </div>
    </>
    )
}