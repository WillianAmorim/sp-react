import { H1Container, DivElements, HrMenor, HrMaior, Paragraph } from "../styles/PaginaEmpreendimento";

const Sobre = () => {
    return (
        <>
            <H1Container>Sobre</H1Container>
            <DivElements className="div-elements">
                <div className="div-apresentacao">
                    <HrMenor id="hr-menor" />
                    <Paragraph>A Drogasil S.A. é uma rede de drogarias do Estado de São Paulo, pertencente ao grupo RaiaDrogasil. A atividade da Drogasil consiste no comércio varejista de produtos farmacêuticos e cosméticos.</Paragraph>
                </div>

                <div>
                    <HrMaior id="hr-maior" />
                    <Paragraph>Tipo de Imóvel: Built to Suit (BTS)</Paragraph>
                </div>
            </DivElements>
        </>
    );
}

export default Sobre;