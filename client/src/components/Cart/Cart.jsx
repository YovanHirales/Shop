import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Typography, Button, Box } from '@mui/material';
import useStyles from './styles';

//Components
import CartItem from './CartItem';
import Total from './Total/Total';

function Cart({ cart, handleEmptyCart, handleUpdateCart, handleDeleteItem }) {
	const classes = useStyles();

	const EmptyCart = () => (
		<Typography variant='subtitle1'>
			Your cart is empty,
			<Link className={classes.link} to='/'>
				{' '}
				try adding some items
			</Link>
			!
		</Typography>
	);

	if (!cart.line_items) return 'Loading...';

	const FilledCart = () => (
		<Box className={classes.container}>
			<Box className={classes.box}>
				<Grid container spacing={3}>
					{cart.line_items.map((item) => (
						<Grid item xs={12} lg={12} key={item.id}>
							<CartItem
								item={item}
								handleDeleteItem={handleDeleteItem}
								handleEmptyCart={handleEmptyCart}
								handleUpdateCart={handleUpdateCart}
								cart={cart}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
			<Total cart={cart} handleEmptyCart={handleEmptyCart} />
		</Box>
	);

	return (
		<Container>
			<Typography variant='h3'>Your Shopping Cart</Typography>
			{!cart.line_items.length || !cart ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
}

export default Cart;
