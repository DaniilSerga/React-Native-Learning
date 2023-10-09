import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size={"large"} />
            <Text style={styles.loaderText}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loaderText: {
        marginTop: 15,
        fontSize: 18,
    },
});

export default Loader;