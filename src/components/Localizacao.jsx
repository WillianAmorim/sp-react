import { H1Container, Paragraph, HrMenor, HrMaior } from "../styles/PaginaEmpreendimento";
import { LocalizacaoContainer } from "../styles/Localizacao";

const Localizacao = ({localizacao}) => {
    return (
        <LocalizacaoContainer data-aos="fade-left" data-aos-duration="1500">
            <H1Container>Localização</H1Container>
            <div className="div-elements">
                <div className='div-textos'>
                    <div className="div-apresentacao">
                        <HrMenor id="hr-menor" />
                    <Paragraph>{localizacao.descricao}</Paragraph>
                    </div>

                    <div>
                        <HrMaior id="hr-maior" />
                        <Paragraph>Localidade: {localizacao.endereco}</Paragraph>
                    </div>
                </div>

                <iframe
                    src={localizacao.mapa}
                    width="auto"
                    height="auto"
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