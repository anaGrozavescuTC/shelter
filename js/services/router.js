
import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Messages from '../screens/Messages';
import Menu from '../screens/Menu';
import Conversation from "../screens/Conversation";


export const MsgStacks = StackNavigator({
        Login: {
            screen: Login,
        },
        Register: {
            screen: Register,
        },
        Messages: {
            screen: Messages,
        },
        Menu: {
            screen: Menu,
        },
        Conversation: {
            screen: Conversation,
        }
    },
    {
        headerMode: 'none',
    });

export const Root = StackNavigator({
        Login: {
            screen: MsgStacks,
        }
    },
    {
        headerMode: 'none',
    });

