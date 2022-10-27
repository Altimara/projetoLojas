//Bibliotecas
// Importar a classe mãe / super classe
const BasePage = require("./BasePage"); // aqui esta herdando do Base Page
// Importar o By do Selenium
const By = require("selenium-webdriver").By;

// Criar a classe HomePage a partir da classe Base Page
class HomePage extends BasePage {  //Home page herda do Base Page, tem que estender

    //Monta a estrutura de dados da classe - está recebendo o Selenium
    constructor(driver){
        super(driver) // chama a super classe BasePage e passa o Selenium
        //mapeamos cada elemento da tela (no caso 4 deles)
        this.linkDaSemana =  By.linkText("destination of the week! The Beach!");   // mapeando, dando apelido aos elementos
        this.dropDownOrigem = By.name("fromPort");
        this.dropDownDestino = By.name ("toPort");
        this.ctnProcurarVoos = By.css(".btn-primary");
    }
    // Criar ações baseadas nos elementos mapeados

    async consultarDestinoDaSemana(){
        await this.driver.FindElement (this.linkDaSemana).click();
    }
    // Selecionar a origem e destino de um voo
    async selecionarOrigemDestinoVoo(origem, destino){
        // Selecionar origem
        // primeiro seleciona o dropdown / combo origem
        let ddOrigem = await this.driver.FindElement(this.dropDownOrigem);
        // em segundo lugar, selecionar a opção dropdowb / combo
        await ddOrigem.findElement(By.css(`[value]=${origem}`)).click();

        //Selecionar destino
        let ddDestino = await this.driver.FindElement(this.dropDownDestino);
        await ddDestino.findElement(By.css(`[value]=${destino}`)).clck();

        // Clicar no botão Find Flights
        await this.driver.findElement(this.btnProcurarVoos).click();

    }
}
module.exports = HomePage;   // para que a classe seja utilizada fora