let state = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hi how', likeCount: 11},
            {id: 1, message: 'Yes', likeCount: 12},
            {id: 2, message: 'Hi', likeCount: 13},
        ]

    },
    dialogPage: {
        dialogs: [
            {id: 0, name: 'Nikita'},
            {id: 1, name: 'Macks'},
            {id: 2, name: 'Macksat'},
            {id: 3, name: 'Alecksei'},
            {id: 4, name: 'Valera'},
        ],

        messages: [
            {id: 0, message: 'Kik'},
            {id: 1, message: 'AAA'},
            {id: 2, message: 'asda'},
            {id: 3, message: 'gfgs'},
            {id: 4, message: 'gsgsg'},
        ]
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: 'lera',
                imgUrl: 'https://i.pinimg.com/originals/68/31/bc/6831bc33fb85a01dc77de4e31a238ed3.gif'
            },
            {
                id: 2,
                name: 'Vika',
                imgUrl: 'https://www.icegif.com/wp-content/uploads/2021/10/icegif-898.gif'
            },
            {
                id: 3,
                name: 'Nikita',
                imgUrl: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/252490/828f8f26b8c51b1ce13d419e7709a02346068fb3.gif'
            }
        ]

    }
}

export default state;