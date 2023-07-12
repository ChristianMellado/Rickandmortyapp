import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

export default function BodyInfo(props) {
	const { characters } = props;
	return (
		<SafeAreaView style={estilos.contenedor}>
			<View style={estilos.label}>
				<Text style={estilos.texto1}>ID : </Text>
				<Text style={estilos.texto}> {characters.id}</Text>
			</View>
			<View style={estilos.label}>
				<Text style={estilos.texto1}>Estatus : </Text>

				<Text style={estilos.texto}> {characters.status}</Text>
			</View>
			<View style={estilos.label}>
				<Text style={estilos.texto1}>Especie :</Text>
				<Text style={estilos.texto}>{characters.species}</Text>
			</View>
			<View style={estilos.label}>
				<Text style={estilos.texto1}>Genero : </Text>
				<Text style={estilos.texto}>{characters.gender}</Text>
			</View>
			<View style={[estilos.label, { maxWidth: '80%' }]}>
				<Text style={estilos.textoubi1}>Ubi :</Text>
				<Text style={estilos.textoubi}>{characters.location.name}</Text>
			</View>
		</SafeAreaView>
	);
}
const estilos = StyleSheet.create({
	contenedor: {
		marginTop: 50,
		flex: 1,
		backgroundColor: '#006992',
		borderRadius: 60,
		alignItems: 'center',
		maxWidth: '100%',
	},
	texto1: {
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 10,
		left: -10,
		color: '#EAF8BF',
	},

	texto: {
		color: '#EAF8BF',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
		marginLeft: 'auto',
	},
	textoubi: {
		color: '#EAF8BF',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
		marginLeft: 'auto',
		paddingBottom: 20,
		right: -10,
	},
	textoubi1: {
		right: -15,

		marginRight: 41,
		color: '#EAF8BF',
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 10,
		marginLeft: 'auto',
		paddingBottom: 20,
	},
	label: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
