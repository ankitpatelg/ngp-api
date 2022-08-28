const express = require("express")
const app = express()
const API = require('./routes/nft')
require('dotenv').config();
const port = process.env.PORT;
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Nodejs project ',
            version:'1.0.0'
        },
        severs:[
            {
                url:'http://localhost:5000/'
            }
        ]
    },
    apis:[]
}
const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use('/api/auth',API);

app.listen(port, ()=>{
    console.log('this is connected in the api')

})