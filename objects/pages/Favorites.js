import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoritesView({ setIsFavoritesVisible }) {

    // Initialize state for local data and loading status
    const [localData, setLocalData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Function to load favorites from AsyncStorage
    async function loadFavorites() {
        try {
            let landMarks = await AsyncStorage.getItem('landMarks');
            landMarks = JSON.parse(landMarks);

            if (landMarks && landMarks.length > 0) {
                setLocalData(landMarks);
                setIsFavoritesVisible(true); // Ensure the tab is visible if data exists
            } else {
                setLocalData([]);
                setIsFavoritesVisible(false); // Hide the tab if no data
            }

            setLoaded(true);
        } catch (error) {
            console.error("Error loading favorites:", error);
            setLoaded(true); // Set loading to true even in case of error
            setIsFavoritesVisible(false); // Hide the tab if there's an error
        }
    }

    // Item component for rendering the list of favorites
    const Item = ({ landMarkObject }) => (
        <View style={styles.container}>
            <Text>{landMarkObject.title.nl}</Text>
        </View>
    );

    // Load favorites when the component mounts
    useEffect(() => {
        loadFavorites();
    }, []);

    // Show loading message if data is not loaded
    if (!loaded) {
        return (
            <View>
                <Text style={styles.title}>Loading...</Text>
            </View>
        );
    } else {
        return (
            <View>
                <Text style={styles.title}>Favorites List</Text>
                <FlatList
                    data={localData}
                    renderItem={({ item }) => <Item landMarkObject={item} />}
                    keyExtractor={(item, index) => index.toString()} // Ensure keyExtractor is set
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 10,
    },
});
