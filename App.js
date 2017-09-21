import React from 'react';
import { Font } from 'expo';
import { Root } from './js/services/router';

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
            'nova-regular': require('./assets/fonts/ProximaNova-AltRegular.ttf'),
            'nova-bold': require('./assets/fonts/ProximaNova-AltBold.ttf')
        });
        this.setState({fontLoaded: true});
    }

  render() {
    return (
        this.state.fontLoaded ? (<Root/>) : null
    );
  }
}


