//React
import React, { useState, useEffect } from 'react';
import './app.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

//Pages
import {
	Navbar,
	Login,
	Register,
	Products,
	Cart,
	Checkout,
} from './components';

//Commerce.js
import { commerce } from './lib/commerce';

//App
function App() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});
	const [order, setOrder] = useState({});
	const [errorMessage, setErrorMessage] = useState('');
	const [userInfo, setUserInfo] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	//Authentication
	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	const isAuth = async () => {
		try {
			const response = await fetch('/auth/verify', {
				method: 'GET',
				headers: { token: localStorage.token },
			});
			const parseRes = await response.json();

			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.log('Not logged in');
		}
	};

	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		setAuth(false);
	};

	const getName = async () => {
		try {
			const response = await fetch('/user/', {
				method: 'GET',
				headers: { token: localStorage.token },
			});
			const parseRes = await response.json();

			setUserInfo(parseRes);
		} catch (err) {
			console.log('Not logged in');
		}
	};

	//Commerce

	//Fetch  Products
	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	//Fetch Cart
	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	//Add Items to Cart
	const handleAddToCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity);

		setCart(cart);
	};

	//Update Cart Item Quantities
	const handleUpdateCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity });

		setCart(cart);
	};

	//Delete Cart Item
	const handleDeleteItem = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);

		setCart(cart);
	};

	//Delete All Cart Items
	const handleEmptyCart = async (productId) => {
		const { cart } = await commerce.cart.empty();

		setCart(cart);
	};

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();

		setCart(newCart);
	};

	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(
				checkoutTokenId,
				newOrder
			);

			setOrder(incomingOrder);

			refreshCart();
		} catch (error) {
			setErrorMessage(error.data.error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
		isAuth();
		getName();
	}, []);

	return (
		<Router>
			<Navbar
				isAuthenticated={isAuthenticated}
				totalItems={cart.total_items}
				logout={logout}
			/>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<Products
							products={products}
							handleAddToCart={handleAddToCart}
							handleUpdateCart
						/>
					}
				/>
				<Route
					exact
					path='/login'
					element={
						!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to='/' />
					}
				/>
				<Route
					exact
					path='/register'
					element={
						!isAuthenticated ? (
							<Register setAuth={setAuth} />
						) : (
							<Navigate to='/' />
						)
					}
				/>
				<Route
					exact
					path='/cart'
					element={
						<Cart
							cart={cart}
							handleDeleteItem={handleDeleteItem}
							handleEmptyCart={handleEmptyCart}
							handleUpdateCart={handleUpdateCart}
							totalItems={cart.total_items}
						/>
					}
				/>
				<Route
					exact
					path='/login/checkout'
					element={
						!isAuthenticated ? (
							<Login setAuth={setAuth} />
						) : (
							<Navigate to='/checkout' />
						)
					}
				/>
				<Route
					exact
					path='/checkout'
					element={
						isAuthenticated ? (
							<Checkout
								cart={cart}
								onCaptureCheckout={handleCaptureCheckout}
								order={order}
								error={errorMessage}
								userInfo={userInfo}
							/>
						) : (
							<Navigate to='/login/checkout' />
						)
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
