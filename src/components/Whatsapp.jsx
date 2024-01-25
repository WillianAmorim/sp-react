import React from 'react'
import { Link } from 'react-router-dom';
import { WhatsappContainer } from '../styles/Whatsapp';

const Whatsapp = () => {

    const estiloIcone = {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: '999',
        animation: 'float 3s infinite'
    };

    return (
        <WhatsappContainer>
            <Link href="https://api.whatsapp.com/send?phone=98991441868&text=Tenho Uma Dúvida." target="_blank" style={estiloIcone}>
                <img id='' src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="Logo WhatsApp" />
            </Link>
        </WhatsappContainer>
    )
}

export default Whatsapp;