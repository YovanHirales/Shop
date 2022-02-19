import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Avatar,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
	Collapse,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyles from './styles';

const Error = (
	<Typography sx={{ my: 2, color: 'error.main' }}>
		Wrong email and/or password
	</Typography>
);

function Login({ setAuth }) {
	const classes = useStyles();

	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});
	const { email, password } = inputs;

	const [error, setError] = useState(false);

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };

			const response = await fetch('/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			console.log(response);

			const parseRes = await response.json();
			console.log(parseRes.hasOwnProperty('token'));
			if (parseRes.hasOwnProperty('token')) {
				localStorage.setItem('token', parseRes.token);

				setAuth(true);
			} else {
				setError(true);
			}
		} catch (err) {
			setError(true);
			console.log('error');
		}
	};

	return (
		<Fragment>
			<Grid align='center'>
				<Paper elevation={10} className={classes.paper}>
					<Grid>
						<Avatar
							sx={{ bgcolor: 'primary.main', mb: 3 }}
							className={classes.avatar}
						>
							<LockIcon />
						</Avatar>
						<h2>Login</h2>
					</Grid>
					<form onSubmit={onSubmitForm}>
						<TextField
							name='email'
							type='text'
							placeholder='Email'
							fullWidth
							variant='standard'
							margin='normal'
							required
							value={email}
							onChange={onChange}
						/>
						<TextField
							name='password'
							type='password'
							placeholder='Password'
							fullWidth
							variant='standard'
							margin='normal'
							required
							value={password}
							onChange={onChange}
						/>
						<Button type='sumbit' variant='contained' fullWidth>
							Sign In
						</Button>
						<Typography>
							Don't have an account?
							<Button component={Link} to='/register'>
								Sign Up
							</Button>
						</Typography>
					</form>
					{!error ? '' : <Collapse in={error}>{Error}</Collapse>}
				</Paper>
			</Grid>
		</Fragment>
	);
}

export default Login;
