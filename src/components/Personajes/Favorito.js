import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	addFavoriteApi,
	isFavoriteApi,
	remoteFavoriteApi,
} from '../../api/favorito';
import Icon from '@expo/vector-icons/FontAwesome5';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function Favorito(props) {
	const { id } = props;
	const [isFavorite, setIsFavorite] = useState(undefined);
	console.log(isFavorite);

	const [reloadFavorite, setReloadFavorite] = useState(false);
	useEffect(() => {
		(async () => {
			const response = await isFavoriteApi(id);
			if (response) setIsFavorite(true);
			else setIsFavorite(false);
		})();
	}, [id, reloadFavorite]);

	const onReloadFavorite = () => {
		setReloadFavorite((prev) => !prev);
	};
	const addFavorite = async () => {
		try {
			await addFavoriteApi(id);
			onReloadFavorite();
			setIsFavorite(true);
		} catch (error) {
			console.log(error);
		}
	};
	const removeFavorite = async () => {
		try {
			await remoteFavoriteApi(id);
			onReloadFavorite();
			setIsFavorite(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<FontAwesome5
			name='heart'
			color={'#FF0000'}
			size={30}
			solid={isFavorite}
			onPress={isFavorite ? removeFavorite : addFavorite}
		/>
	);
}
