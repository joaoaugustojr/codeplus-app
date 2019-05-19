import React, { Component } from 'react';

import { TextInput, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import styles from '../style';
import Icon from 'react-native-vector-icons/Ionicons';
import bgimage from '../images/background.jpg';
import api from '../services/api';
import Mymodal from '../components/modal';

export default class Login extends Component {
	//opção de tirar cabecario das paginas de navegacao
	static navigationOptions = {
		header: null
	};

	//costrutor de variaveis de estado
	constructor(props) {
		super(props);
		this.state = {
			showPass: true,
			press: false,
			user: '',
			password: '',
			products: '',
			errorMessage: ''
		};
	}

	componentDidMount = async () => {
		try {
			const response = await api.get('products');
			const products = '' + response.data[0]['name'];
			this.setState({ products });
		} catch (error) {
			const errorMessage = 'Erro na Conexão';
			this.setState({ errorMessage });
		}
	};

	// funcao para mostrar e desativar visualização de senha
	showPass = () => {
		if (this.state.press == false) {
			this.setState({ showPass: false, press: true });
		} else {
			this.setState({ showPass: true, press: false });
		}
	};

	loginValidate = async () => {
		try {
			//alert(this.state.user);
			const response = await api.post('login', {
				user: this.state.user,
				password: this.state.password
			});

			alert('usuario: ' + response.data['login']);
		} catch (error) {
			alert('error' + JSON.stringify(error));
		}
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<ImageBackground source={bgimage} style={styles.backgroundContainer}>
				<View style={styles.logoTipo}>
					<Icon name={'md-barcode'} size={75} color={'white'} />
					<Text style={styles.textLogo}>Code+</Text>
				</View>

				<View style={styles.inputLogin}>
					<Icon style={styles.icon} name={'md-person'} size={30} color={'#e0e0eb'} />
					<TextInput
						style={styles.inputText}
						placeholder={'Usuário'}
						placeholderTextColor={'#e0e0eb'}
						underlineColorAndroid="transparent"
						autoCorrect={false}
						onChangeText={(user) => {
							this.setState({ user });
						}}
					/>
				</View>

				<View style={styles.inputLogin}>
					<Icon style={styles.icon} name={'md-key'} size={30} color={'#e0e0eb'} />
					<TextInput
						style={styles.inputText}
						placeholder={'Senha'}
						secureTextEntry={this.state.showPass}
						placeholderTextColor={'#e0e0eb'}
						underlineColorAndroid="transparent"
						autoCorrect={false}
						onChangeText={(password) => {
							this.setState({ password });
						}}
					/>

					{/*<TextInput>{this.state.user}</TextInput>*/}

					<TouchableOpacity onPress={this.showPass.bind(this)} style={styles.btnEye}>
						<Icon name={this.state.press == false ? 'md-eye' : 'md-eye-off'} size={25} color={'#e0e0eb'} />
					</TouchableOpacity>
				</View>

				<View>
					<Text>{this.state.errorMessage}</Text>
				</View>

				<TouchableOpacity style={styles.Button} onPress={this.loginValidate}>
					<Text style={styles.textButton}>ENTRAR</Text>
				</TouchableOpacity>
			</ImageBackground>
		);
	}
}
