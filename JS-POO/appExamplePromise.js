/*

💡 Ejemplo: Simular una compra en línea
Queremos simular una función que representa una compra. La función retornará una promesa que:

Se resuelve (resolve) si hay productos en stock.

Se rechaza (reject) si no hay productos disponibles.


*/

// Función que retorna una promesa

function procesarCompra(productoDisponible) {
    return new Promise((resolve, reject) => {
        console.log("Procesando tu compra ...");

        setTimeout(() => {
            if (productoDisponible) {
                resolve("✅ Compra exitosa: tu producto será enviado pronto.");
            } else {
                reject("❌ Lo sentimos, el producto está agotado.");
            }
        }, 2000); // Simula una espera de 2 segundos
    });
}

// Aquí usamos la la promesa

procesarCompra(false)  // Simula que el producto NO está disponible
    .then((mensajeExito) => {
        console.log("✔️ THEN:", mensajeExito); // Promesa resuelta
    })
    .catch((mensajeError) => {
        console.error("🚫 CATCH:", mensajeError); // Promesa rechazada
    });


procesarCompra(true)  // Simula que el producto SÍ está disponible
    .then((mensajeExito) => {
        console.log("✔️ THEN:", mensajeExito);
    })
    .catch((mensajeError) => {
        console.error("🚫 CATCH:", mensajeError);
    });


procesarCompra(true); // ← Simula que no hay producto


