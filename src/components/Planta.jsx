import { DivPlanta } from "../styles/PaginaEmpreendimento";

const PlantaBaixa = ({plantas}) => {
    return (
        <DivPlanta>
            <h1>Planta baixa</h1>
            <div id="div-planta">
                {plantas.map((planta) => (
                    <img key={planta.id} src={planta} alt="" />
                ))}
            </div>
        </DivPlanta>
    );
}

export default PlantaBaixa;