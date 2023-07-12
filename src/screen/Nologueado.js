import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Nologueado() {
	const navigation = useNavigation();

	const goToLogin = () => {
		navigation.navigate('Account');
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Usuario no logueado</Text>
			<Text style={styles.text}>Inicia sesión para ver favoritos</Text>
			<Image
				source={{
					uri: 'https://www.insak.com.co/aym_image/aym_ico/aym_ico_user.png',
				}}
				style={styles.image}
			/>
			<Button title='Iniciar sesion' onPress={goToLogin} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 30,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 100,
		marginTop: 30,
	},
});
