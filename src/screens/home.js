import React, { Component } from 'react';

import { TextInput, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import styles from '../style';
import Icon from 'react-native-vector-icons/Ionicons';
import bgimage from '../images/background.jpg';

export default class Home extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<ImageBackground source={bgimage} style={styles.backgroundContainer}>
				<View style={styles.logoTipo}>
					<Icon name={'md-barcode'} size={75} color={'white'} />
					<Text style={styles.textLogo}>Code+</Text>
				</View>

				<View style={styles.scrollMenu}>
					<TouchableOpacity style={styles.ButtonMenu}>
						<Icon style={styles.iconMenu} name={'md-add-circle'} size={40} color={'#e0e0eb'} />
						<Text style={styles.textMenu}>Nova Listagem</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.ButtonMenu}>
						<Icon style={styles.iconMenu} name={'md-apps'} size={40} color={'#e0e0eb'} />
						<Text style={styles.textMenu}>Listagens</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.ButtonMenu}>
						<Icon style={styles.iconMenu} name={'md-notifications'} size={40} color={'#e0e0eb'} />
						<Text style={styles.textMenu}>Avisos</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.ButtonMenu}>
						<Icon style={styles.iconMenu} name={'md-cog'} size={40} color={'#e0e0eb'} />
						<Text style={styles.textMenu}>Ajustes</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}
