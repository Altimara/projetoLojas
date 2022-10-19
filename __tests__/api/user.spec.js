// Bibliotecas
const supertest = require("supertest");
const assert = require("chai").assert;

const userId = 10223030;
const username = "lino";
let token = "";

// Classe (Opcional)
describe("PetStore Swagger - User", () => {
    const request = supertest("https://petstore.swagger.io/v2");

    // Funções ou Métodos
    // Adicionar Usuário
    it("POST User", () => {
        const jsonFile = require("../../vendors/user1.json");
        return request
        .post("/user")
        .send(jsonFile)
        .then((resposta) =>{
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.code, 200);
            assert.equal(resposta.body.type, "unknown");
            assert.equal(resposta.body.message, userId)
        });
    })
    // Consultar Usuário
    it("GET User", () => {
        return request
        .get("/user/" + username)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.id, userId);
            assert.equal(resposta.body.password, "123456");
            assert.equal(resposta.body.phone, "11999999999");
        })
    })
    // Alterar Usuário
    it("PUT User", () => {
        const jsonFile = require("../../vendors/user2.json");
        return request
        .put("/user/" + username)
        .send(jsonFile)
        .then((resposta) =>{
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.code, 200);
            assert.equal(resposta.body.type, "unknown");
            assert.equal(resposta.body.message, userId)
        });
    })
    // Excluir Usuário
    /*
    it("DELETE User", () => {
        return request
        .delete("/user/" + username)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200);
        })
    })
    */
    // Login com extração do token
    it("Login com Extração", () => {
        const username = "lino";
        const password = "654321";

        return request
            .get("/user/login?username=" + username + "&password=" + password)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                token = resposta.body.message.substring(23);
                console.log("Token: " + token);
            });
        
    });

});