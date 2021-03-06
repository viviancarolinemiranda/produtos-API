import Produto from "../models/Produto.js";

const controllerProdutos = (app, db) => {
  const produtoModel = new Produto(db);

  app.get("/produtos", async (req, res) => {
    res.json(await produtoModel.mostrarProdutos());
  });

  app.get("/produtos/id/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await produtoModel.mostrarProdPorID(id));
  });

  app.get("/produtos/tipo/:tipo", async (req, res) => {
    const tipo = req.params.tipo;
    res.json(await produtoModel.mostrarProdPorTipo(tipo));
  });

  app.post("/produtos", async (req, res) => {
    const body = req.body;
    console.log(body);
    res.json(await produtoModel.insereProduto(body));
  });

  app.put("/produtos/id/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    res.json(await produtoModel.atualizaProduto(id, body));
  });

  app.delete("/produtos/id/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await produtoModel.deletaProduto(id));
  });
};

export default controllerProdutos;
