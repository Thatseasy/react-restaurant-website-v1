import React from 'react';
import emailjs from 'emailjs-com';
import { ContactContainer, ContactWrapper, InfoGrid, ContactGrid, ContactInfoText, GridWrapper, GridWrapperTitle, ContactGridA, ContactGridB, ContactGridC, ContactGridD, ContactInfoTitle, InfoWrapper } from './ContactElements'

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
                    <ContactGridA>
                        <GridWrapperTitle>
                            <h1>Contact</h1>
                        </GridWrapperTitle>
                    </ContactGridA>
                    <ContactGridB>
                        <GridWrapper>
                            <form className="contact-form" onSubmit={sendEmail}>
                                <input type="hidden" name="contact_number" />
                                <label>Name</label>
                                <br></br>
                                <input type="text" name="user_name" /><br></br>
                                <label>Email</label><br></br>
                                <input type="email" name="user_email" /><br></br>
                                <label>Message</label><br></br>
                                <textarea name="message" /><br></br>
                                <input type="submit" value="Send" />
                            </form>
                        </GridWrapper>
                    </ContactGridB>
                    <ContactGridC>
                        <InfoGrid>
                            <ContactInfoTitle>Address</ContactInfoTitle>
                            <ContactInfoText>Av. 25 de Abril 10, 2825-416 Costa da Caparica</ContactInfoText>
                            <ContactInfoTitle>Tel.</ContactInfoTitle>
                            <ContactInfoText>+351 21 290 1695</ContactInfoText>
                            <ContactInfoTitle>E-Mail</ContactInfoTitle>
                            <ContactInfoText>a-transmontana@hotmail.com</ContactInfoText>
                            <ContactInfoTitle>Open</ContactInfoTitle>
                            <ContactInfoText>Mon-Thu: 11.00-23.00<br></br>Fr-Sun: 11:00-02:00</ContactInfoText>
                        </InfoGrid>
                    </ContactGridC>
                </ContactGrid>
            </ContactWrapper>
        </ContactContainer>
    );
}