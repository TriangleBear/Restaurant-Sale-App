import React from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image
} from 'react-native';

const SplashScreen = ({navigation}) => {
    /*
    const [animating, setAnimating] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setAnimating(false);
        }, 5000);
      }, []);
    */
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Waiter_Logo.png')}
                style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
            />
        </View>
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#89CFF0',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
      },
});