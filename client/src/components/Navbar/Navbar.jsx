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
		<AppBar
			position='sticky'
			sx={{ marginBottom: '2%', backgroundColor: '#2f3132' }}
		>
			<Toolbar>
				{/* Home Text */}
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
						MyKeyboard
					</Link>
				</Typography>

				{/* Cart Text and Icon*/}
				<Link to='/Cart' style={{ textDecoration: 'none', color: 'white' }}>
					<IconButton aria-label='Show cart items' color='inherit'>
						<Badge badgeContent={totalItems} color='success'>
							<Typography style={{ marginRight: '0.5rem' }}>Cart</Typography>
							<ShoppingCart />
						</Badge>
					</IconButton>
				</Link>

				{/* Login and Logout */}
				{!isAuthenticated ? (
					<Fragment>
						<Link
							to='/login'
							style={{
								textDecoration: 'none',
								color: 'white',
								marginLeft: '1rem',
							}}
						>
							<Button color='inherit'>Login</Button>
						</Link>
					</Fragment>
				) : (
					<Button color='inherit' onClick={logout}>
						Logout
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
