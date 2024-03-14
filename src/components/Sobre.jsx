import { H1Container, DivElements, HrMaior, Paragraph } from "../styles/PaginaEmpreendimento";
const Sobre = ({sobre}) => {
    return (
        <div>
            <DivElements className="div-elements">
            
                <div className="div-apresentacao">
                    <H1Container>Sobre</H1Container>
                    <Paragraph>{sobre.descricao}</Paragraph>
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