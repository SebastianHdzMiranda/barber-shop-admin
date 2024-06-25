import React, { useMemo } from 'react'
import { formatDate } from '../helpers';
import { users } from '../data/db';

function Registros({ showData, setShowData, data }) {

    const handleUsers = (user = 'all') => {

        if (user === 'all') {
            setShowData(data);
            return;
        }
        const dataUser = data.filter( registro => registro.Nombre === user);
        setShowData(dataUser);
    };
    // Sumar los precios
    const sumaPrecios = useMemo(()=> showData.reduce( (total, registro) => total + (+registro.Precio) , 0), [showData]);

    return (
        <>
            <div className="dashboard__buttons">
                <button className='dashboard__button' type='button' onClick={() => handleUsers()}>Todos</button>
                {users.map( (user, i) => 
                    <button key={i} className='dashboard__button' type='button' onClick={() => handleUsers(user.name)}>{user.name}</button>
                )}
            </div>
            <div className="dashboard__grid">
                <div className="table">
                    <div className='table__head'>
                        <div className='table__headRow'>
                            <p className='table__th'>Nombre</p>
                            <p className='table__th'>Venta</p>
                            <p className='table__th'>Precio</p>
                            {/* <p className='table__th'>Fecha</p> */}
                            <p className='table__th'>Hora</p>
                        </div>
                    </div>
                        <div className='table__body table-responsive'>
                            {showData.map( registro => 
                                <div className='table__trBody ' key={registro.Id}>
                                    <p className="table__td">{registro.Nombre}</p>
                                    <p className="table__td table__td--venta">
                                        <img className='table__img' src={`./${registro.Imagen}.png`} alt="ventaImg" />
                                        <span>{registro.Venta}</span>
                                    </p>
                                    <p className="table__td">${registro.Precio}</p>
                                    {/* <p className="table__td">{registro.Fecha}</p> */}
                                    <p className="table__td">{registro.Hora}</p>
                                </div>
                            )}
                        </div>

                </div>
                <p className='dashboard__total'>Total del Dia {formatDate(Date.now())}: <span className='dashboard__total-price'>${sumaPrecios}</span></p>
            </div>

        </>
    )
}

export default Registros