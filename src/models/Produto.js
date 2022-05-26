import ProdutosDAO from "../DAO/produtosDAO.js";
import ProdutoSchema from "./ProdutoSchema.js";

export default class Produto {
  constructor(db) {
    this.dao = new ProdutosDAO(db);
  }

  mostrarProdutos = async () => {
    try {
      return await this.dao.mostrarProdutos();
    } catch (erro) {
      return {
        msg: erro.message,
      };
    }
  };

  mostrarProdPorID = async (id) => {
    try {
      return await this.dao.mostrarProdPorID(id);
    } catch (erro) {
      return {
        msg: erro.message,
      };
    }
  };

  mostrarProdPorTipo = async (tipo) => {
    try {
      return await this.dao.mostrarProdPorTipo(tipo);
    } catch (erro) {
      return {
        msg: erro.message,
      };
    }
  };

  insereProduto = async (produto) => {
    try {
      const novoProd = new ProdutoSchema(
        produto.PRODUTO,
        produto.TIPO,
        produto.PRECO
      );
      console.log(novoProd);
      return await this.dao.insereProduto(produto);
    } catch (erro) {
      return {
        msg: erro.message,
      };
    }
  };

  atualizaProduto = async (id, prod) => {
    try {
      const prodAtt = new ProdutoSchema(prod.PRODUTO, prod.TIPO, prod.PRECO);
      return await this.dao.atualizaProduto(id, prodAtt);
    } catch (erro) {
      return {
        msg: erro.message,
      };
    }
  };

  deletaProduto = async (id) => {
    try {
      return await this.dao.deletaProduto(id);
    } catch (erro) {
      return {
        msg: erro.message,
      };
    }
  };
}
