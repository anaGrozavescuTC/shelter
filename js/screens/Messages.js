import React from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Header , Content, Button, List, ListItem, Thumbnail, Body} from 'native-base';
import {messages} from '../services/data';

var menuImage = require('../../assets/icons/menu-icon.png');
var searchImage = require('../../assets/icons/search-icon.png');
var newMsgImage = require('../../assets/icons/new-message.png');

class Messages extends React.Component {

    openMenu = () => {
        this.props.navigation.navigate('Menu');
    };
    openConversation = (messages, title, senders, info, date) => {
        this.props.navigation.navigate('Conversation', {messages, title, senders, info, date});
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
                    <List style={styles.listItem}>
                        {messages.map((msg, index) => (
                            <ListItem key={index} itemHeader first onPress={()=>this.openConversation(messages, msg.title, msg.senders, msg.info, msg.lastDate)}>
                                <View style={styles.imgContainer}>
                                    {msg.senders.map((sender, index) => (

                                        <View key={index} >
                                            {msg.senders.length === 1 ?
                                                <Thumbnail source={{uri: sender.image}}/> :
                                                <View style={styles.thumbContainer}>
                                                <Thumbnail style={{ position: 'absolute', marginLeft: Number(index) * 10}} source={{uri: sender.image}}/>
                                                </View>
                                            }</View>
                                            ))}
                                </View>
                                <Body>
                                <View style={styles.titleGroup}>
                                    {
                                        msg.senders.map((sender, index) => (
                                        <Text key={index} style={styles.msgSender}>{sender.name}
                                            {
                                                index + 1 !== msg.senders.length ? <Text>,</Text> : null
                                            }
                                        </Text>
                                    ))}
                                    <Text note style={styles.msgDate}>{msg.lastDate}</Text>
                                </View>
                                <Text note style={styles.msgTitle}>{msg.title}</Text>
                                <Text note style={styles.msgInfo}>{msg.info}</Text>
                                </Body>
                            </ListItem>
                        ))}
                    </List>

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
    thumbContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 60
    },
    multiThumb: {
        position: 'absolute',
        border: 1,
        borderColor: '#fff'

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