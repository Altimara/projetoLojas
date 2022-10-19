// Importação das funções da calculadora
const calculadora = require("../../src/calculadora");

// Importação do arquivo de massa para o teste de divisão
const massaDivisaoJSON = require("../../vendors/massaUnidade");



test ("somar 2 + 3",() =>{
    //configura, valida executa
    // 1 - Configura:
    // 1.1 dados de entrada, input
    const num1 = 2;
    const num2 = 3;
    //1.2 Dados de saida , output = resultado Esperado
    const resultadoEsperado = 5;

    // 2 - Executa
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    const resultadoAtual = somarDoisNumeros (num1,num2);

    // 3 - Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
});

test("Subtrair 50-10:",()=>{
    //1 - configura;
    const num1 =50;
    const num2 = 10;
    const resultadoEsperado = 40;
    //2 - Executa;
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoAtual = subtrairDoisNumeros (num1, num2);
    //3 - Valida;
    expect(resultadoAtual).toBe(resultadoEsperado);
});


test("Multiplicar 6 * 3:", ()=>{
    // 1 - configura; valores de entrada e resultado esperado
    const num1 = 6;
    const num2 = 3;
    const resultadoEsperado = 18;
    // 2 - executa e valida Juntos
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    expect(multiplicarDoisNumeros(num1,num2)).toBe(resultadoEsperado);
});



//teste Positivo
test("Dividir 8/4:",()=>{
    const num1 = 8;
    const num2 = 4;
    const resultadoEsperado = 2;
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect (dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});

//teste Negativo / Teste de Exceção
test("Dividir por zero:",()=>{
    const num1 = 7;
    const num2 = 0;
    const resultadoEsperado = Infinity;
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect (dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});

// Data Driven Test para a função dividirDoisNumeros
// Lista / Array / Tuplas que contém a massa de teste
const massaDivisao = [
    [8,4,2], 
    [7,0,Infinity],
    [10,20,0.5],
    [-20,-5, 4]
] 
// Script que usa a massa de teste no formato lista
test.each(massaDivisao)("Dividir %f / %f",(num1,num2,resultadoEsperado)=>{
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    expect (dividirDoisNumeros(num1,num2)).toBe(resultadoEsperado);
});

// Script que usa a massa de teste no formato JSON
// Script que usa a massa de teste no formato json
test.each(massaDivisaoJSON.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))("Divida %f / %f",(num1, num2, resultadoEsperado) => {
    expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
});

