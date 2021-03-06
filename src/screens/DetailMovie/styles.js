import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../styles/colors';
import {FONT_12, FONT_14, FONT_16, FONT_20} from '../../styles/fonts'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.blue.blue_100,
    },
    imgBackDrop:{
        height:height*0.3,
        width:width*1,
        flex:1
    },
    itemPoster:{
        flexDirection:'row',
        left:20,
        marginTop:height*0.1,
    },
    header:{
        position:'absolute',
        zIndex:99,
    },
    imgPoster:{
        height:height*0.25,
        width:width*0.3,
    },
    posterSimiliar:{
        height:height*0.2,
        width:width*0.25,
        marginHorizontal:10,
        borderRadius:10
    },
    mainBody:{
        marginTop:height*0.27,
        backgroundColor:COLORS.blue.blue_100,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingTop:15
    },
    iconVote:{
        fontSize:25,
        color:COLORS.gold.gold_100,
        marginRight:20
    },
    iconItem:{
        fontSize:25,
        color:COLORS.gray.gray_50,
        marginRight:20
    },
    itemMovie:{
        flexDirection:'row',
        marginLeft:width*0.37,
    },
    txtItemVote:{
        ...FONT_16,
        fontWeight:'bold',
        color:COLORS.gold.gold_100,
    },
    txtItemMovie:{
        ...FONT_16,
        fontWeight:'bold',
        color:COLORS.gray.gray_50,
    },
    txtTitle:{
        ...FONT_20,
        color:COLORS.white,
        fontWeight:'bold',
        top:height*0.05,
        marginLeft:15,
        width:width*0.5,
    },
    txtTitleItem:{
        ...FONT_16,
        color:COLORS.white,
        paddingHorizontal:10,
        fontWeight:'bold',
        paddingTop:25
    },
    txtOverview:{
        ...FONT_14,
        color:COLORS.white,
        paddingHorizontal:10
    },
    txtTitleSimiliar:{
        ...FONT_14,
        color:COLORS.white,
        paddingHorizontal:10,
        width:width*0.25
    },
    svSmiliar:{
        marginHorizontal:5,
        marginTop:15
    },
    mainSimiliar:{
    },
    iconBack:{
        color:COLORS.white,
        fontSize:25,
        zIndex:99
    },
    tBack:{
        marginTop:10,
        left:15
    }
})

export default styles;