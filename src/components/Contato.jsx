import React from 'react';
import { ContatoContainer } from '../styles/Contato';

const CardsBTS = () => {
    return (
        <>
            <ContatoContainer>
                <h1>Contato</h1>
                <div className='div-contato'>

                    <div className='div-p'>
                        <p id='linha-morta' />
                        <p>Quer saber mais sobre o projeto? Fale conosco agora mesmo !</p>
                    </div>


                    <div className='div-inputs'>
                        
                        <label for="escolha">Escolha uma opção:</label>
                        <select id="escolha" name="escolha">
                            <option value="" disabled selected hidden>Selecione uma opção</option>
                            <option value="Opção 1">Whatsapp</option>
                            <option value="Opção 2">Email</option>
                            <option value="Opção 3">Telefone</option>
                        </select>

                            
                        <label htmlFor=""> Qual seu nome ?
                            <input placeholder='Nome' type="text" />
                        </label>

                        <label htmlFor="">
                            Poderia nos informar seu e-mail?
                            <input placeholder='Email' type="text" />
                        </label>

                        <label htmlFor="">
                            E um telefone para contato?
                            <input placeholder='Contato' type="text" />
                        </label>

                        <label htmlFor="">
                            Mensagem
                            <textarea placeholder='Mensagem' rows="6" cols="50"/>
                        </label>

                        {/* <input type="radio"></input> */}

                        <a href="">Solicitar Contato</a>
                    </div>
                </div>
            </ContatoContainer>
        </>
    );
}

export default CardsBTS;