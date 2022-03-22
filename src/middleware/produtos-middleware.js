const produtosMiddleware = (app) => {
  app.use("/produtos", (req, res, next) => {
    if (req.method === "POST") {
      const body = req.body;
      if (body.titulo) {
        next();
      } else {
        res.json({
          erro: true,
          msg: "Campo titulo não encontrado",
        });
      }
    } else {
      next();
    }
  });
};

export default produtosMiddleware;
