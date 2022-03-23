import db from "./sqlite-db.js";

const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS"(
    "PRODUTO_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PRODUTO" varchar (20),
    "TIPO" varchar (20),
    "PRECO" varchar(20)
);`;

function createTableProdutos() {
  db.run(PRODUTOS_SCHEMA, (error) => {
    if (error) {
      console.log("Erro ao criar tabela de produtos.");
    }
  });
}

createTableProdutos();
