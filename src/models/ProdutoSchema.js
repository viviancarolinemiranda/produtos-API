class ProdutoSchema {
  constructor(produto, tipo, preco) {
    this.produto = this._validandoStrings(produto);
    this.tipo = this._validandoStrings(tipo);
    this.preco = this._validandoPreco(preco);
  }

  _validandoStrings(input) {
    console.log(input);
    if (input.length > 0) {
      return input;
    } else {
      throw new Error("Informação inválida.");
    }
  }

  _validandoPreco(input) {
    if (input > 0) {
      return input;
    } else {
      throw new Error("Preço inválido.");
    }
  }
}

export default ProdutoSchema;
