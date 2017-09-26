import {Dimensions} from 'react-native';



let width = Dimensions.get('window').width;
export const css = {
    //used for form page
    containerCentered: {
        flex: 1,
        backgroundColor: "#006FAA",
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: width - 100
    },
    textWhite: {
        color: "#fff",
        fontFamily: 'nova-regular',
        fontSize: 17
    },
    signinButton: {
        marginLeft: 12,
        marginTop: 28,
        marginBottom: 21,
        borderColor: "#22AAF2"
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'nova-bold',
        fontSize: 17
    },
    buttonsContainer: {
        width: width - 100,
        marginLeft: 12,
        marginTop: 38
    },
    buttonFb: {
        backgroundColor: "#00AEEF",
        borderColor: "#60838B",
        marginBottom: 10
    },
    buttonGoo: {
        backgroundColor: "#EF5300",
        borderColor: "#60838B"
    },
    btnIcons: {
        color: '#fff',
        paddingRight: 27
    },
    accText: {
        color: '#fff',
        fontFamily: 'nova-bold',
        fontSize: 17
    },

    // header stuff
    header: {
        backgroundColor: "#22AAF2",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuIcon: {
        marginTop: 10,
        width: 27,
        height: 18
    },
    headerTitle: {
        color: "#fff",
        fontSize: 20,
        marginTop: 18,
        fontFamily: 'nova-regular'
    },
    searchIcon: {
        marginTop: 10,
        height: 22,
        width: 22
    },
    newMsgIcon: {
        marginRight: 10,
        height: 21,
        width: 18
    },
    newMsgText: {
        color: "#22AAF2",
        fontFamily: 'nova-regular',
        fontSize: 17
    },
    newMsgBtn: {
        backgroundColor: "#fff"
    },

    //list of messages
    content: {
        backgroundColor: "#fff"
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
        justifyContent: 'space-around'
    },

};