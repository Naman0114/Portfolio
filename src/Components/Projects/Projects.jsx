import { projectList } from '../../assets/assets';
import './Projects.css';
const Footer=()=>{
    return<>
    <div  className="projects">
        <div className='projects-content'>  
            <h1>Projects</h1>
        </div>
        <div className='projects-content-info'>
            {projectList.map((item)=>(
                <div className='projects-info-desc'>
                    <img src={item.image} alt='img not found'/>
                    <p className='text'>{item.name}</p>
                    <p>{item.description}</p>
                </div>
            ))}

        </div>
    </div>
    </>

}
export default Footer;