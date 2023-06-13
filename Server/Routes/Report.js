const express = require('express');
const StatMainPage = require('../Controllers/Report Stats/MainPage');

const RouterReport = express.Router();

RouterReport.post("/main", StatMainPage)

module.exports = RouterReport;