import React from 'react';

import {StyleSheet, Text} from 'react-native';

const PostDate = ({date}) => {
    return (
        <Text style={styles.date}>{new Date(date).toLocaleDateString()}</Text>
    );
};

const styles = StyleSheet.create({
    date: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.4)',
        marginTop: 2,
    },
});

export default PostDate;
