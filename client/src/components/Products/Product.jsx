import React from 'react';
import {
	CardMedia,
	CardActions,
	CardContent,
	Typography,
	IconButton,
	Paper,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles';

const Product = ({ product, handleAddToCart }) => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.root}>
			<div>
				<div className={classes.imgContainer}>
					<CardMedia
						className={classes.media}
						image={product.image.url}
						title={product.name}
					/>
				</div>
				<CardContent>
					<div className={classes.cardContent}>
						<Typography variant='h5' gutterBottom>
							{product.name}
						</Typography>
						<Typography className={classes.price} variant='h5'>
							{product.price.formatted_with_symbol}
						</Typography>
					</div>
					<Typography
						dangerouslySetInnerHTML={{ __html: product.description }}
						variant='body2'
						color='textSecondary'
					/>
				</CardContent>
			</div>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton
					aria-label='Add to Cart'
					onClick={() => handleAddToCart(product.id, 1)}
				>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Paper>
	);
};

export default Product;
