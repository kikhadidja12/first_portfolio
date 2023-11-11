import React from 'react'
import './skills.css';
import './services.css';

import ProgressBar from 'react-bootstrap/ProgressBar';
const skillsData = [
    { language: 'Python', level: 4 },
    { language: 'Java', level: 4 },
    { language: 'JavaScript', level: 4 },
    { language: 'HTML', level: 4 },
    { language: 'CSS', level: 4 },
    { language: 'C', level: 4 },
    { language: 'PHP', level: 4 },
    { language: 'Nodejs', level: 3 },
    { language: 'React', level: 3 },
    { language: 'Dart', level: 3 },
    { language: 'Kotlin', level: 3 },
];

const SkillsComponent = () => {

    return (
        <div>
            <section id='sectionSkills'>
                <span id='spanServices'>
                    Skills
                </span>
                <p id='pServices'>

                </p>
                <div className='skillsDiv'>
                    {skillsData.map((skill, index) => (
                        <div className='skillDiv' key={index}>
                            <p className='pSkillDiv'>{skill.language}</p>
                            <ProgressBar now={skill.level * 20} label={`${skill.level * 20}%`} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SkillsComponent