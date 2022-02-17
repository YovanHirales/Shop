import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	//Cart
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '25px',
	},
	box: {
		width: '60vw',
	},

	//Cart Item
	root: {
		height: '10rem',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
	media: {
		height: '100%',
		width: '25%',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		marginLeft: '2%',
		marginRight: '2%',
	},
	cardContent: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},
	contentTop: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	link: {
		textDecoration: 'none',
		color: 'blue',
	},
}));
