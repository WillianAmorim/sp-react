import { H1Container, DivPlanta } from "../styles/PaginaEmpreendimento";

const PlantaBaixa = ({plantas}) => {
    return (
        <>
            <H1Container>Planta Baixa</H1Container>
            <DivPlanta id="div-planta">
                {plantas.map((planta) => (
                    <img key={planta.id} src={planta} alt="" />
                ))}
            </DivPlanta>
        </>
    );
}

export default PlantaBaixa;