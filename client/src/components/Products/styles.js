import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	imgContainer: {
		padding: '5%',
	},
	media: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		height: '200px',
		width: '100%',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	price: {
		marginLeft: '10px',
	},
	hero: {
		height: '60vh',
		backgroundImage:
			'url(https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/plp/keyboards/keyboards-twitter-image-.jpg?v=1)',
		backgroundSize: 'cover',
		backgroundPosition: 'center bottom 60%',
		display: 'flex',
	},
	heroText: {
		marginLeft: '0',
		marginRight: '60%',
		marginTop: '12%',
		color: '#2f3132',
		fontFamily: 'Noto Sans, sans-serif',
	},
}));
