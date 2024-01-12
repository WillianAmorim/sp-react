import { SobreContainer } from "../styles/Sobre";

const Sobre = () => {
    return (
        <SobreContainer>
            <h1>Sobre</h1>
            <div className="div-elements">
                <div className="div-apresentacao">
                    <hr id="hr-menor" />
                    <p>A Drogasil S.A. é uma rede de drogarias do Estado de São Paulo, pertencente ao grupo RaiaDrogasil. A atividade da Drogasil consiste no comércio varejista de produtos farmacêuticos e cosméticos.</p>
                </div>

                <div>
                    <hr id="hr-maior" />
                    <p>Tipo de Imóvel: Built to Suit (BTS)</p>
                </div>
            </div>
        </SobreContainer>
    );
}

export default Sobre;