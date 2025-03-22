import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faNode, faHtml5, faCss  } from '@fortawesome/free-brands-svg-icons';
import "./Skills.css"


function Skills ({infoSkill}){

    const iconMapping = {
        faReact,
        faSquareJs,
        faNode,
        faHtml5,
        faCss
      };

    return(

        <section className='containSkills' id='skillsPac'>
            <h2>SKILLS</h2>
            <div className='containIconSkills'>
                {infoSkill.map((item, index) => (
                    
                <div className='bloqueSkill' key={index}>
                <FontAwesomeIcon icon={iconMapping[item.icono]} className="iconoSkill" />
                <p>{item.aplicacion}</p>
                </div>
                
                ))}
                
            </div>
           

        </section>

    )

}

export default Skills;