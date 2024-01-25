import ImgDrog from '../../public/IMAGENS_SITE_SAO_PAULO/drogasilNova.jpg'

import { ImgDrogasil, DivAbsolute, StyledGoShare } from "../styles/PaginaEmpreendimento";

import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';

import { GoShare } from "react-icons/go";

import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

const CarroselEmpreendimento = ({images}) => {

    const [clicked, setClicked] = useState(false);

    const handleIconClick = () => {
        // setSidebarVisible(!isSidebarVisible);
        setClicked(!clicked)
    };

    // const resetState = () => {
    //     setClicked(false);
    // };

    const shareUrl = window.location.href;
    const title = document.title;

    // useEffect(() => {
    //     let timeoutId;
    
    //     if (clicked) {
    //       // Agendar uma ação após 10 segundos
    //       timeoutId = setTimeout(resetState, 15000);
    //     }
    
    //     // Limpar o timeout quando o componente for desmontado ou o estado for alterado
    //     return () => {
    //       clearTimeout(timeoutId);
    //     };
    //   }, [clicked]);

    console.log(`${images}AQUI`)

    return (
        <>
            <DivAbsolute >
                <StyledGoShare onClick={handleIconClick} style={{ display: clicked ? 'none' : 'block' }}>
                    <GoShare />
                </StyledGoShare>

                <CSSTransition
                    in={clicked}
                    timeout={9000}
                    classNames="fade"
                    unmountOnExit
                >

                <div className='links-share' style={{ display: clicked ? 'flex' : 'none' }}>
                    <WhatsappShareButton url={shareUrl} title={title}>
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <EmailShareButton url={shareUrl} subject={title}>
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                    <LinkedinShareButton url={shareUrl} title={title}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <FacebookShareButton url={shareUrl} quote={title}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
                </CSSTransition>
            </DivAbsolute>
            <ImgDrogasil src={images[0]} alt="" width="100%" />
        </>
    )
}

export default CarroselEmpreendimento;