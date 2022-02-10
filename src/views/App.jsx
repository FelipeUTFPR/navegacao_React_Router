
import './App.css'
import Menu from '../components/layout/Menu'
import React from 'react'
import Content from '../components/layout/Content'
//import do reac router com a alias Router
import { BrowserRouter as Router } from 'react-router-dom'


const App = props =>(
        <div className='App'>
            {/* tanto o menu quanto o Content precisam estar dentro
            do Router para funcionar */}
            <Router>
                <Menu/>
                <Content/>
            </Router>
        </div>
)


export default App