import { CadastroContainer } from '../styles/Cadastro-style';
import { Link } from 'react-router-dom'

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

                <Link to={''}>Enviar</Link>
                
            </div>
        </CadastroContainer>
    );
}

export default Cadastro;