import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { dogs } from "./data/dogs.ts";
import { cats } from "./data/cats.ts";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

//Conexion a mongo
mongoose
  .connect("mongodb://127.0.0.1:27017/vetplus", {
    useNewUrlParser: true,
    useUnitfiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexion", err));

// Rutas
app.get("/vetplus", (req, res) => {
  res.send("API de planes vetplus funcionando🚀");
});

//Planes Perros
app.get("/api/planes/perros", (req, res) => {
  res.json(dogs);
});

// Planes Gatos
app.get("/api/planes/gatos", (req, res) => {
  res.json(cats);
});

// Obtener un plan especifico
app.get("/api/planes/perros/:id", (req, res) => {
  const plan = dogs.find((p) => p.id === parseInt(req.params.id));
  plan
    ? res.json(plan)
    : res.status(404).json({ message: "Plan de perro no encontrado" });
});

app.get("/api/planes/gatos/:id", (req, res) => {
  const plan = cats.find((p) => p.id === parseInt(req.params.id));
  plan
    ? res.json(plan)
    : res.status(404).json({ message: "Plan de gato no encotrado" });
});

// Iniciar sevidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
