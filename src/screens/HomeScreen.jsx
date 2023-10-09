import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Post from '../components/Cards/Post';
import axios from 'axios';
import Loader from '../components/Loader/Loader';

const HomeScreen = ({navigation}) => {
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        setLoading(true);

        axios.get('https://652264b7f43b17938414756e.mockapi.io/articles')
            .then(resp => {
                setPosts(resp.data);
            })
            .catch(() => {
                alert('Ошибка');
            }).finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getPosts();
    }, []);

    if (isLoading) {
        return <Loader />
    }

    return (
        <View style={styles.listContainer}>
            <FlatList 
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => getPosts()} />} 
                data={posts} 
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
                        <Post title={item.title} createdAt={item.createdAt} imageUrl={item.imageUrl} />
                    </TouchableOpacity>
                )} 
            />
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
    }
})

export default HomeScreen;
