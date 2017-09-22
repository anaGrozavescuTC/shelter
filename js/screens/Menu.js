import React from 'react';
import {View, Text, Image, Dimensions } from 'react-native';
import {Container, Content, Button, List, ListItem, Thumbnail } from 'native-base';
import {EvilIcons } from '@expo/vector-icons';

var headerBackground = require('../../assets/img/menuHeader.png');
var dealIcon = require('../../assets/icons/deals-icon.png');
var msgIcon = require('../../assets/icons/messages-icon.png');
var profileIcon = require('../../assets/icons/profile-icon.png');
var notificationsIcon = require('../../assets/icons/notifications-icon.png');
var signoutIcon = require('../../assets/icons/signout-icon.png');

import {user} from '../services/data';

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
                    <Thumbnail large style={styles.thumbnail} source={require('../../assets/img/Headshot1.png' )} />
                    <Button onPress={this.closeMenu} transparent style={styles.closeBtn}>
                        <EvilIcons name="close" style={styles.closeIcon} size={40}/>
                    </Button>
                </View>
                <View style={styles.infoText}>
                    <Text style={styles.name}>{user.name}</Text>
                   <View>
                       {user.owner === true ?  <Text style={styles.info}>Owner, {user.title}</Text>  : <Text style={styles.info}>Owner, {user.title}</Text>}
                   </View>
                    <Text style={styles.info}>{user.company}</Text>
                </View>

                <Content style={styles.content}>


                    <List>
                        <View style={styles.line} />
                        <ListItem itemHeader first >
                            <Button full iconLeft transparent style={styles.menuBtn}>
                                <Image source={dealIcon} style={styles.menuIcon} />
                                <Text style={styles.menuText}>Deals</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent style={styles.menuBtn}>
                                <Image source={msgIcon} style={styles.menuIcon} />
                                <Text style={styles.menuText}>Messages</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent style={styles.menuBtn}>
                                <Image source={profileIcon} style={styles.menuIcon} />
                                <Text style={styles.menuText}>My Profile</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent style={styles.menuBtn}>
                                <Image source={notificationsIcon} style={styles.menuIcon} />
                                <Text style={styles.menuText}>Notifications</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button onPress={this.logOut} full iconLeft transparent style={styles.menuBtn}>
                                <Image source={signoutIcon} style={styles.menuIcon} />
                                <Text style={styles.menuText}>Sign Out</Text>
                            </Button>
                        </ListItem>
                    </List>
                </Content>
            </Container>

        )
    }
}

/*


 */
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
    infoText: {
        left: 20,
        top: 0,
        marginBottom: 20,
    },
    name: {
        fontFamily: 'nova-regular',
        fontSize: 22,
        color: "#444444",
        marginBottom: 10,
    },
    info: {
        fontFamily: 'nova-regular',
        fontSize: 14,
        color: "#888888"
    },
    line: {
        backgroundColor: "#CACCCE",
        height: 0.6,
    },
    menuBtn: {
        height: 20
    },
    menuText:{
      color: "#444444",
      fontFamily: 'nova-regular'
    },
    menuIcon: {
        marginRight: 20,
        marginLeft: 20
    }
};

export default Menu;