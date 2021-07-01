import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width*1,
    height: height*1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999
  }
});

export default styles;
