# Restaurante API - Resilia - Módulo 4

Projeto de educacional referente ao Módulo 04 do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/).

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Objetivo
Esse projeto tem como objetivo criar uma API RESTful de um restaurante, onde será possível aplicar as operações CRUD na entidade `Produtos`.

## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1

## Pacotes utilizados
* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
* [SQLite](https://www.npmjs.com/package/sqlite3)  v.5.0.0

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone github.com/viviancarolinemiranda/produtos-API.git
```
Entrando na pasta:
```
cd produtos-API
```

Instalando os pacotes:
```
npm install
```

Criando o banco de dados:
```
npm run database
```

Iniciando o servidor:
```
npm start
```

---

## Rotas implementadas

### Produto

 * **GET /produtos**
 
    Schema da resposta
    ```
    {
       "produto": [
           {
            "PRODUTO_ID": <Integer>,
            "PRODUTO": <String>,
            "TIPO": <String>,
            "PRECO": <String>
           }
       ]
    }
   
 * **GET /produtos/id/{id}**
    
    --Considere um {id} entre 11 e 20.
    
    Schema da resposta
    ```
    {
        produto: [
            {
                "PRODUTO_ID": <Integer>,
                "PRODUTO": <String>,
                "TIPO": <String>,
                "PRECO": <String>
            }
        ]
    }
    ```
    
 * **GET /produtos/tipo/{Tipo}**
     
     --Em {Tipo}, utilize a primeira letra maiúscula.

     Schema da resposta
     ```
     {
        produto: [
            {
                "PRODUTO_ID": <Integer>,
                "PRODUTO": <String>,
                "TIPO": <String>,
                "PRECO": <String>
            }
        ]
     }
 ```

 * **POST /produtos**

     Schema da requisição
    ```
    {
        "PRODUTO": <String>,
        "TIPO": <String>,
        "PRECO": <String>
    }
    ```

    Schema da resposta
    ```
    {
      "msg": "Item adiciondo à tabela de produtos."
    }
    ```

 * **PUT /produtos/id/{id}**

     Schema da requisição
    ```
    {
        "PRODUTO": <String>,
        "TIPO": <String>,
        "PRECO": <String>
    }
    ```

    Schema da resposta
    ```
    {
      "msg": "Item de id {id} atualizado na tabela de produtos."
    }
    ```

 * **DELETE /produtos/id/{id}**

    Schema da resposta
    ```
    {
      "msg": "Item de id {id} removido da tabela de produtos."
    }
    ```


## Autora
Vivian Caroline Miranda
<br><a href = "mailto:vivianmiranda@alunos.utfpr.edu.br"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/viviancaroline/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
