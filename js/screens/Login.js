import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Form, Item, Input, Button, Left, Right} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons/';



var width = Dimensions.get('window').width;

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    };

    signIn = () => {
        this.props.navigation.navigate('Messages');
        if (this.state.email !== '' && this.state.password){
            this.props.navigation.navigate('Messages');
            console.log('Email: ', this.state.email);
            console.log('Password: ', this.state.password);

        }
        else {
            console.log('Fill in the fields!');
        }
    };

    signUp = () => {
        this.props.navigation.navigate('Register');
    };


    render() {
        return (
            <View style={styles.container}>
                <Form style={styles.form}>
                    <Item inlineLabel >
                        <Input style={styles.textColor} placeholder="Email" email-address
                               value={this.state.email} onChangeText={(email)=>this.setState({email})}/>
                    </Item>
                    <Item inlineLabel>
                        <Input style={styles.textColor} placeholder="Password" secureTextEntry
                               value={this.state.password} onChangeText={(password)=>this.setState({password})}/>
                    </Item>

                    <Button onPress={()=>this.signIn()} bordered block style={styles.formButton}>
                        <Text  style={styles.buttonText}> Sign In</Text>
                    </Button>
                </Form>
                <Text style={styles.textColor}>No account?
                    <Text style={styles.signUpText} onPress={this.signUp}> Sign Up</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <Button onPress={this.signIn} iconLeft block style={styles.buttonFb}>

                        <FontAwesome name="facebook" size={15} style={styles.icons}/>

                        <Text style={styles.accText}>Sign In Using Facebook</Text>
                    </Button>
                    <Button onPress={this.signIn} iconLeft block style={styles.buttonGoo}>

                        <Ionicons name="logo-google" size={15} style={styles.icons}/>

                        <Text style={styles.accText}>Sign In Using Google</Text>
                    </Button>
                </View>
            </View>
        )};

}

const styles = {

    container: {
        flex: 1,
        backgroundColor: "#006FAA",
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: width - 100
    },
    textColor: {
        color: "#fff",
        fontFamily: 'nova-regular'
    },
    signUpText: {
        color: "#fff",
        fontFamily: 'nova-regular'
    },
    formButton: {
        marginLeft: 12,
        marginTop: 20,
        marginBottom: 20,
        borderColor: "#22AAF2"
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'nova-bold',
        fontSize: 16
    },
    buttonsContainer: {
        width: width - 100,
        marginLeft: 12
    },
    buttonFb: {
        backgroundColor: "#00AEEF",
        marginTop: 40,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonGoo: {
        backgroundColor: "#EF5300",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icons: {
        color: '#fff',
        marginLeft: 10
    },
    accText: {
        marginRight: 10,
        color: '#fff',
        fontFamily: 'nova-bold',
        fontSize: 16
    },

};


export default Login;




