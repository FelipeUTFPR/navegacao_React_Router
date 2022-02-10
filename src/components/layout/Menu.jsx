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
                        <Link to='/about'>Sobre</Link>
                    </li>

                   
                </ul>
            </nav>
        </aside>
)


export default Menu