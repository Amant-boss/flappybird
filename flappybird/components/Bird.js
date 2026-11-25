import react from 'react';
import { View, Image, Stylesheet } from 'react-native';

const Bird = ({ birdbottom, birdleft }) => {
    return (
        <Image
        style={{
            position: 'absolute',
            left: birdleft - (birdWidth/2),
            bottom: birdbottom - (birdHeight/2),
            width: 40,
            height: 40,
        }}
        source={require('../assets/bird1.png')}
        resizeMode="stretched" />
    );
}

const styles = Stylesheet.create({
    tinyLogo: {
        width: 40,
        height: 40,
    }
});