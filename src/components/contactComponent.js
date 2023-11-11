import React from 'react'
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactComponent = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2a1xouz', 'template_dwr1zm9', form.current, 'cDpCfPcRAuQ4GRalo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div >
            <section id='sectionContact'>
                <span id='spanContact'>
                    Contact
                </span>
                <p id='pContact'>
                    Veuillez remplir les champs suivants!
                </p>
                <form id='formContact' ref={form} onSubmit={sendEmail}>
                    <input type='text' name='from_name' className='inputName' placeholder='Votre Nom' />
                    <input type='email' name='from_email' className='inputEmail' placeholder='Votre E-mail' />
                    <textarea name='message' className='inputMsg' placeholder='Votre Message...' />
                    <button className='ButtonContact'>
                        {/* <img src='' alt='' className='ButtonContactImg' /> */}
                        Envoyer
                    </button>
                    <div className='linksContact'>
                        <a href="https://www.linkedin.com/in/khadidja-guemat-85a1a6261/" target="_blank">
                            <img src={process.env.PUBLIC_URL + '/assests/linkedin.png'} className='linkImg' alt='LinkedIn' />
                        </a>
                        {/* <Link to=''>
                            <img src={gmail} className='linkImg' alt='Gmail' />
                        </Link> */}
                        <a href="https://github.com/kikhadidja12" target="_blank">
                            <img src={process.env.PUBLIC_URL + '/assests/github.png'} className='linkImg' alt='Github' />
                        </a>
                    </div>
                </form>
            </section>

        </div>
    )
}

export default ContactComponent