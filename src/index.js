import express from "express";

import produtosController from "./controllers/produtosController.js";

import generalMiddleware from "./middleware/general-middleware.js";
import produtosMiddleware from "./middleware/produtos-middleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

generalMiddleware(app);
produtosMiddleware(app);

produtosController(app);

app.listen(port, () => {
  console.log(`Servidor aberto na http://localhost:${port}/`);
});
