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
                    <Text style={styles.name}>Cindy Koebele</Text>
                    <Text style={styles.info}>Owner, Title Agent</Text>
                    <Text style={styles.info}>Title-Smart, Inc</Text>
                </View>

                <Content style={styles.content}>


                    <List style={styles.listItem}>
                        <View style={styles.line} />
                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Image source={dealIcon} style={styles.menuIcon} />
                                <Text>Deals</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Image source={msgIcon} style={styles.menuIcon} />
                                <Text>Messages</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Image source={profileIcon} style={styles.menuIcon} />
                                <Text>My Profile</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button full iconLeft transparent>
                                <Image source={notificationsIcon} style={styles.menuIcon} />
                                <Text>Notifications</Text>
                            </Button>
                        </ListItem>

                        <ListItem itemHeader first >
                            <Button onPress={this.logOut} full iconLeft transparent>
                                <Image source={signoutIcon} style={styles.menuIcon} />
                                <Text>Sign Out</Text>
                            </Button>
                        </ListItem>
                    </List>
                    <Text style={styles.copyright}>Copyright 2017 CreativApp LLC.</Text>

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
    menuIcon: {
        marginRight: 20,
        marginLeft: 20
    },
    copyright:{
        fontFamily: 'nova-regular',
        fontSize: 14,
        color: "#AAAAAA",
        marginTop: 30,
        left: 20,
        marginBottom: 5
    }
};

export default Menu;