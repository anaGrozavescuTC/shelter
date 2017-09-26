import React from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Header , Content, Button, List, ListItem, Thumbnail, Body} from 'native-base';
import {messages} from '../services/data';
import {css} from '../styles';

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
                <Header style={css.header}>
                    <Button transparent onPress={this.openMenu} >
                        <Image source={menuImage}  style={css.menuIcon}/>
                    </Button>
                    <Text style={css.headerTitle}> Messages </Text>
                    <Button transparent>
                        <Image source={searchImage} style={css.searchIcon} />
                    </Button>
                </Header>
                <View style={css.newMsgBtn}>
                    <Button full transparent iconLeft >
                        <Image source={newMsgImage} style={css.newMsgIcon}/>
                        <Text style={css.newMsgText}>New Message</Text>
                    </Button>
                </View>

                <Content  style={css.content}>

                    <View style={css.line} />
                    <List>
                        {messages.map((msg, index) => (
                            <ListItem key={index} itemHeader first onPress={()=>this.openConversation(messages, msg.title, msg.senders, msg.info, msg.lastDate)}>
                                <View style={css.imgContainer}>
                                    <Thumbnail key={index} source={{uri: msg.senders[msg.senders.length-1].image}}/>
                                </View>
                                <Body>
                                    <View style={css.titleGroup}>
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

    msgSender: {
        fontFamily: 'nova-regular',
        fontSize: 16,
        paddingBottom: 6,

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