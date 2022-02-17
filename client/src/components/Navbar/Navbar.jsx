//React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//MUI
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Badge,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

//Navbar Component
const Navbar = ({ logout, totalItems, isAuthenticated }) => {
	return (
		<AppBar position='static' color='primary' sx={{ marginBottom: '2%' }}>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
						Shop
					</Link>
				</Typography>
				{!isAuthenticated ? (
					<Fragment>
						<Link
							to='/register'
							style={{ textDecoration: 'none', color: 'white' }}
						>
							<Button color='inherit'>Register</Button>
						</Link>
						<Link
							to='/login'
							style={{ textDecoration: 'none', color: 'white' }}
						>
							<Button color='inherit'>Login</Button>
						</Link>
					</Fragment>
				) : (
					<Button color='inherit' onClick={logout}>
						Logout
					</Button>
				)}
				<Link to='/Cart' style={{ textDecoration: 'none', color: 'white' }}>
					<IconButton aria-label='Show cart items' color='inherit'>
						<Badge badgeContent={totalItems} color='success'>
							<ShoppingCart />
						</Badge>
					</IconButton>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
