import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import React from 'react';
import useStyles from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function CartItem({ item, handleUpdateCart, handleDeleteItem, cart }) {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:800px)');

	const onUpdateCart = (lineItemId, newQuantity) =>
		handleUpdateCart(lineItemId, newQuantity);

	const onDeleteCartItem = (lineItemId) => handleDeleteItem(lineItemId);

	return (
		<Card className={matches ? classes.rootCol : classes.root}>
			<CardMedia
				className={matches ? classes.mediaCol : classes.media}
				image={item.image.url}
				title={item.name}
			/>
			<CardContent className={classes.cardContent}>
				<div className={classes.contentTop}>
					<Typography variant='h5' gutterBottom>
						{item.name}
					</Typography>
					<Typography variant='h5'>
						{item.line_total.formatted_with_symbol}
					</Typography>
				</div>
				<CardActions>
					<Typography>Quantity:</Typography>
					<Button
						onClick={() => onUpdateCart(item.id, item.quantity - 1)}
						type='button'
						size='small'
					>
						-
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button
						onClick={() => onUpdateCart(item.id, item.quantity + 1)}
						type='button'
						size='small'
					>
						+
					</Button>
					<Button onClick={() => onDeleteCartItem(item.id)} variant='outlined'>
						Remove
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
}

export default CartItem;
