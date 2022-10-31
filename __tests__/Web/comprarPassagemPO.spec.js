// Bibliotecas e Importações
// Importa a HomePage
const HomePage = require("../../pageObjects/HomePage");
const webdriver = require ("selenium-webdriver");
const chrome = require ("selenium-webdriver/chrome");
const assert = require ("chai").assert;
require ("chromedriver");

// ToDo: massa de teste
// classes monta as estruturas, o describe executa
//Execução do Teste
describe("Comprar Passagem via Blazedemo - Page Object ",()=>{
    let driver; // objeto que será o Selenium
    // cria o objeto para fazer uma configuração avançada do driver
    const chOptions = new chrome.Options(); // quando trabalhar com 1 browser só usa Options, se existir mais browser usar o específico

    // Inicialização
    beforeEach(() =>{
        driver = new webdriver.Builder()    // instancia o Selenium, inicia o Selenium
            .forBrowser ("chrome")
            .setChromeOptions(chOptions)
            .build()
        driver.manage().setTimeouts({implicit:30000}); // espera implicita
        driver.manage().window().maximize();    //maximizar a janela
    });
    //Finalização
    afterEach(()=>{
        driver.quit(); // Encerra o objeto do Selenium
    });
    // Testes
    it("Comprar Passagem PO",async()=> {
        await driver.get ("https://blazedemo.com");
        const homePage = new HomePage(driver);   // instancia a HomePage, incializa
        await homePage.selecionarOrigemDestinoVoo("Boston","Dublin");
        assert.equal(await homePage.lerTituloGuia,"Blasedemo - reserve");
        await homePage.driver.sleep(3000);

    });

});

// Para rodar usar o comando: PS C:\Iterasys\projetoLojas> npm test comprarPassagemPO.spec.js


