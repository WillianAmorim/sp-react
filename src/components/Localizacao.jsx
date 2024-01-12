import { H1Container, Paragraph, HrMenor, HrMaior } from "../styles/PaginaEmpreendimento";
import { LocalizacaoContainer } from "../styles/Localizacao";

const Localizacao = () => {
    return (
        <LocalizacaoContainer>
            <H1Container>Localização</H1Container>
            <div className="div-elements">
                <div className='div-textos'>
                    <div className="div-apresentacao">
                        <HrMenor id="hr-menor" />
                        <Paragraph>Conheça nossas lojas espalhadas na grande São Luis.</Paragraph>
                    </div>

                    <div>
                        <HrMaior id="hr-maior" />
                        <Paragraph>Localidade: COHATRAC</Paragraph>
                    </div>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127548.53461397895!2d-44.287324170652575!3d-2.542176974355278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f691bf1ac99f73%3A0xd4726c9c245b4d2b!2sDrogasil!5e0!3m2!1spt-BR!2sbr!4v1704914224369!5m2!1spt-BR!2sbr"
                    width="500"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
        </LocalizacaoContainer>
    );
}

export default Localizacao;