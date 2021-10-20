const PORT=8000
//Requiring all installed dependencies

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

//Initialising eexpress
const app=express()
app.listen(PORT, ()=> console.log('Server is running on PORT'+ PORT))

const url='https://www.theguardian.com/uk'
