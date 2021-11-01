import React from 'react';
import ProjectList from './Projects';
import projectsinfo from './projects.json';

function Wrapper(props) {
    return (
        <div className='wrapper'>
            {props.children}
        </div>
    );
}

function Projects () {
    return (
        <section className = 'container'>
            <Wrapper id = 'card-data'>
                {projectsinfo.map((project) => (
                    <ProjectList 
                    key = {project.id} 
                    image = {project.image} 
                    name = {project.name} 
                    github = {project.github} 
                    live = {project.live} 
                    technologies = {project.technologies}/>
                ))}
            </Wrapper>
        </section>
    );
}

export default Projects;