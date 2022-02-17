import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const Register = ({ setAuth }) => {
	const paperStyle = {
		padding: 20,
		height: '70vh',
		width: 280,
		margin: '20px auto',
	};
	const avatarStyle = {
		backgroundColor: '#1976d2',
		marginBottom: 30,
	};

	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { name, email, password };

			const response = await fetch('http://localhost:5000/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			localStorage.setItem('token', parseRes.token);

			setAuth(true);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<Avatar style={avatarStyle}>
						<LockIcon />
					</Avatar>
					<h2>Sign Up</h2>
				</Grid>
				<form onSubmit={onSubmitForm}>
					<TextField
						placeholder='Enter Username'
						type='text'
						name='name'
						fullWidth
						variant='standard'
						required
						margin='normal'
						value={name}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						placeholder='Enter Email'
						type='text'
						name='email'
						fullWidth
						variant='standard'
						required
						margin='normal'
						value={email}
						onChange={(e) => onChange(e)}
					/>
					<TextField
						placeholder='Enter Password'
						type='password'
						name='password'
						fullWidth
						variant='standard'
						required
						margin='normal'
						value={password}
						onChange={(e) => onChange(e)}
					/>
					<Button type='submit' color='primary' variant='contained' fullWidth>
						Register
					</Button>
				</form>
			</Paper>
		</Grid>
	);
};

export default Register;
