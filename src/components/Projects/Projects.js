import React from 'react';
import {GrDomain, GrGithub} from 'react-icons/gr';

function ProjectList(props) {
    return (
        <div className = 'card'>
            <div className = 'img-container'>
                <img src = {props.image} alt = {props.name}/>
            </div>
            <div className = 'content'>
                <p className = 'card-title'>{props.name}</p>
                <p className = 'technologies'>
                    {props.technologies}
                </p>
                <p className = 'icon-container'>
                    <a href = {props.github} target = '_blank' rel = 'noreferrer'><GrGithub size = '3rem'/></a>
                    <a href = {props.live} target = '_blank' rel = 'noreferrer'><GrDomain size = '3rem'/></a>
                </p>
            </div>
        </div>
    );
}

export default ProjectList;