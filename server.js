const express = require('express');

const app = express();

const connectDB = require('./config/db');

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Define Routes
app.use('/api/users', require('./routes/apis/users'));
app.use('/api/posts', require('./routes/apis/post'));
app.use('/api/auth', require('./routes/apis/auth'));
app.use('/api/profile', require('./routes/apis/profile'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
