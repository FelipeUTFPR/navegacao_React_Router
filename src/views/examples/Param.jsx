import React from 'react'
import { useParams } from 'react-router-dom'

const Param = props =>{
    //desconstruindo o objeto id
    const {id} = useParams()
    return(
        <div className='Param'>
        <h1>Param</h1>
        {/* exibindo o valor na view */}
        <h1>Valor: {id}!</h1>

        </div>
    )
}


export default Param