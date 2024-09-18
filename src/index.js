import express from "express";
import morgan from "morgan"

const port = 3000;
const app = express();
app.use(express.json()) //parsear la informacion
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("Escuchando")
})

app.post("/submit", (req, res) => {
    const {nombre, numeroCel, fecha, hora} = req.body;

    res.send("data collected") 
})

app.listen(port, () => {
    console.log(`listen on port: ${port}`);
    
})