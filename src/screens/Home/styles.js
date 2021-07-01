import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../styles/colors';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white,
    paddingHorizontal:10
  },
  mainMovie:{
    justifyContent:'space-between',
  },
  imgPoster:{
    height:height*0.25,
    width:width*0.3,
  },
  itemMovie:{
    width:width*0.3,
    elevation:5,
  },
  wrapperLoadingPagination: {
    height: 40,
    backgroundColor: COLORS.gray.gray_60,
    width: Dimensions.get('screen').width,
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 20
  }
})

export default styles;