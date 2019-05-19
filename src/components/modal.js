import React, { Component } from 'react';

import { View, Modal, TouchableHighlight } from 'react-native';
import styles from './style';
import SimpleModal from './simplemodal';

export default class MyModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalVisible: false
		};
	}

	modalVisible = (bool) => {
		this.setState({ isModalVisible: bool });
	};

	render() {
		return (
			<View>
				<TouchableHighlight onPress={() => this.modalVisible(true)}>
					<Text>Opem Modal</Text>
				</TouchableHighlight>
				<Modal visible={this.state.isModalVisible} onRequestClose={() => this.modalVisible(false)}>
					<SimpleModal modalVisible={this.modalVisible} />
				</Modal>
			</View>
		);
	}
}
