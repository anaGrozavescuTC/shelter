import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Container, Header , Content, Button, List, ListItem, Thumbnail, Body} from 'native-base';

var menuImage = require('../../assets/icons/menu-icon.png');
var searchImage = require('../../assets/icons/search-icon.png');
var newMsgImage = require('../../assets/icons/new-message.png');

class Messages extends React.Component {

    openMenu = () => {
        this.props.navigation.navigate('Menu');
    };

    render(){
        return(
            <Container>
                <Header style={styles.header}>
                    <Button transparent onPress={this.openMenu} >
                        <Image source={menuImage}  style={styles.menuIcon}/>
                    </Button>
                    <Text style={styles.title}> Messages </Text>
                    <Button transparent>
                        <Image source={searchImage} style={styles.searchIcon} />
                    </Button>
                </Header>
                <View style={styles.newMsgBtn}>
                    <Button full transparent iconLeft >
                        <Image source={newMsgImage} style={styles.newMsgIcon}/>
                        <Text style={styles.newMsgText}>New Message</Text>
                    </Button>
                </View>

                <Content  style={styles.content}>

                    <View style={styles.line} />
                    <ScrollView>
                        <List style={styles.listItem}>
                            <ListItem itemHeader first >
                                <View style={styles.imgContainer}>
                                    <Thumbnail source={require('../../assets/img/Headshot1.png' )} />
                                </View>
                                <Body>
                                    <View style={styles.titleGroup}>
                                        <Text style={styles.msgSender}>Cindy</Text>
                                        <Text note style={styles.msgDate}>Mon</Text>
                                    </View>

                                    <Text note style={styles.msgTitle}>Join our Lunch-and-Learn</Text>
                                    <Text note style={styles.msgInfo}>in 9410 SW 136th, Miami FL</Text>
                                </Body>

                            </ListItem>
                            <ListItem itemHeader first >
                                <View style={styles.imgContainer}>
                                    <Thumbnail source={require('../../assets/img/Headshot2.png' )} />
                                </View>
                                <Body>
                                <View style={styles.titleGroup}>
                                    <Text style={styles.msgSender}>Sam Jones</Text>
                                    <Text note style={styles.msgDate}>Aug 10</Text>
                                </View>

                                <Text note style={styles.msgTitle}>I think its time to build something different ...</Text>
                                <Text note style={styles.msgInfo}>in Private Messages</Text>
                                </Body>

                            </ListItem>

                        </List>
                    </ScrollView>
                </Content>

            </Container>


        )};

}

const styles = {

    header: {
        backgroundColor: "#22AAF2",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        backgroundColor: "#fff"
    },
    menuIcon: {
        marginTop: 10
    },
    searchIcon: {
        marginTop: 10
    },
    title: {
        color: "#fff",
        fontSize: 16,
        marginTop: 18,
        fontFamily: 'nova-regular'
    },
    newMsgBtn: {
      backgroundColor: "#fff"
    },
    newMsgIcon: {
        marginRight: 10,
    },
    newMsgText: {
        color: "#22AAF2",
        fontFamily: 'nova-regular'
    },
    line: {
        backgroundColor: "#CACCCE",
        height: 0.6,
    },
    imgContainer: {
        marginRight: 10
    },
    titleGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    msgSender: {
        fontFamily: 'nova-regular',
        fontSize: 16,
        paddingBottom: 6
    },
    msgDate: {
        fontFamily: 'nova-regular',
        color: "#AAAAAA"
    },
    msgTitle: {
        fontFamily: 'nova-regular',
        fontSize: 16,
        color: "#888888",
        paddingBottom: 6
    },
    msgInfo: {
        fontFamily: 'nova-regular',
        color: "#22AAF2"
    },


};

export default Messages;

/*
msgIcon: {
        marginRight: 10,
        color: "#22AAF2"

    },
    msgText: {
        color: "#22AAF2",
        //marginBottom: 5
    }
   msgBody: {
        marginLeft: 14
    },
    msg: {
        paddingTop: 3
    },
    newMsg: {
        //flexDirection: 'row',
        //justifyContent: 'center',
        //height: 50,
        //alignItems: 'center'
    },
                <Content>
                    <List>
                        <ListItem itemHeader>
                            <Thumbnail source={require('../../assets/img/Headshot2.png' )} />

                            <Body style={styles.msgBody}>
                            <Text style={styles.msg}>Sam Jones</Text>
                            <Text note style={styles.msg}>I think its time to build something different ...</Text>
                            </Body>

                            <Text note>Mon</Text>

                        </ListItem>

                    </List>
                </Content>
 */