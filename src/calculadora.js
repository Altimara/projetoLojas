let somarDoisNumeros = function somarDoisNumeros(num1, num2){
    const resultado = num1 +num2;
    return resultado;

}
/* modelo mais didatico
let subtraiDoisNumeros = function subtraiDoisNumeros(num1, num2){
    subtraiDoisNumeros = num1 - num2;
    return subtraiDoisNumeros;
} */
//modelo mais compacto
let subtrairDoisNumeros = function subtraiDoisNumeros(num1, num2){
   return num1 - num2;
}
// ignora o nome da função 2 vezes 
const multiplicarDoisNumeros = (num1, num2) => num1 * num2;

const dividirDoisNumeros = (num1, num2) => num1 / num2;
module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};