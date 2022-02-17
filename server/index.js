const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//Routes

//register and login
app.use('/auth', require('./routes/jwtAuth'));

//dashboard
app.use('/dashboard', require('./routes/dashboard'));

app.listen(PORT, () => {
	console.log(`Mixin up port ${PORT}...`);
});
