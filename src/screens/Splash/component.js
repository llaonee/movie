import React from 'react';
import { View, StatusBar } from 'react-native';
import FastImage from 'react-native-fast-image';
import { StackActions, NavigationActions} from 'react-navigation';

import styles from './styles';

const component = (props) => {

        return ( 
            <View style={styles.container}>
                <StatusBar hidden />
                <FastImage
                    style={{ width: "100%", height: "100%" }}
                    source={{
                    uri: "https://i.imgur.com/oJBOT4S.gif", //give your url here
                    priority: FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    onLoad={() => {
                    setTimeout(
                        () => {
                            props.navigation.dispatch(
                                StackActions.reset({
                                  index:0,
                                  actions:[NavigationActions.navigate({routeName:'Home'})]
                                })
                              )
                        },
                        300
                    );
                    }}
                />
            </View>
         );
}
 
export default component;