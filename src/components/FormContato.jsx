import React from 'react'
import { Link } from 'react-router-dom'
import { FormContatoContainer } from '../styles/FormContato'
import { IoHomeOutline } from "react-icons/io5";

const FormContato = () => {
    return (
        <FormContatoContainer>
            <section>
                <h1>Fale Conosco</h1>
                <p>Se você já é nosso cliente, clique no botão abaixo para acessar o Portal do Cliente.</p>
                <Link><IoHomeOutline /> Acessar o Portal</Link>
                <p>Se deseja abordar assuntos como venda de terreno, vizinhança de obras ou saber como se tornar fornecedor, preencha o formulário abaixo e em breve retornaremos.</p>
            </section>

            <form target="_blank" action="https://formsubmit.co/villiamdesa@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />


                <label htmlFor="name"> Nome <span>*</span></label>
                <input class="input-form" id="name" type="text" name="Nome" placeholder="Nome Completo" required />
            

                <label htmlFor="email"> Email <span>*</span></label>
                <input class="input-form" id="email" type="email" name="Email" placeholder="Email" required />


                <label htmlFor="conf-email">Confirme seu email <span>*</span></label>
                <input class="input-form" id="conf-email" type="email" name="Email" placeholder="Email" required />


                <label htmlFor="telefone"> Telefone <span>*</span></label>
                <input class="input-form" id="telefone" type="tel" name="Telefone" placeholder="(xx) xxxxx-xxxx" required />



                <label htmlFor="message"> Sua Mensagem <span>*</span></label>
                <textarea placeholder='Sua mensagem' id="message" name="Mensagem" rows="5" required></textarea>

                <div>
                    <p>* Campos de preenchimento obrigatório.</p>
                    <p>Prezamos pela privacidade e a coleta dos seus dados pessoais atenderá as diretrizes da legislação aplicável. Para mais informações, acesse nossa <span id='politica-privacidade'>Política de Privacidade</span>.</p>
                </div>

                <input class="input-form" type="hidden" name="_next" value="http://127.0.0.1:5501/ioa/sucesso.html" />
                <button id="button-form" type="submit">Enviar Formulário</button>
            </form>
        </FormContatoContainer>
    )
}

export default FormContato