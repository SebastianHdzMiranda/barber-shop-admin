const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/667a35d14d11fd04f00c2cb3"

    // Api de sebastian
    // 'https://api.steinhq.com/v1/storages/666889cf4d11fd04f0028679'
);

export async function readSale() {   
    
    const respuesta =  await store.read("hoja1", { limit: 1000 })
    return respuesta;
    
}

export async function deleteSale(id) {
      
    // store
    // .delete("hoja1", {
    //     search: { Id: id },
    //     limit: 1
    // })
    // .then(res => {
    //     console.log(res);
    //     location.reload();
    // });

    const respuesta = await store.delete("hoja1", {
        search: { Id: id },
        limit: 1
    });
    return respuesta;


    // store
    // .delete("hoja1", {
    //     search: { Nombre: "barbero2" },
    //     limit: 80
    // })
    // .then(res => {
    //     console.log(res);
    // });
}


export async function consumirAsistencias() {

    const [response1, response2, response3, response4] = await Promise.all([
        store.read("asistencia-entrada", { limit: 1000 }),
        store.read("asistencia-salida", { limit: 1000 }),
        store.read("comida-entrada", { limit: 1000 }),
        store.read("comida-salida", { limit: 1000 }),
    ]);

    return { response1, response2, response3, response4};

}