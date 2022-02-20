const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validinfo');
const authorization = require('../middleware/authorization');

//register

router.post('/register', validInfo, async (req, res) => {
	try {
		// destructure req.body
		const { first_name, last_name, email, password } = req.body;

		// check if user exists (if user exists throw error)
		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email,
		]);

		if (user.rows.length !== 0) {
			return res.status(401).send('User already exists');
		}

		// bcrypt users password
		const saltRound = 10;
		const salt = await bcrypt.genSalt(saltRound);

		const bcryptPassword = await bcrypt.hash(password, salt);

		//enter the user in db
		const newUser = await pool.query(
			'INSERT INTO users (first_name, last_name, user_email, user_password) VALUES($1, $2, $3, $4) RETURNING *',
			[first_name, last_name, email, bcryptPassword]
		);

		//generate jwt token
		const token = jwtGenerator(newUser.rows[0].user_id);

		res.json({ token });
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

//login
router.post('/login', validInfo, async (req, res) => {
	try {
		// // destructure req.body
		// const { email, password } = req.body;

		// // check if email exists
		// const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
		// 	email,
		// ]);

		// if (user.rows.length === 0) {
		// 	return res.status(401).send('Password or Email is incorrect');
		// }

		// //check if incoming pass matches database pass
		// const validPassword = await bcrypt.compare(
		// 	password,
		// 	user.rows[0].user_password
		// );

		// if (!validPassword) {
		// 	return res.status(401).json('Password or Email is incorrect');
		// }

		// //give them jwt token
		// const token = jwtGenerator(user.rows[0].user_id);

		res.json('hello');
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/verify', authorization, async (req, res) => {
	try {
		res.json(true);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
