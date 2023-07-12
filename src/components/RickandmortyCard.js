import { TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RickandmortyCard(props) {
	const { characters } = props;
	const navigation = useNavigation();

	const goToPersonaje = () => {
		console.log(`Conoce mas del personaje :${characters.name}`);
		navigation.navigate('RickandmortyScreen', { characters: characters });
	};
	return (
		<TouchableWithoutFeedback onPress={goToPersonaje}>
			<View style={{ alignContent: 'center', alignItems: 'center' }}>
				<View style={{ ...estilos.card }}>
					<View style={estilos.contenidocard}>
						<Text style={estilos.id}>#{`${characters.id}`.padStart(3, 0)}</Text>
						<Image
							source={{
								uri: `${characters.image}`,
							}}
							style={{
								width: 100,
								height: 100,
								resizeMode: 'cover',
								alignSelf: 'center',
								borderRadius: 100,
								borderWidth: 2,
								borderColor: '#000',
							}}
						/>
						<Text
							style={{
								color: '#526A87',
								alignSelf: 'center',
								fontSize: 30,
							}}
						>
							{`${characters.name}`}
						</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
const estilos = StyleSheet.create({
	id: {
		right: -240,
	},
	card: {
		borderRadius: 20,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
		width: 300,
		height: 200,
	},
	contenidocard: {
		marginHorizontal: 18,
		marginVertical: 20,
	},
	touchableBotonInicio: {
		backgroundColor: '#fcf9f9',
		margin: 64,
		padding: 8,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#fcf9f9',
	},
});
