import express from "express";
import controllerProdutos from "./controllers/produtosController.js";
import db from "./database/sqlite-db.js";
import generalMiddleware from "./middleware/general-middleware.js";

const app = express();

app.use(express.json());

generalMiddleware(app);
controllerProdutos(app, db);

app.listen(3000);
