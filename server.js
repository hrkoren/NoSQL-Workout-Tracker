//required modules
const express = require('express');
const mongoose = require('mongoose');

//port info
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//routes
app.use(require('./routes/api/workouts'));
app.use(require('./routes/html'));

//app listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});