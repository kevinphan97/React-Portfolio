import React from 'react';
import {GrDomain, GrGithub} from 'react-icons/gr';

function ProjectList(props) {
    return (
        <div className = 'card'>
            <div className = 'img-container'>
            </div>
            <div className = 'content'>
                <p className = 'card-title'>{props.name}</p>
                <p className = 'icon-container'>
                    <a href = {props.github} target = '_blank' rel = 'noreferrer'><GrGithub size = '3rem'/></a>
                    <a href = {props.live} target = '_blank' rel = 'noreferrer'><GrDomain size = '3rem'/></a>
                </p>
                <p className = 'technologies'>
                    ({props.technologies})
                </p>
            </div>
        </div>
    );
}

export default ProjectList;