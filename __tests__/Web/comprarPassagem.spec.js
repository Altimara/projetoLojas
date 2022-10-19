// Generated by Selenium IDE   --> Estilo simples de programação, não esta projetando um page object
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Comprar Passagem', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Comprar Passagem', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1376, height: 744 })
    await driver.findElement(By.name("fromPort")).click()
    await driver.findElement(By.name("fromPort")).click()
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'Philadelphia']")).click()
    }
    await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'New York']")).click()
    }
    //Botão procurar Voo
    await driver.findElement(By.css(".btn-primary")).click()
    //Botão Escolher Primeiro Voo
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
    await driver.findElement(By.id("inputName")).click()
    await driver.findElement(By.id("inputName")).sendKeys("Altimara")
    await driver.findElement(By.id("address")).sendKeys("r WVE")
    await driver.findElement(By.id("city")).sendKeys("Joinville")
    await driver.findElement(By.id("state")).sendKeys("SC")
    await driver.findElement(By.id("zipCode")).click()
    await driver.findElement(By.id("zipCode")).sendKeys("12345")
    await driver.findElement(By.id("creditCardNumber")).click()
    await driver.findElement(By.id("creditCardNumber")).sendKeys("123")
    await driver.findElement(By.id("creditCardYear")).click()
    //await driver.findElement(By.css("html")).click()
    await driver.findElement(By.id("creditCardYear")).sendKeys("2023")
    await driver.findElement(By.id("nameOnCard")).sendKeys("alt")
    // Botão comprar
    await driver.findElement(By.css(".btn-primary")).click()
    //await driver.findElement(By.css("h1")).click()
    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).click()
    assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")
  })
})
