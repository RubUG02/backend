const express = require("express");

//Crear servidor Express
const app = express();

//Rutas
app.get('/',(req, res) => {
    console.log("Se recibió una petición en /");
    res.json({ 
        ok:true,
        msg:"Recibido",
     });
}
);

//Configuracion del puerto
app.listen(4000, () => {
    console.log('Backend corriendo en el puerto ${4000}');
})
