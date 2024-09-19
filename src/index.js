// import express from "express";
// import morgan from "morgan"

// const port = 3000;
// const app = express();
// app.use(express.json()) //parsear la informacion
// app.use(morgan("dev"))

// app.get("/", (req, res) => {
//     res.send("Escuchando");
    
// })

// app.post("/submit", (req, res) => {
//     const {nombre, numeroCel, fecha, hora} = req.body;

//     res.send(`${nombre} ${numeroCel} ${fecha} ${hora}`) 
// })

// app.listen(port, () => {
//     console.log(`listen on port: ${port}`);
    
// })

import express from 'express';
import emailRoutes from './routes/emailRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});