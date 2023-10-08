import {useEffect, useState} from "react";
import {ActivityIndicator, StatusBar, View, FlatList, Text, StyleSheet, RefreshControl} from "react-native";
import Post from "./src/components/Cards/Post";
import axios from "axios";

export default function App() {
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
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={"large"} />
                <Text style={styles.loaderText}>Loading...</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => getPosts()} />} 
                data={posts} 
                renderItem={({item}) => (
                    <Post title={item.title} createdAt={item.createdAt} imageUrl={item.imageUrl} />
                )} 
            />
            <StatusBar style="auto" />
        </View>
    );
}

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