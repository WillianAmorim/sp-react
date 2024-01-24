import ImgDrog from '../../public/IMAGENS_SITE_SAO_PAULO/drogasilNova.jpg'

import { ImgDrogasil, DivAbsolute } from "../styles/PaginaEmpreendimento";

import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon} from 'react-share';

const CarroselEmpreendimento = (props) => {

    const shareUrl = window.location.href;
    const title = document.title;

    return (
        <>
            <DivAbsolute>
                <p>{props.name}</p>
                <div className='links-share'>
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
            </DivAbsolute>
            <ImgDrogasil src={ImgDrog} alt="" width="100%" height="700px" />
        </>
    )
}

export default CarroselEmpreendimento;