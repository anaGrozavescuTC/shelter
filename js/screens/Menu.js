import React from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Content, Button, List, ListItem, Thumbnail} from 'native-base';
import {EvilIcons} from '@expo/vector-icons/';

var headerBackground = require('../../assets/img/menuHeader.png');

class Menu extends React.Component {

    closeMenu = () => {
        this.props.navigation.navigate('Messages');
    };

    render() {
        return (
            <Container style={styles.container}>
                <Image source={headerBackground} style={styles.headerImg}/>
                <View style={styles.headerInfo}>
                    <Thumbnail style={styles.thumbnail} source={require('../../assets/img/Headshot1.png' )} />
                    <Button onPress={this.closeMenu} transparent style={styles.closeBtn}>
                        <EvilIcons name="close" style={styles.closeIcon} size={40}/>
                    </Button>
                </View>

                <Content style={styles.content}>


                <View>
                    <Text size={20}> Menu page </Text>
                </View>
                </Content>
            </Container>

        )
    }
}

const styles = {
    container: {
        backgroundColor: "#fff"
    },
    headerImg: {
        resizeMode: 'cover',
        top: 0,

    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        top: -40,
        zIndex: 5
    },
    thumbnail: {
        left: 20
    },
    closeBtn: {
        top: -10,
    },
    closeIcon: {
        color: "#95989A"
    },
    content: {
        left: 20
    }
};

export default Menu;