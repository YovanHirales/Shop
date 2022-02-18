import React, { useState, useEffect, Fragment } from 'react';
import {
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error, userInfo }) => {
	const [checkoutToken, setCheckoutToken] = useState(null);
	const [activeStep, setActiveStep] = useState(0);
	const [shippingData, setShippingData] = useState({});
	const classes = useStyles();
	const navigate = useNavigate();

	useEffect(() => {
		if (cart.id) {
			const generateToken = async () => {
				try {
					const token = await commerce.checkout.generateToken(cart.id, {
						type: 'cart',
					});

					setCheckoutToken(token);
				} catch {
					if (activeStep !== steps.length) navigate('/');
				}
			};

			generateToken();
		}
	}, [cart.id, navigate, activeStep]);

	const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
	const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

	const next = (data) => {
		setShippingData(data);

		nextStep();
	};

	let Confirmation = () =>
		order.customer ? (
			<Fragment>
				<div>
					<Typography variant='h5'>
						Thank you for your purchase, {order.customer.firstname}{' '}
						{order.customer.lastname}!
					</Typography>
					<Divider className={classes.divider} />
					<Typography variant='subtitle2'>
						Order ref: {order.customer_reference}
					</Typography>
				</div>
				<br />
				<Button component={Link} variant='outlined' type='button' to='/'>
					Back to home
				</Button>
			</Fragment>
		) : (
			<div className={classes.spinner}>
				<CircularProgress />
			</div>
		);
	if (error) {
		Confirmation = () => (
			<Fragment>
				<Typography variant='h5'>Error: {error}</Typography>
				<br />
				<Button component={Link} variant='outlined' type='button' to='/'>
					Back to home
				</Button>
			</Fragment>
		);
	}

	const Form = () =>
		activeStep === 0 ? (
			<AddressForm
				checkoutToken={checkoutToken}
				next={next}
				userInfo={userInfo}
				nextStep={nextStep}
				setShippingData={setShippingData}
			/>
		) : (
			<PaymentForm
				checkoutToken={checkoutToken}
				nextStep={nextStep}
				backStep={backStep}
				shippingData={shippingData}
				onCaptureCheckout={onCaptureCheckout}
			/>
		);

	return (
		<Fragment>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
						<Confirmation />
					) : (
						checkoutToken && <Form />
					)}
				</Paper>
			</main>
		</Fragment>
	);
};

export default Checkout;
