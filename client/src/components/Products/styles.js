import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '100%',
		height: '100%',
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
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	price: {
		marginLeft: '10px',
	},
}));
