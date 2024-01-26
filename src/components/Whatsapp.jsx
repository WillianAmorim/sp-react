import React from 'react';
import { WhatsappContainer } from '../styles/Whatsapp';

const Whatsapp = () => {
    const estiloIcone = {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: '999',
        animation: 'float 3s infinite',
    };

    const handleWhatsappClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const phoneNumber = '98981752548';
        const message = 'Tenho Uma Dúvida.';

        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        } else {
            window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
        }
    };

    return (
        <WhatsappContainer>
            <div onClick={handleWhatsappClick} style={estiloIcone}>
                <img id='' src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="Logo WhatsApp" />
            </div>
        </WhatsappContainer>
    );
};

export default Whatsapp;
