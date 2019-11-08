const express= require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const fileUpload = require('express-fileupload');

const UserRoutes= require('./routes/user');
const BusinessRoutes= require('./routes/business');
const SquadRoutes= require('./routes/squad');
const ServiceRoutes= require('./routes/service');
const JobRoutes= require('./routes/job');
const ToDoListRoutes= require('./routes/toDoList');
const ToDoRoutes= require('./routes/toDo');
const ColorsRoutes= require('./routes/color');
const CalendarRoutes= require('./routes/calendar');
const JobTaskRoutes= require('./routes/jobTask');
const EventRoutes= require('./routes/event');

const app = express();

app.use(cors());
app.get('/test', (req, res) => {
    res.send('Hello!')
})
app.use(bodyParser.json());

app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));

app.use(UserRoutes);
app.use(BusinessRoutes);
app.use(SquadRoutes);
app.use(ServiceRoutes);
app.use(JobRoutes);
app.use(ToDoListRoutes);
app.use(ToDoRoutes);
app.use(ColorsRoutes);
app.use(CalendarRoutes);
app.use(JobTaskRoutes);
app.use(EventRoutes);

app.listen(3000);