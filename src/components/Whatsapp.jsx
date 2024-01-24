import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Whatsapp = () => {

    const estiloIcone = {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: '999'
    };

    return (
        <a href="https://wa.me/SEUNUMERO" style={estiloIcone}>
            <FaWhatsapp size={40} />
        </a>
    )
}

export default Whatsapp