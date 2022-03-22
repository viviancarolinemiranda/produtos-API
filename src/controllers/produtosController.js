const produtosController = (app) => {
  app.get("/produtos", (req, res) => {
    res.json({
      Produtos: [],
    });
  });

  app.post("/produtos", (req, res) => {
    const body = req.body;
    res.json({
      msg: `Poduto ${body.titulo} inserido com sucesso.`,
    });
  });
};

export default produtosController;
