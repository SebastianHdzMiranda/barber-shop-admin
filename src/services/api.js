const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/667a35d14d11fd04f00c2cb3"
    // https://api.steinhq.com/v1/storages/666889cf4d11fd04f0028679
);

export async function readSale() {   
    
    const respuesta =  await store.read("hoja1", { limit: 1000 })
    return respuesta;
    
}

// export function deleteSales() {
      
//     store
//     .delete("hoja1", {
//         search: { Nombre: "barbero1" },
//         limit: 80
//     })
//     .then(res => {
//         console.log(res);
//     });

//     store
//     .delete("hoja1", {
//         search: { Nombre: "barbero2" },
//         limit: 80
//     })
//     .then(res => {
//         console.log(res);
//     });
// }