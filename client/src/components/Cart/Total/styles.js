import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	root: {
		height: '10rem',
		width: '30vw',
	},
	subtotal: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	itemTotal: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));
