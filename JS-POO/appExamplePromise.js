/*

💡 Ejemplo: Simular una compra en línea
Queremos simular una función que representa una compra. La función retornará una promesa que:

Se resuelve (resolve) si hay productos en stock.

Se rechaza (reject) si no hay productos disponibles.


*/

// Función que retorna una promesa

function procesarCompra (){
    return new Promise ((resolve, reject) => {
        console.log("Procesando tu compra ...");

        setTimeout(() => {
            if(productoDisponible){
            resolve("✅ Compra exitosa: tu producto será enviado pronto.");
        } else {
            reject("❌ Lo sentimos, el producto está agotado.");
        }
    }, 2000); //Aquí estamos simulando una espera de 2 segundos

    });

}

// Aquí usamos la la promesa

procesarCompra(true)
    .then((mensajeExito) => {
         console.log("✔️ THEN:", mensajeExito); // Promesa resuelta
    })

    .catch((mensajeError) => {
        console.error("🚫 CATCH:", mensajeError); // Promesa rechazada
    })


procesarCompra(false); // ← Simula que no hay producto

