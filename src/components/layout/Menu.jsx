import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props =>(
        <aside className='Menu'>
            <nav>
                <ul>
                    <li>
                        {/* a tag Link acaba referenciando para tag a, 
                        como mostra o inspecionar  */}
                        <Link to='/'>Início</Link>
                    </li>

                    <li>
                        <Link to='/param/123'>Param #01</Link>
                    </li>
                    <li>
                        <Link to='/param/legal'>Param #02</Link>
                    </li>
                    <li>
                        <Link to='/about'>Sobre</Link>
                    </li>
                    <li>
                    {/* Comportamento ao clicar numa página que não existe
                é de não renderizar nada na tela */}
                        <Link to='/naoExiste'>Não Existe</Link>
                    </li>

                   
                </ul>
            </nav>
        </aside>
)


export default Menu