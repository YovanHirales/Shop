import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Typography, Box } from '@mui/material';
import useStyles from './styles';

//Components
import CartItem from './CartItem';
import Total from './Total/Total';

const Message = ({ message }) => (
	<section>
		<p>{message}</p>
	</section>
);

function Cart({
	cart,
	handleEmptyCart,
	handleUpdateCart,
	handleDeleteItem,
	totalItems,
}) {
	const classes = useStyles();
	const [message, setMessage] = useState('');

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);

		if (query.get('success')) {
			setMessage('Order placed! You will receive an email confirmation.');
		}

		if (query.get('canceled')) {
			setMessage(
				"Order canceled -- continue to shop around and checkout when you're ready."
			);
		}
	}, []);

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

	return message ? (
		<Message message={message} />
	) : (
		<Container>
			<Typography variant='h3'>Your Shopping Cart</Typography>
			{!cart.line_items.length || !cart ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
}

export default Cart;
