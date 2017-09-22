import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Container, Header , Content, Button, List, ListItem, Thumbnail, Body} from 'native-base';

var backImage = require('../../assets/icons/back-icon.png');
var searchImage = require('../../assets/icons/search-icon.png');


class Conversation extends React.Component {
    back = () => {
        this.props.navigation.navigate('Messages');
    };

    render() {
        const { title, messages, senders, info, date} = this.props.navigation.state.params;
        return (
            <Container>
                <Header style={styles.header}>
                    <Button transparent onPress={this.back} >
                        <Image source={backImage}  style={styles.backIcon}/>
                    </Button>
                    <Text style={styles.title}> {title}</Text>
                    <Button transparent>
                        <Image source={searchImage} style={styles.searchIcon} />
                    </Button>
                </Header>
                <View style={styles.infoContainer}>
                    <Text style={styles.msgInfo}>{info}</Text>
                    <View sttle={styles.imgContainer}>
                        {senders.map((sender, index) => (
                            <View key={index} >
                                {senders.length === 1 ?
                                    <Thumbnail source={{uri: sender.image}}/> :
                                    <View style={{left: 20 * Number(index), alignItems: 'center'}}>
                                        <Thumbnail style={{ position: 'absolute'}} source={{uri: sender.image}}/>
                                    </View>
                                }</View>
                        ))}
                    </View>
                    <Text style={styles.msgDate}>{date}</Text>
                </View>


                <Content style={{backgroundColor: "#fff", top: 60} }>
                    <View>
                        
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = {

    header: {
        backgroundColor: "#22AAF2",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backIcon: {
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
    infoContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    msgInfo: {
        fontFamily: 'nova-regular',
        color: "#22AAF2",
    },
    msgDate: {
        fontFamily: 'nova-regular',
        color: "#AAAAAA",
        top: 60
    },
};

export default Conversation;