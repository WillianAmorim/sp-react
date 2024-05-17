import { H1Container, DivElements, HrMaior, Paragraph, ConhecaMais } from "../styles/PaginaEmpreendimento";
const Sobre = ({sobre, conhecaMais}) => {
    return (
        <div>
            <DivElements className="div-elements">
            
                <div className="div-apresentacao">
                    <H1Container>Sobre</H1Container>
                    <Paragraph>{sobre.descricao}</Paragraph>
                    {conhecaMais && conhecaMais && <ConhecaMais className='button-conheca-mais'>{conhecaMais}</ConhecaMais>}
                </div>

                <div>
                    <HrMaior id="hr-maior" />
                    <Paragraph>Tipo de Imóvel: {sobre.setor}</Paragraph>
                </div>
            </DivElements>
        </div>
    );
}

export default Sobre;