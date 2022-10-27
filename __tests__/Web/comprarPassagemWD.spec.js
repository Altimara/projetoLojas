// Configura
// >>>>> arrumar as variáveis de ambiente e rodar novamente este material
// Bibliotecas (funções que outras pessoas já fizeram, agiliza o processo todo, necessário saber a procedencia)

const { Builder, By} = require ("selenium-webdriver") // Builder é o construtor do selenium
const { assert } = require ("chai").assert
const chromedriver = require("chromedriver") // referencia ao Chrome Driver
const webdriver = require ("selenium-driver")
// Executa, describe usa no jest
describe("Comprar Passagem via programação",() => {

    let driver // declaramos a variável / objeto, que receberá o Selenium. Driver é apelido do selenium, reservamos espaço na memória

    // Iniciar
    beforeEach(async function(){
        // Instanciar o Selenium WebDriver para controlar o Chrome
        driver = await new Builder().forBrowser("chrome").buid()   // drive esta sendo construido como selenium Builder, herança
        //Configurar o tempo de espera do Selenium 
        await driver.mannage(). setTimeouts({implicit: 30000})
    })

    // Finalizar
    afterEach(async function(){
        await driver.quit();  //destroir o objeto do Selenium WebDriver
    })
    // Testar
    it("Comprar Passagem WD", async ()=> {
        //abrir o site, sendo controlado pelo Selenium
        await driver.get("https://www.blazedemo.com/")  
        // clicar no combo origem / embarque
        await driver.findElement(By.name ("fromPort")).click()
        // selecionar a origem como São Paolo
        {
            const dropdown = await driver.findElement(By.name("fromPort"))  // selecionou o dropdown
            await dropdown.findElement(By.Xpath("//option[. = 'São Paolo']")).click()   // seleciona o filho
        }

       // selecionar o destino 
       {
        const dropdown = await driver.findElement(By.name("toPort"))  // selecionou o dropdown
        await dropdown.findElement(By.Xpath("//option[. = 'Berlin']")).click()   // seleciona o filho
       }
       // clicar no botão Find Flights
       // ou await driver.findElement(By.className ("btn btn-primary"))
       //ou await driver.findElement(By.css("input.btn.btn btn-primary"))
       await driver.findElement(By.css(".btn-primary")).click()
    
        // VAlida
        // Valida se foi para a página de reserva
        driver.sleep(5000)
        assert.equal(await driver.getTitle() == "BlazeDemo - reserve")    //assert(atual, "esperado")
        
    })
})



// Valida