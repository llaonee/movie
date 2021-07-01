import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import COLORS from '../../styles/colors'

class component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={COLORS.blue.blue_50} size="large" />
      </View>
    );
  }
}

export default component
