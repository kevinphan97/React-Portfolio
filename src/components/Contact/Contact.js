import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if(event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
                if(!isValid) {
                    setErrorMessage('Please enter a valid email address');
                }
                else {
                    setErrorMessage('');
                }
        }
        else {
            if(!event.target.length) {
                setErrorMessage('Please enter a name');
            }
            else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value})
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section className = 'container'>
            <form id = 'contact-form' class = 'justify-content-center'>
                <div class = 'mt-6'>
                    <label htmlFor = 'name'>Name</label>
                    <input class = 'form-control' type = 'text' name = 'name' defaultValue = {name} onBlue = {handleChange}/>
                </div>
                <div class = 'mt-6'>
                    <label htmlFor = 'email'>Email</label>
                    <input class = 'form-control' type = 'email' name = 'email' defaultValue = {email} onBlue = {handleChange}/>
                </div>
                <div class = 'mt-6'>
                    <label htmlFor = 'message'>Message</label>
                    <input class = 'form-control' name = 'message' defaultValue = {message} onBlue = {handleChange} rows = '5'/>
                </div>
                {errorMessage && (
                <div>
                    <p className = 'error-message'>{errorMessage}</p>
                </div>
                )}
                <div>
                    <button id = 'button' class = 'btn btn-primary' type = 'submit' onsubmit = {handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;