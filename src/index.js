const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig.js');

//const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=> {
        console.log(`Server started at PORT ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'sachin2317080@gmail.com',
        //     'This is a testing email',
        //     'hey, We are here to support you'
        // );

        cron.schedule('*/2 * * * *',()=> {
            console.log("running a task every two  minutes");
        });

    });
}

setupAndStartServer();