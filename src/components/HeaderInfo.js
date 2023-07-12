import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Image,
	ScrollView,
} from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';

import Favorito from './Personajes/Favorito';

export default function HeaderInfo(props) {
	const { characters } = props;
	const { auth } = useAuth();
	return (
		<SafeAreaView style={estilos.contenedor}>
			<Text style={estilos.texto}>{characters.name}</Text>
			<View style={{ flexDirection: 'row' }}>
				<Image style={estilos.imagen} source={{ uri: characters.image }} />
				{auth && <Favorito id={characters.id} />}
			</View>
		</SafeAreaView>
	);
}

const estilos = StyleSheet.create({
	contenedor: {
		flex: 1,
		alignItems: 'center',
	},
	texto: { color: '#EAF8BF', fontSize: 40, fontWeight: 'bold', marginTop: 20 },
	imagen: {
		marginTop: 20,
		width: 200,
		height: 200,
		borderRadius: 50,
	},
});
