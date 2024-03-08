import React, { useState, useEffect } from 'react';
import { useTimeout } from 'react-use'; // Importe o hook useTimeout
import Header from '../components/Header';
import Footer from '../components/Footer';
import Termos from '../components/Termos';
import FormEmpreendimento from '../components/FormEmpreendimento';
import Localizacao from '../components/Localizacao';
import Sobre from '../components/Sobre';
import PlantaBaixa from '../components/Planta';
import CarroselEmpreendimento from '../components/CarroselEmpreendimento';
import Navbar from '../components/Navbar';
import data from '../../public/Json/JsonEmpreendimentos.json';
import Whatsapp from '../components/Whatsapp';
// import Cadastro from '../components/Cadastro';
import LoadingAnimation from '../components/LoadingAnimation';

import { useParams } from 'react-router-dom';

const PageEmpreendimento = () => {
    const { pagEmpreendimento } = useParams();
    const [filterCard, setFilterCard] = useState(null);

    useEffect(() => {
        // Função para pré-carregar as imagens do empreendimento
        const preloadImages = async () => {
            const empreendimento = data.find(empreendimento => empreendimento.name.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "") === pagEmpreendimento);

            if (empreendimento) {
                const images = empreendimento.images.map(image => new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = resolve;
                    img.onerror = reject;
                }));

                try {
                    await Promise.all(images);
                    setFilterCard(empreendimento);
                } catch (error) {
                    console.error('Erro ao pré-carregar imagens:', error);
                }
            }
        };

        preloadImages();
    }, [pagEmpreendimento]);

    if (!filterCard) {
        // Se as imagens ainda estiverem sendo carregadas, pode-se exibir uma mensagem de carregamento ou um indicador de progresso
        return <LoadingAnimation/>;
    }

    return (
        <>  
            <Whatsapp/>
            <Navbar />
            <Header />
            <CarroselEmpreendimento images={filterCard.images}/>
            <Sobre sobre={filterCard.sobre} />
            {filterCard.plantaBaixa ? <PlantaBaixa plantas={filterCard.plantaBaixa} /> : ''}
            <Localizacao localizacao={filterCard.localizacao} />
            {/* <Cadastro /> */}
            <FormEmpreendimento objectName={filterCard} />
            <Footer />
            <Termos />
        </>
    )
}

export default PageEmpreendimento;
