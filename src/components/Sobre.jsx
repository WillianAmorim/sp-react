import { H1Container, DivElements, HrMenor, HrMaior, Paragraph } from "../styles/PaginaEmpreendimento";

const Sobre = ({sobre}) => {
    return (
        <>
            <H1Container>Sobre</H1Container>
            <DivElements className="div-elements">
                <div className="div-apresentacao">
                    <HrMenor id="hr-menor" />
                    <Paragraph>{sobre.descricao}</Paragraph>
                </div>

                <div>
                    <HrMaior id="hr-maior" />
                    <Paragraph>Tipo de Imóvel: {sobre.setor}</Paragraph>
                </div>
            </DivElements>
        </>
    );
}

export default Sobre;