import React from 'react';
import { View, TouchableOpacity, Text, FlatList, Image, RefreshControl, StatusBar } from 'react-native';
import Loading from '../../elements/Loading'

import { ENDPOINT, URLIMAGE } from '../../config';

import styles from './styles';

class component extends React.Component {
  constructor(props) {
    super(props);
        this.onEndReachedCalledDuringMomentum = true;
        this.state = { 
          refreshLoading:false,
          loading:false,
          pagePagination: 1,
          isEnded: false,
          data:''
        }
    }

    async componentDidMount(){
      await this._getData()
    }

    _refreshData = () => {
      this.setState({ refreshLoading: true });
      this.setState({ pagePagination: 1 });
      this._getData();
    };

    _getData = async () =>{
      this.setState({loading:true})
      try {
        const { pagePagination } = this.state;
        if (pagePagination !== 1) {
          this.setState({ loadingPagination: true });
        }
        const result = await ENDPOINT.getMovieNowPlaying(pagePagination);
        const data = await result.json()
        if (!result.ok) {
          this.setState({ isEnded: true });
        }
        if (pagePagination === 1) {
          await this.setState({ data:data.results });
        } else if (data.results.length > 0) {
          await this.setState(prevState => ({
            ...prevState,
            data: [...prevState.data, ...data.results]
          }));
        }
      } catch (error) {
        console.log('error', error)
      } finally {
        this.setState({loading: false, refreshLoading: false, loadingPagination: false })
      }
    }

    _toDetail = item => {
      this.props.navigation.navigate({
        key: 'DetailMovie',
        routeName: 'DetailMovie',
        params: {item}
      })
    }

    _setPagination = () => {
      this.setState(
        prevState => ({
          ...prevState,
          pagePagination: prevState.pagePagination + 1
        }),
        () => {
          if (!this.state.isEnded) {
            this._getData();
          }
        }
      );
    };

    _renderItemMovie = ({ item, index }) => (
      <TouchableOpacity style={styles.itemMovie} onPress={()=>this._toDetail(item)}>
          <Image source={{uri:URLIMAGE+item.poster_path}} style={styles.imgPoster} resizeMode="contain"/>
          <Text>{item.title}</Text>
      </TouchableOpacity>
    );

    _renderMovie(){
      const {data, refreshLoading, loadingPagination, pagePagination}= this.state;
      return(
        <View>
          <FlatList
            columnWrapperStyle={styles.mainMovie}
            ref={scrollView => {
              this.scrollView = scrollView;
            }}
            refreshControl={<RefreshControl refreshing={refreshLoading} onRefresh={this._refreshData} />}
            key={1}
            numColumns={3}
            data={data}
            renderItem={this._renderItemMovie}
            keyExtractor={(index, item) => JSON.stringify(index)}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!this.onEndReachedCalledDuringMomentum) {
                this._setPagination();
                this.onEndReachedCalledDuringMomentum = true;
              }
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            onMomentumScrollBegin={() => {
              this.onEndReachedCalledDuringMomentum = false;
            }}
          />

        {loadingPagination && pagePagination !== 1 ? (
          <View style={styles.wrapperLoadingPagination}>
            <Loading />
          </View>
        ) : null}
        </View>
      )
    }

    render() { 
      const {loading} = this.state;
        return ( 
          <React.Fragment>
            <StatusBar hidden />
            <View style={styles.container}>
              {loading && (<Loading/>)}
              {this._renderMovie()}
            </View>
          </React.Fragment>
         );
    }
}
 
export default component;