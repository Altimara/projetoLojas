// Importações / Referências as Bibliotecas
const supertest = require("supertest");
const assert = require("chai").assert;

const petId = 999699608;    // id do pet / um dos resultados esperados

describe("Petstore Swagger - Pet", () =>{
    // Definir o caminho do serviço / API - Base URL
    const request = supertest("https://petstore.swagger.io/v2");

    // Função Post == Create == Incluir
    it("POST Pet", ()=>{
        // Onde está o json com os dados do Pet
        // Configura
        const jsonFile = require("../../vendors/pet1.json");
       

        return request          // chamada para a requisição
        .post("/pet")       // endpoint / função chamada
        // Executa
        .send(jsonFile)     // body / corpo da requisição envia o arquivo
        // Valida
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200); // comunicação ok
            assert.equal(resposta.body.id, petId);  // valida o id do pet
            assert.equal(resposta.body.name, "Laira");  // nome do pet
            assert.equal(resposta.body.status, "available"); // se está disponível
        });
    });// Final do Post

    //função Get == Reach / Read / Research == Consultar
    it ("GET Pet",()=>{
        return request                          //chamada para a aquisição
            .get("/pet/" + petId)               //consulta pelo ide do pet
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // comunicação ok
                assert.equal(resposta.body.id, petId);  // valida o id do pet
                assert.equal(resposta.body.name, "Laira");  // nome do pet
                assert.equal(resposta.body.status, "available"); // se está disponível
            });
     

    });  // Final do Get
    // Funçã Put ==  Update  == Alterar
    it ("PUT Pet",() => {
        // Apontando para o Json com a ateração
        const jsonFile = require ("../../vendors/pet2.json");
        return request                  //chamada para a requisição
        .put("/pet")                    // endpoint
        .send(jsonFile)                 //body com a alteração desejada
        .then((resposta) =>{
            assert.equal(resposta.statusCode,200);
            assert.equal(resposta.body.id, petId);
            assert.equal(resposta.body.name, "Laira");
            assert.equal(resposta.body.status, "solded");
        });
    });// Final do Put
    

    //função DELETE == Excluir
    it ("DELETE Pet",()=> {
        return request
        .delete("/pet/" + petId)
        .then((resposta)=> {
            assert.equal(resposta.statusCode,200);
        });
    });

});
