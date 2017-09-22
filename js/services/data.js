
export const user = {
    "email": "something@something.com",
    "name": "Cindy Koebele",
    "owner": true,
    "title": "TitleAgent",
    "company": "Title-Smart, Inc",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",

};

export const messages = [
    {
        "id": 1,
        "senders": [
            {
                "name": "Billy Foster",
                "image": "https://randomuser.me/api/portraits/men/20.jpg"
            },
            {
                "name": "Jenny Paulson",
                "image": "https://randomuser.me/api/portraits/women/8.jpg"
            },

        ],
        "title": "Closing Disclosure",
        "info": "in 9410 SW 136th, Miami FL",
        "lastDate": "Mon",
        "messages": [{
            "id": 1,
            "sender": "Jenny Paulson",
            "image": "https://randomuser.me/api/portraits/women/8.jpg",
            "date": "9:28 AM",
            "text": "Since the TRID numbers don’t reflect\n" +
            "the reality of what the seller pays for\n" +
            "title insurance, we use the \n" +
            "adjustments section.",
            "file": false
        },
            {
                "id": 1,
                "sender": "Billy Foster",
                "image": "https://randomuser.me/api/portraits/men/20.jpg",
                "date": "9:29 AM",
                "text": "Thank you for your timely input. \n" +
                "I finally understand how these TRID\n" +
                "numbers work.",
                "file": false
            },
            {
                "id": 1,
                "sender": "Billy Foster",
                "image": "https://randomuser.me/api/portraits/men/20.jpg",
                "date": "9:30 AM",
                "text": "File: CD-updated.PDF",
                "file": true
            },
            {
                "id": 1,
                "sender": "Cindy Koebele",
                "image": "https://randomuser.me/api/portraits/women/44.jpg",
                "date": "9:31 AM",
                "text": "Oh, great! Thanks",
                "file": false
            }

        ]
    },
    {
        "id": 2,
        "senders": [
            {
                "name": "Sam Jones",
                "image": "https://randomuser.me/api/portraits/men/9.jpg"
            }
        ],
        "title": "Join our Lunch-and-Learn",
        "info": "in Private Messages",
        "lastDate": "Aug 20"
    }
];





export const messagesImg = {
    menuImage: require('../../assets/icons/menu-icon.png'),
    searchImage: require('../../assets/icons/search-icon.png'),
    newMsgImage: require('../../assets/icons/new-message.png'),
};
export const menuImg = {
    headerBackground: require('../../assets/img/menuHeader.png'),
    dealIcon: require('../../assets/icons/deals-icon.png'),
    msgIcon: require('../../assets/icons/messages-icon.png'),
    profileIcon: require('../../assets/icons/profile-icon.png'),
    notificationsIcon: require('../../assets/icons/notifications-icon.png'),
    signoutIcon: require('../../assets/icons/signout-icon.png'),
};