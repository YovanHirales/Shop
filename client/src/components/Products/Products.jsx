import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product';

const Products = ({ products, handleAddToCart }) => {
	return (
		<main>
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
