export const socialLinks = {
    email: 'mailto:andor.davoti@gmail.com',
    linkedin: 'https://linkedin.com/in/andordavoti',
    github: 'https://github.com/andordavoti',
};

export const skills = {
    development: [
        {
            name: 'React',
            link: 'https://reactjs.org/',
        },
        {
            name: 'React Native',
            link: 'https://reactnative.dev/',
        },
        {
            name: 'Javascript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            name: 'Typescript',
            link: 'https://www.typescriptlang.org/',
        },
        {
            name: 'HTML',
            link: 'https://www.w3.org/html/',
        },
        {
            name: 'CSS & SCSS',
            link: 'https://sass-lang.com/',
        },
        {
            name: 'Arduino',
            link: 'https://www.arduino.cc/',
        },
    ],
    design: [
        {
            name: 'Adobe XD',
            link: 'https://www.adobe.com/products/xd.html',
        },
        {
            name: 'Adobe Photoshop',
            link: 'https://www.adobe.com/products/photoshop.html',
        },
        {
            name: 'Fusion 360',
            link: 'https://www.autodesk.com/products/fusion-360/overview',
        },
    ],
};

export const projects = [
    // software
    {
        name: 'Tic Tac Toe – Online',
        date: '2020',
        subtitle: 'Open-source online iOS and android Tic Tac Toe game.',
        description:
            "Open-source cross-platform mobile (iOS and android) online multiplayer game, built using React Native, Redux, Expo, Firestore and Firebase Cloud functions. Play Tic Tac Toe cross-platform. Both online and in-person with your friends. We don't require you to create an account. Instead, we utilize anonymous lobby id's. Therefore only you and the one you're playing with online know who is playing with who.",
        imgUrl: [require('../assets/img/tic-tac-toe.jpg')],
        appStoreUrl: 'https://apps.apple.com/us/app/tic-tac-toe-online/id1513609441?ls=1',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andordavoti.tictactoe.game',
        links: [
            {
                name: 'Github repo',
                link: 'https://github.com/andordavoti/tic-tac-toe-app',
            },
            {
                name: 'Github repo',
                link: 'https://github.com/andordavoti/tic-tac-toe-app',
            },
        ],
        technologies: [
            {
                name: 'Preact',
                link: 'https://preactjs.com/',
            },
            {
                name: 'React',
                link: 'https://reactjs.org/',
            },
            {
                name: 'Redux',
                link: 'https://redux.js.org/',
            },
            {
                name: 'Expo',
                link: 'https://expo.io/',
            },
            {
                name: 'React Native',
                link: 'https://reactnative.dev/',
            },
            {
                name: 'Firebase',
                link: 'https://firebase.google.com/',
            },
            {
                name: 'Typescript',
                link: 'https://www.typescriptlang.org/',
            },
        ],
    },
    {
        date: '2019 - 2020',
        name: 'Fast Rhymes',
        subtitle: ' Open-source minimalist iOS and android rhyme dictionary app.',
        imgUrl: [require('../assets/img/fast-rhymes.jpg')],
    },
    {
        date: '2019',
        name: 'EV Calculator',
        subtitle: 'Open-source iOS and android app to calculate the speed and range of simple EVs.',
        imgUrl: [require('../assets/img/ev-calculator.jpg')],
    },
    {
        date: '2019',
        name: 'G-Eazy Discography',
        subtitle: 'Open-source iOS and android app which shows the discography and tour dates for the artist G-Eazy.',
        imgUrl: [require('../assets/img/g-eazy.jpg')],
    },
    // hardware
    {
        date: '2017 - 2020',
        name: 'Electric Longboard',
        subtitle: 'High power e-board built from scratch.',
        imgUrl: [require('../assets/img/e-board.jpg')],
    },
    {
        date: '2017 - 2020',
        name: 'Home Automation',
        subtitle: 'Built custom IOT devices and set up a custom smart home solution with Home Assistant.',
        imgUrl: [require('../assets/img/e-board.jpg')],
    },
    {
        date: '2017 - 2019',
        name: 'Privatek',
        subtitle: 'Co-founder and CEO of Privatek, a company with a focus on preventing webcam spying .',
        imgUrl: [require('../assets/img/privatek.jpg')],
    },
    {
        date: '2017',
        name: 'Autonomous Robot',
        subtitle:
            'Simple 3D printed robot which can be controlled by a custom android app I made or move around autonomously.',
        imgUrl: [require('../assets/img/robot.jpg')],
    },
    {
        date: '2016',
        name: 'FPV Racing Drone v2',
        subtitle: 'Another high power racing drone built from scratch.',
        imgUrl: [require('../assets/img/racing-drone-v2.jpg')],
    },
    {
        date: '2016',
        name: 'Camera Drone',
        subtitle: 'Large 500mm drone with a gimbal for stable footage.',
        imgUrl: [require('../assets/img/film-drone.jpg')],
    },
    {
        date: '2014 - 2015',
        name: 'FPV Racing Drone',
        subtitle: 'High power racing drone built from scratch.',
        imgUrl: [require('../assets/img/racing-drone.jpg')],
    },
];
