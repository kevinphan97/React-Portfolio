import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

function Footer () {
    return (
        <footer className = 'footer bg-light fixed-bottom'>
            <a href = 'https://github.com/kevinphan97' target = '_blank' rel = 'noreferrer'><AiFillGithub size = '3rem'/></a>
            <a href = 'https://www.linkedin.com/in/kevin-phan-a772aa222/' target = '_blank' rel = 'noreferrer'><AiFillLinkedin size = '3rem'/></a>
            <a href = 'https://www.instagram.com/kevinnbphan/' target = '_blank' rel = 'noreferrer'><AiFillInstagram size = '3rem'/></a>
        </footer>
    );
}

export default Footer;