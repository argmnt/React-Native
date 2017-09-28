import React, {Component} from 'react';
import {ScrollView, StatusBar } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import {ListItem, Separator } from '../components/List';
import PropTypes from 'prop-types';
const styles= EStylesheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',
});

class Themes extends Component {
    static PropTypes = {
        navigation: PropTypes.object,
    };
    handleThemePress = (color) => {
        console.log('press theme');
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem text="Blue" 
                onPress={() => this.handleThemePress(styles.$blue)}   
                selected
                checkmark={false}
                iconBackground={styles.$blue}
                />
                <ListItem text="Orange" 
                onPress={() => this.handleThemePress(styles.$orange)}   
                selected
                checkmark={false}
                iconBackground={styles.$orange}
                />
                <ListItem text="Green" 
                onPress={() => this.handleThemePress(styles.$green)}   
                selected
                checkmark={false}
                iconBackground={styles.$green}
                />
                <ListItem text="Purple" 
                onPress={() => this.handleThemePress(styles.$purple)}   
                selected
                checkmark={false}
                iconBackground={styles.$purple}

                />
            </ScrollView>
        );
    }
}

export default Themes;