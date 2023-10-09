import React from 'react';

import {StyleSheet, Text} from 'react-native';

const PostTitle = ({titleText}) => {
    return (
        <Text style={styles.title}>{titleText}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: '700'
    },
});

export default PostTitle;