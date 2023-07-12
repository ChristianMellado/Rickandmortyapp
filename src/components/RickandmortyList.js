import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import React, { useRef, useState } from 'react';
import RickandmortyCard from './RickandmortyCard';

export default function RickandmortyList(props) {
	const { characters, nextUrl, loadMoreData, id } = props;
	const loadMore = () => {
		if (nextUrl) {
			loadMoreData();
		}
	};
	return (
		<SafeAreaView>
			<FlatList
				data={characters}
				numColumns={1}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(character) => String(character.id)}
				renderItem={({ item, index }) => <RickandmortyCard characters={item} />}
				contentContainerStyle={styles.container}
				onEndReachedThreshold={0.2}
				onEndReached={loadMore}
				ListFooterComponent={
					nextUrl && (
						<ActivityIndicator
							style={styles.spinner}
							size='large'
							color='#BE81F7'
						/>
					)
				}
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: { paddingHorizontal: 15, marginTop: 50 },
	spinner: { paddingHorizontal: 2, marginTop: 20, marginBottom: 20 },
});
