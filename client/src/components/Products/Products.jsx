import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Product from './Product';
import useStyles from './styles';

const Products = ({ products, handleAddToCart }) => {
	const classes = useStyles();

	return (
		<main>
			<Paper square elevation='0' className={classes.hero}>
				<Container maxWidth='sm' className={classes.heroText}>
					<Typography variant='h2' style={{ fontWeight: '700' }}>
						KEYBOARDS
					</Typography>
					<Typography variant='body1'>
						Shop wired and wireless keyboards. Choose from the mechanical,
						ergonomic, comfort, portable, Bluetooth, multi-device, and multi-OS
						product range.
					</Typography>
				</Container>
			</Paper>
			<Grid
				container
				justify='center'
				spacing={4}
				alignItems='stretch'
				sx={{ padding: '3%' }}
			>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} md={4} lg={3}>
						<Product product={product} handleAddToCart={handleAddToCart} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
