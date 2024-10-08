const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig.js');

//const { sendBasicEmail } = require('./services/email-service');

const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=> {
        console.log(`Server started at PORT ${PORT}`);
        jobs();

        // sendBasicEmail(
        //     'support@admin.com',
        //     'sachin2317080@gmail.com',
        //     'This is a testing email',
        //     'hey, We are here to support you'
        // );

        

    });
}

setupAndStartServer();