class BasePage {   // irá otimizar a estrutura, é uma estrutura específica de Orientação a Objeto

    constructor(driver) { //driver é do Selenium
        this.driver = driver; //este driver irá receber de fora outro driver, esta conecta o exterior com o interior, um conversor
    }  

    async lerTituloGuia(){
        return await this.driver.getTitle();
    }
}

module.exports = BasePage;   // para que a classe seja utilizada fora
