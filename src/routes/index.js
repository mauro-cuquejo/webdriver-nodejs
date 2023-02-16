const express = require('express');
const path = require('path');
const { finalizar_driver, inicializar_driver } = require('../tests/commons_tests');
const { test_case_ejemplo } = require('../tests/test')
router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/test_ejemplo', async (req, res) => {
    test_case_ejemplo();
    res.sendStatus(200);
});

module.exports = router;