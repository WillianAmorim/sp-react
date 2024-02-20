import { CadastroContainer } from '../styles/Cadastro-style';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C19A29',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const Cadastro = () => {
  return (
    <CadastroContainer>
      <div className='div-info' data-aos="fade-right" data-aos-duration="1500">
        <h1>Cadastre-se e receba as novidades​</h1>
        <p>Assine nossa newsletter  e fique por dentro das noticias mais recentes em primeira mão.</p>
      </div>

      <form className='form-inputs' data-aos="fade-left" data-aos-duration="1500" target="_blank" action="https://formsubmit.co/comercial@saopauloparticipacoes.com.br" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />


        <label htmlFor="name"> Nome <span>*</span></label>
        <input className="input-form" id="name" type="text" name="Nome" placeholder="Nome Completo" required />


        <label htmlFor="email"> Email <span>*</span></label>
        <input className="input-form" id="email" type="email" name="Email" placeholder="Email" required />

        <p>* Todos os campos são obrigatórios</p>

        <input className="input-form" type="hidden" name="_next" value="http://127.0.0.1:5501/ioa/sucesso.html" />
        <button id="button-form" type="submit">Enviar</button>
      </form>
    </CadastroContainer>
  );
}

export default Cadastro;