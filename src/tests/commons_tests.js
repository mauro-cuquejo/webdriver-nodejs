const { By, Key, Builder, Capabilities, WebDriver } = require('selenium-webdriver');


module.exports = {
    finalizar_driver(driver, interval) {
        setInterval(function () {
            driver.quit();
        }, interval);
    },

    async ingresar_texto_en_elemento(driver, name, texto) {
        await driver.findElement(By.name(name))
            .sendKeys(texto, Key.RETURN);
    },

    async obtener_texto_en_elemento(driver, name) {
        elemento = await driver.findElement(By.name(name));
        texto = await elemento.getText();
        return texto;
    },

    async navegar_a_url(driver, url) {
        await driver.get(url);
    },

    async inicializar_driver(navegador) {
        let driver = new Builder().forBrowser(navegador).build();
        return driver;

    },

    async cerrar_ventana(driver, interval) {
        setInterval(function () {
            driver.close();
        }, interval);
    }
}