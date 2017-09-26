import React from 'react';
import {View, Text} from 'react-native';
import {Form, Item, Input, Button, Left, Right} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons/';
import { css } from '../styles';



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
            <View style={css.containerCentered}>

                <Form style={css.form}>
                    <Item inlineLabel >
                        <Input style={css.textWhite} placeholder="Email" email-address autoCorrect={false}
                               value={this.state.email} onChangeText={(email)=>this.setState({email})}/>
                    </Item>
                    <Item inlineLabel>
                        <Input style={css.textWhite} placeholder="Password" secureTextEntry
                               value={this.state.password} onChangeText={(password)=>this.setState({password})}/>
                    </Item>

                    <Button onPress={()=>this.signIn()} bordered block style={css.signinButton}>
                        <Text  style={css.buttonText}> Sign In</Text>
                    </Button>
                </Form>

                <Text style={css.textWhite}>No account?
                    <Text style={css.textWhite} onPress={this.signUp}> Sign Up</Text>
                </Text>

                <View style={css.buttonsContainer}>
                    <Button onPress={this.signIn} iconLeft block style={css.buttonFb}>

                        <FontAwesome name="facebook" size={17} style={css.btnIcons}/>
                        <Text style={css.accText}>Sign In Using Facebook</Text>

                    </Button>
                    <Button onPress={this.signIn} iconLeft block style={css.buttonGoo}>

                        <Ionicons name="logo-google" size={17} style={css.btnIcons}/>
                        <Text style={css.accText}>Sign In Using Google</Text>
                    </Button>
                </View>

            </View>
        )};
}

export default Login;




