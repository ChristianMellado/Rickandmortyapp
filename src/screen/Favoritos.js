import {
	View,
	Text,
	SafeAreaView,
	Button,
	ScrollView,
	StyleSheet,
	Image,
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { getFavoriteApi, isFavoriteApi } from '../api/favorito';
import useAuth from '../hooks/useAuth';
import RickandmortyList from '../components/RickandmortyList';
import { RefreshControl } from 'react-native';
import Nologueado from './Nologueado';
import { useFocusEffect } from '@react-navigation/native';

export default function Favoritos() {
	const { auth } = useAuth();
	const [characters, setCharacters] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	useFocusEffect(
		useCallback(() => {
			if (auth) {
				(async () => {
					try {
						const response = await getFavoriteApi();
						console.log(response);

						// Realizar la solicitud de cada personaje por separado
						const charactersData = await Promise.all(
							response.map(async (characterId) => {
								const characterUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
								const characterResponse = await fetch(characterUrl);
								return characterResponse.json();
							})
						);

						console.log(charactersData);

						// Actualizar el estado con los personajes obtenidos
						setCharacters(charactersData);
					} catch (error) {
						console.log('Error:', error);
					}
				})();
			}
		}, [auth])
	);

	return !auth ? (
		<Nologueado />
	) : (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<RickandmortyList characters={characters} />
			</ScrollView>
		</SafeAreaView>
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
