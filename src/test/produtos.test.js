// import { produto } from "../app";
const supertest = require("supertest");
const host = "http://localhost:3000";
const request = supertest(host);

const produto = require("../app");

describe("Teste de mock", () => {
  test("Deve testar o mock", () => {
    const mock = jest.fn().mockReturnValue("Produto mockado");
    produto.mostrarProdutos = mock;

    const result = produto.mostrarProdutos();

    console.log(result);
    expect(result).toBe("Produto mockado");
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});

// describe("Pega todos os produtos", () => {
//   it("Deve pegar todos os produtos", async () => {
//     const response = await request.get("/produtos");
//     expect(response.statusCode).toBe(200);
//     expect(response.body).not.toBeNull();
//     // expect(response.body).toEqual(expect.arrayContaining(response.body));
//   });
// });

// describe("Cria um produto sem autenticação", () => {
//   it("Deve criar um produto sem autenticação", async () => {
//     const response = await request.post("/produtos").send({
//       PRODUTO: "Suco de laranja",
//       TIPO: "Bebida",
//       PRECO: "6,00",
//     });
//     expect(response.statusCode).toBe(200);
//   });
// });
