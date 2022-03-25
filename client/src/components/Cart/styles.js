import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	//Cart
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '25px',
	},
	containerCol: {
		display: 'flex',
		flexDirection: 'column-reverse',
		alignContent: 'center',
		justifyContent: 'center',
	},
	box: {
		width: '100%',
	},

	//Cart Item
	root: {
		height: '10rem',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
	rootCol: {
		height: '250px',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
	},
	media: {
		height: '100%',
		width: '25%',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		marginLeft: '2%',
		marginRight: '2%',
	},
	mediaCol: {
		height: '200px',
		width: '100%',
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
