import React, {Component} from 'react';
import  {View, Image, Text, Keyboard, Animated, Platform } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
    constructor(props){
        super(props)

        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
     }
    componentDidMount(){
        let showListener = "keyboardWillShow";
        let hideListener = "keyboardWillHide";
        if (Platform.OS === 'android') {
             showListener = "keyboardDidShow";
             hideListener = "keyboardDidHide";
        }
        this.keyboardShowListener = Keyboard.addListener(showListener,this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
    }
    
    componentWillUnmount(){
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
   console.log('keyboard did show');

             Animated.parallel([
            Animated.timing(this.containerImageWidth, {
            toValue:  styles.$smallContainerSize,
            duration: ANIMATION_DURATION,
            }), 

        Animated.timing(this.imageWidth, {
            toValue: styles.$smallImageSize,
            duration: ANIMATION_DURATION,
        }),

        ]).start();  
    };
    
    keyboardHide = () => {
        console.log('keyboard did hide');
            Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
]).start();
    }; 

    render(){
        console.log('Hey/n');
        console.log(styles.$largeImageSize);

        const containerImageStyles = [
            styles.containerImage,
             { width: this.containerImageWidth, height: this.containerImageWidth }, 
        ];

        const imageStyles = [
            styles.logo,
             { width: this.imageWidth, }, 
        ];
        return(
               <View style={styles.container}>
                    <Animated.Image resizeMode="contain" style={containerImageStyles} source={require('./images/background.png')}  >
                        <Animated.Image  resizeMode="contain" style={imageStyles} source={require('./images/logo.png')} />
                    </Animated.Image>
                    <Text style={styles.text} >Currency Converter</Text>
                </View>
        );
    }
}

export default Logo; 