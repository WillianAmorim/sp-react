import React, { useState } from 'react';
import { HeaderContainer } from '../styles/Header-style'
import LogoHeader from '../../public/FOTOS-NOVO-GUI/sao paulo.png';

import { Link } from 'react-router-dom'
import { RiArrowDownSLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

import data from '../../public/Json/JsonEmpreendimentos.json'

const Header = () => {
    const [isHoveredAt, setIsHoveredAt] = useState(false)
    const [isHoveredLoc, setIsHoveredLoc] = useState(false)

    const [filterText, setFilterText] = useState('');

    const handleInputChange = (event) => {
        const searchText = event.target.value.toLowerCase();
        setFilterText(searchText);
    };

    const filteredItems = data.filter((item) =>
        item.name.toLowerCase().startsWith(filterText)
    );





    return (
        <HeaderContainer>
            <header className='header-desktop'>
                <Link to={'/'} className='img-header'><img src={LogoHeader} alt="" /></Link>
                <ul className='ul-header'>
                    <li>
                        <Link className='hvr-underline-from-center' to='/'>Home</Link>
                    </li>

                    <p>|</p>

                    <li id='li-areas-atuacao' onMouseEnter={() => setIsHoveredAt(true)} onMouseLeave={() => setIsHoveredAt(false)}>Áreas de atuação <RiArrowDownSLine />
                        <ul className='ul-areas-atuacao' visible={isHoveredAt} style={{ display: isHoveredAt ? 'flex' : 'none' }}>
                            <li className='item-area-atuacao'><Link to={'/empreendimento/shopping-centers'}>Shopping Centers</Link></li>
                            <li className='item-area-atuacao'><Link to={'/empreendimento/strip-malls'}>Strip Malls</Link></li>
                            <li className='item-area-atuacao'><Link to={'/empreendimento/bts'}>BTS (Built to Suit)</Link></li>
                            <li className='item-area-atuacao'><Link to={'/empreendimento/incorporacao'}>Incorporações</Link></li>
                            <li id='locacoes' className='item-area-atuacao' onMouseEnter={() => setIsHoveredLoc(true)} onMouseLeave={() => setIsHoveredLoc(false)}>
                                Locações
                                <ul className='ul-locacoes' visible={isHoveredLoc} style={{ display: isHoveredLoc ? 'flex' : 'none' }}>
                                    <li className='item-locacoes'><Link to={'/empreendimento/comercial'}>Comercial</Link></li>
                                    <li className='item-locacoes'><Link to={'/empreendimento/galpao-logistico'}>Galpão Logístico</Link></li>
                                    <li className='item-locacoes'><Link to={'/empreendimento/residencial'}>Residencial</Link></li>
                                    <li className='item-locacoes'><Link to={'/empreendimento/corporativo'}>Corporativo</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <p>|</p>
                    <li className='hvr-underline-from-center'><Link to={'/empreendimento/oportunidades'}>Oportunidades</Link></li>
                    <p>|</p>
                    <li className='hvr-underline-from-center'><Link to={'/contato'}>Contato</Link></li>
                </ul>
                <div className='div-input'>
                    <CiSearch color='black' />
                    <input
                        placeholder="Pesquise aqui"
                        className="input-header"
                        type="text"
                        value={filterText}
                        onChange={handleInputChange}
                    />
                    <ul className='ul-filter' style={{ display: filterText && filteredItems.length > 0 ? 'block' : 'none' }}>
                        {filteredItems.slice(0, 5).map((item) => (
                            <Link to={`/empreendimento/${item.category}/${item.name.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}><li key={item.id}>{item.name}</li></Link>
                        ))}
                    </ul>
                </div>
                <div>
                    <a
                        href="https://www.intranetmall.com/saopauloparticipacoes"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button id="button-intranet">Portal do cliente</button>
                    </a>
                </div>
            </header>
        </HeaderContainer>
    );
}

export default Header;