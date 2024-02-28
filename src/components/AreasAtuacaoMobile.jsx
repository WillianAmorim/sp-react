import React from 'react'
import data from '../../public/Json/JsonEmpreendimentos.json'
import Locacoes from '../../public/FOTOS-NOVO/LOCAÇÃO DE IMÓVEIS/COMERCIAL/Costa Atacadão - Águas Claras, DF/AtacadaoPrincipal.jpg'
import { Link } from "react-router-dom";

const AreasAtuacaoMobile = () => {

    let categoriasParaExcluir = ['comercial', 'corporativo', 'residencial', 'galpao-logistico',];

    let firstObjects = data.reduce((acc, obj) => {
        // Verificar se a categoria do objeto não está na lista de categorias para excluir
        if (!categoriasParaExcluir.includes(obj.category)) {
            // Verificar se a categoria do objeto já está presente em firstObjects
            if (!acc[obj.category]) {
                acc[obj.category] = obj;
            }
        }
        return acc;
    }, {});

    let result = Object.values(firstObjects);

    return (
        <>
            <h1>Áreas de atuação</h1>
            <ul>
                {result.map((empreendimento) => (
                    <li key={empreendimento.id}>
                        <Link className="hrv-rectangle-out" to={`/empreendimento/${empreendimento.category}`}>{empreendimento.sobre.setor}</Link>
                        <img src={empreendimento.imgPrincipal} alt="" />
                    </li>
                ))}
                <li>
                    <Link className="hrv-rectangle-out" to={'/locacoes'}>Locações</Link>
                    <img src={Locacoes} alt="" />
                </li>
            </ul>
        </>
    )
}

export default AreasAtuacaoMobile