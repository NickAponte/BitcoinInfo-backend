require("dotenv").config()
const express = require('express');
const app = express(); 
const cors = require("cors")
const {
	handleErrors,
	handleValidationErrors,
} = require('./middleware/custom_errors');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const questionsController = require('./controllers/Questions')
app.use("/questions/", questionsController)

// const clientsController = require('./controllers/Client')
// app.use("/clients/", clientsController)
// const prospectsController = require('./controllers/Prospect');
// app.use('/prospects/', prospectsController);


app.use(handleValidationErrors);

app.use(handleErrors);

const port = process.env.PORT || 5000

app.listen(port, () => { 
    console.log(`listening on ${port}`)
})