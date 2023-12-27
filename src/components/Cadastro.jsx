import { CadastroContainer } from '../styles/Cadastro-style';

const Cadastro = () => {
    return (
        <CadastroContainer>
            <div className='div-info'>
                <h1>Cadastre-se e receba as novidades​</h1>
                <p>Assine nossa newsletter  e fique por dentro das noticias mais recentes em primeira mão.</p>
            </div>
            <div className='div-inputs'>
                <div>
                    <label htmlFor="">Nome <span>*</span></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Email <span>*</span></label>
                    <input type="text" />
                </div>
                <p>* Todos os campos são obrigatórios</p>
            </div>
        </CadastroContainer>
    );
}

export default Cadastro;