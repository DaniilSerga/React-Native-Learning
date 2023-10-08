import React from 'react';

import {StyleSheet, Text, View} from 'react-native'
import PostImage from '../PostImage/PostImage';
import PostTitle from '../Text/PostTitle';
import PostDate from '../Text/PostDate';

const Post = ({title, imageUrl, createdAt}) => {
    return (
        <View style={styles.card}>
            <PostImage url={imageUrl} />
            <View style={styles.postDetails}>
                <PostTitle titleText={title} />
                <PostDate date={createdAt} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        borderBottomStyle: 'solid',
    },
    postDetails: {
        flex: 1,
        flexDirection: 'column',
    }
})

export default Post;