import React from 'react';
import emailjs from 'emailjs-com';
import { ContactContainer, ContactWrapper, ContactGrid, ContactGridB } from './ContactElements'

// import './ContactUs.css';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('transmontana', 'transmontana_template', e.target, 'user_fHXYvPUJLXuSVZG1bUi6l')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <ContactContainer >
            <ContactWrapper>
                <ContactGrid>
                    <ContactGridB>
                        <form id="b" className="contact-form" onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </ContactGridB>
                </ContactGrid>
            </ContactWrapper>
        </ContactContainer>
    );
}