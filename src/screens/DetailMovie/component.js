import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ENDPOINT, URLIMAGE } from '../../config';
import Loading from '../../elements/Loading'
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading:false,
            data:'',
            dataSimiliar:[]
         }
    }

    async componentDidMount(){
        const dataParam = this.props.navigation.state.params.item;
        this.setState({data:dataParam})
        try {
            this.setState({loading:true})
            const result = await ENDPOINT.getSimiliarMovie(dataParam.id);
            const data = await result.json()
            this.setState({dataSimiliar:data.results})
        } catch (error) {
            console.log('error', error)
        } finally {
            this.setState({loading:false})
        }
    }

    _handleBack = () =>{
        this.props.navigation.goBack()
    }

    _toDetail = async item => {
        this.setState({data:item})
        try {
            this.setState({loading:true})
            const result = await ENDPOINT.getSimiliarMovie(item.id);
            const data = await result.json()
            this.setState({dataSimiliar:data.results})
        } catch (error) {
            console.log('error', error)
        } finally {
            this.setState({loading:false})
        }
    }

    _renderItem = item => (
        <TouchableOpacity onPress={()=>this._toDetail(item)}>
            <Image source={{uri:URLIMAGE+item.poster_path}} style={styles.posterSimiliar} resizeMode="contain"/>
            <Text style={styles.txtTitleSimiliar}>{item.title}</Text>
        </TouchableOpacity >
    );

    _renderSimiliar(){
        const {dataSimiliar}= this.state;
        return(
            <ScrollView
            style={styles.svSmiliar}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                {dataSimiliar.map((value, index) => (
                    this._renderItem(value)
                ))}
            </ScrollView>
        )
    }

    _renderBack(){
        return(
            <TouchableOpacity style={styles.tBack} onPress={this._handleBack}>
                <Ionicons name="arrow-back-outline" style={styles.iconBack}/>
            </TouchableOpacity>
        )
    }

    render() { 
        console.log('sate', this.state)
        const {data, loading}= this.state
        return ( 
            <View style={styles.container}>
                <StatusBar hidden />
                {loading && (<Loading/>)}
                <View style={styles.header}>
                    {this._renderBack()}
                    <View style={styles.itemPoster}>
                        <Image source={{uri:URLIMAGE+data.poster_path}} style={styles.imgPoster} resizeMode="contain"/>
                        <Text style={styles.txtTitle}>{data.title}</Text>
                    </View>
                </View>
                <ImageBackground source={{uri:URLIMAGE+data.backdrop_path}} style={styles.imgBackDrop} >
                    <View style={styles.mainBody}>
                        <View style={styles.itemMovie}>
                            <AntDesign name="star" style={styles.iconVote}/>
                            <Text style={styles.txtItemVote}>{data.vote_average}</Text>
                        </View>
                        <View style={styles.itemMovie}>
                            <MaterialCommunityIcons name="vote" style={styles.iconItem}/>
                            <Text style={styles.txtItemMovie}>{data.vote_count}</Text>
                        </View>
                        <View style={styles.itemMovie}>
                            <Fontisto name="date" style={styles.iconItem}/>
                            <Text style={styles.txtItemMovie}>{data.release_date}</Text>
                        </View>
                        <View>
                            <Text style={styles.txtTitleItem}>overview</Text>
                            <Text style={styles.txtOverview}>{data.overview}</Text>
                        </View>
                        <View style={styles.mainSimiliar}>
                            <Text style={styles.txtTitleItem}>Similiar</Text>
                            {this._renderSimiliar()}
                        </View>
                    </View>
                </ImageBackground>

            </View>
         );
    }
}
 
export default component;