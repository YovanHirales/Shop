import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';

function Total({ cart, handleEmptyCart }) {
	const classes = useStyles();

	const onEmpty = () => handleEmptyCart();

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<div className={classes.subtotal}>
					<Typography variant='h5'>Subtotal</Typography>
					<Typography variant='h6'>
						{cart.subtotal.formatted_with_symbol}
					</Typography>
				</div>
				<div className={classes.itemTotal}>
					<Typography variant='body1'>Total Items:</Typography>
					<Typography variant='body1'>{cart.line_items.length}</Typography>
				</div>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					variant='contained'
					sx={{ bgcolor: 'error.main' }}
					onClick={onEmpty}
				>
					Remove All
				</Button>
				<Button variant='contained' component={Link} to='/checkout'>
					Check Out
				</Button>
			</CardActions>
		</Card>
	);
}

export default Total;
