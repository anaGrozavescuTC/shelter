
import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Messages from '../screens/Messages';
import Menu from '../screens/Menu';


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

