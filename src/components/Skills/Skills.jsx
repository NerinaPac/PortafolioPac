import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faNode } from '@fortawesome/free-brands-svg-icons';
import "./Skills.css"


function Skills ({infoSkill}){

    return(

        <section className='containSkills'>
            <h2>SKILLS</h2>
            <div className='containIconSkills'>
                {infoSkill.map((item, index) => (
                    
                <div className='bloqueSkill' key={index}>
                <FontAwesomeIcon icon={item.icono} className="iconoSkill" />
                <p>{item.aplicacion}</p>
                </div>
                
                ))}
                
            </div>
           

        </section>

    )

}

export default Skills;