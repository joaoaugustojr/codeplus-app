import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../src/fonts/fonts';

const { width: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
	backgroundContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},

	logoTipo: {
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 50,
		marginBottom: 50
	},

	textLogo: {
		fontFamily: Fonts.obelix,
		color: 'rgba(255,255,255,0.9)',
		fontSize: 20,
		paddingLeft: 10
	},

	inputText: {
		fontFamily: Fonts.caviar,
		textDecorationLine: 'none',
		letterSpacing: 2,
		color: '#ffff',
		width: WIDTH - 65,
		height: 55,
		fontSize: 18,
		paddingLeft: 55,
		borderBottomWidth: 0.3,
		borderBottomColor: 'rgba(255,255,255,0.4)'
	},

	Button: {
		backgroundColor: 'white',
		padding: 13,
		width: WIDTH - 250,
		alignItems: 'center',
		borderRadius: 25,
		marginTop: 25
	},

	ButtonMenu: {
		backgroundColor: 'rgba(255,255,255,0.2)',
		width: 120,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		marginTop: 35
	},

	scrollMenu: {
		flex: 1,
		width: WIDTH - 65,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		borderTopWidth: 0.3,
		borderTopColor: 'rgba(255,255,255,0.3)',
		borderBottomWidth: 0.3,
		borderBottomColor: 'rgba(255,255,255,0.3)',
		marginBottom: 60,
		paddingTop: 10
	},

	btnEye: {
		flex: 1,
		position: 'absolute',
		top: 15,
		right: 20
	},

	textButton: {
		fontSize: 17,
		fontWeight: 'bold'
	},

	textMenu: {
		fontSize: 12,
		color: 'white'
	},

	inputLogin: {
		flexDirection: 'row',
		marginBottom: 40
	},

	icon: {
		padding: 10,
		position: 'absolute',
		color: 'rgba(255,255,255,0.7)'
	},

	iconMenu: {
		padding: 10,
		color: 'white'
	}
});
