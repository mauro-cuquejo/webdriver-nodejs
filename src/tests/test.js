const utilidades = require('./commons_tests');
const dotenv = require('dotenv');
const { finalizar_driver } = require('./commons_tests');
const { WebDriver } = require('selenium-webdriver');
const assert = require("assert");
dotenv.config();
require('chromedriver');

let driver;

module.exports = {
    async test_case_ejemplo() {
        if (driver) {
            await driver.close();
        }
        driver = await utilidades.inicializar_driver("chrome");

        utilidades.navegar_a_url(driver, process.env.URL);

        utilidades.ingresar_texto_en_elemento(driver, "q", "Hola Mundo");

        let valor = await utilidades.obtener_texto_en_elemento_xpath(driver, `//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input`);

        assert.equal("Hola Mundo", valor);

        //utilidades.finalizar_driver(driver, process.env.DEFAULT_TIME_INTERVAL);
    }
}

