import { H1Container, Paragraph, HrMaior } from "../styles/PaginaEmpreendimento";
import { LocalizacaoContainer } from "../styles/Localizacao";

const Localizacao = ({localizacao}) => {
    return (
        <LocalizacaoContainer>
            <div className="div-elements">
                {/* <div className='div-textos'>
                    <H1Container>Localização</H1Container>
                    <div className="div-apresentacao">
                    <Paragraph>{localizacao.descricao}</Paragraph>
                    </div>

                    <div>
                        <HrMaior id="hr-maior" />
                        <Paragraph>Localidade: {localizacao.endereco}</Paragraph>
                    </div>
                </div> */}

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