import React from 'react';

import {Image, StyleSheet} from 'react-native';

const PostImage = ({url}) => {
    return (
        <Image style={styles.imageContainer} source={{uri: url}} />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 12
    }
});

export default PostImage;