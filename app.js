var socket = require('socket.io-client')('http://localhost:3000');
const express= require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const fileUpload = require('express-fileupload');

const UserRoutes= require('./routes/user');
const BusinessRoutes= require('./routes/business');
const ServiceRoutes= require('./routes/service');
const ColorRoutes= require('./routes/color');
const TodoRoutes= require('./routes/todo');
const CalendarRoutes = require('./routes/calendar');
const EventsRoutes = require('./routes/events');
const ChatRoutes = require('./routes/chat');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(fileUpload());

app.use(UserRoutes);
app.use(BusinessRoutes);
app.use(ServiceRoutes);
app.use(ColorRoutes);
app.use(TodoRoutes);
app.use(CalendarRoutes);
app.use(EventsRoutes);
app.use(ChatRoutes);


app.listen(3000 , ()=>{
    console.log("started")
});
