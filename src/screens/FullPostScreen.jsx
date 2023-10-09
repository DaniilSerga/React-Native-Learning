import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Loader from '../components/Loader/Loader';

const FullPostScreen = ({route, navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const {id, title} = route.params;

    const getPosts = () => {
        setLoading(true);

        axios.get(`https://652264b7f43b17938414756e.mockapi.io/articles/${id}`)
            .then(resp => {
                setData(resp.data);
            })
            .catch(() => {
                alert('Ошибка');
            }).finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        navigation.setOptions({title});
        getPosts();
    }, [id]);

    if (isLoading) {
        return <Loader />
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.postContainer}>
                <Text style={styles.postText}>{data.title}</Text>
                <Image style={styles.postImage} source={{ uri: data.imageUrl}}/>
                <Text style={styles.postDescription}>{data.text}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postContainer: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    postImage: {
        borderRadius: 10,
        width: '100%',
        height: 250,
        marginBottom: 20,
        marginTop: 20,
    },
    postText: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    postDescription: {
        fontSize: 20,
    }
});

export default FullPostScreen;
