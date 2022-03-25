class ProdutosDAO {
  constructor(db) {
    this.db = db;
  }

  mostrarProdutos = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM PRODUTOS", (erro, rows) => {
        erro ? reject(erro) : resolve({ produto: rows });
      });
    });
  };

  mostrarProdPorID = (id) => {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT * FROM PRODUTOS WHERE PRODUTO_ID = ?",
        id,
        (erro, rows) => {
          erro ? reject(erro) : resolve({ produto: rows });
        }
      );
    });
  };

  mostrarProdPorTipo = (tipo) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM PRODUTOS WHERE TIPO = ?",
        tipo,
        (erro, rows) => {
          erro ? reject(erro) : resolve({ produto: rows });
        }
      );
    });
  };

  insereProduto = (novoProd) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO PRODUTOS(PRODUTO_ID, PRODUTO, TIPO, PRECO) VALUES(?, ?, ?, ?)",
        novoProd.PRODUTO_ID,
        novoProd.PRODUTO,
        novoProd.TIPO,
        novoProd.PRECO,
        (erro) => {
          erro
            ? reject(erro)
            : resolve({ msg: `Item adiciondo à tabela de produtos.` });
        }
      );
    });
  };

  atualizaProduto = (id, prod) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE PRODUTOS SET PRODUTO = ?, TIPO = ?, PRECO = ? WHERE PRODUTO_ID = ?",
        prod.produto,
        prod.tipo,
        prod.preco,
        id,
        (erro) => {
          erro
            ? reject(erro)
            : resolve({
                msg: `Item de id ${id} atualizado na tabela de produtos.`,
              });
        }
      );
    });
  };

  deletaProduto = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM PRODUTOS WHERE PRODUTO_ID = ?", id, (erro) => {
        erro
          ? reject(erro)
          : resolve({
              msg: `Item de id ${id} removido da tabela de produtos.`,
            });
      });
    });
  };
}

export default ProdutosDAO;
