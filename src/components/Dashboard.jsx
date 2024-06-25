import React, { useState } from 'react'
import { formatDate } from '../helpers'
import { readSale } from '../services/api';
import Registros from './Registros';

function Dashboard() {

    const [showData, setShowData] =  useState([]);
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState('');
    const [showBtn, setShowBtn] = useState(true)

    const handleRegister = async() => {
        const data = await readSale();

        // Almacenar datos del dia
        const dataNow = data.filter( registro => registro.Fecha === formatDate(Date.now()));
        setShowBtn(false);
        
        if (dataNow.length <= 0) {
            setAlert('No hay Registros por mostrar');
            return;
        } 
        setData(dataNow);
        setShowData(dataNow);
    }

    return (
        <div className='dashboard contenedor'>
            
            {showBtn &&
                <div className="dashboard__btnContent">
                    <button  className='dashboard__btnRegister' onClick={handleRegister}>Ver Dashboard</button>
                </div>
            }
                
            {alert && <p>{alert}</p>}
            
            {data.length > 0 &&
                <Registros 
                    showData={showData}
                    setShowData={setShowData}
                    data={data}
                />
            }
        </div>
    )
}

export default Dashboard