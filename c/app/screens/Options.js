import React, {Component} from 'react';
import {ScrollView, StatusBar, Platform } from 'react-native';

import {ListItem , Separator} from '../components/List';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR= '#868686';
const ICON_SIZE = 23;

class Options extends Component {
    static PropTypes ={
        navigation: PropTypes.object,
    };
    handleThemePress = () => {
        console.log('press themes');
        this.props.navigation.navigate('Themes');  
    };
    handleSitePress = () => {
        console.log('press site');
    };
    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Themes"
                    onPress={this.handleThemePress}
                    customIcon={
                        <Ionicons name={'md-arrow-forward'} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                    />
                <Separator />  
                <ListItem
                text="Fixer.io"
                onPress={this.handleSitePress}
                customIcon={
                    <Ionicons name={'md-link'} color={ICON_COLOR} size={ICON_SIZE} />
                }
                />
            </ScrollView>
        );
    }
}

export default Options; 