import './Content.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import About from '../../views/examples/About'
import Param from '../../views/examples/Param'
import Home from '../../views/examples/Home'

const Content = props =>(
        <main className='Content'>
        
        <Routes>
        
            <Route path="about" element={<About/>}/>
            {/* :d será um valor passado a partir da url */}
            <Route path="param/:id" element={<Param/>}/>
            <Route path="/" element={<Home/>}/>
            
            </Routes>
        </main>
)


export default Content