import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Container, Content, Button, List, ListItem, Thumbnail} from 'native-base';
import {EvilIcons} from '@expo/vector-icons/';

var headerBackground = require('../../assets/img/menuHeader.png');

class Menu extends React.Component {

    closeMenu = () => {
        this.props.navigation.navigate('Messages');
    };
    logOut = () => {
        this.props.navigation.navigate('Login');
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
                    <List style={styles.listItem}>
                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Text>Deals</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Text>Messages</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Text>My Profile</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Text>Notifications</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button onPress={this.logOut} full iconLeft transparent>
                                <Text>Logout</Text>
                            </Button>
                        </ListItem>


                    </List>

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
        width: Dimensions.get('window').width

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