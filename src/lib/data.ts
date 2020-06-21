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
            imgUrl: require('../assets/icons/skill-icons/react.png'),
        },
        {
            name: 'React Native',
            link: 'https://reactnative.dev/',
            imgUrl: require('../assets/icons/skill-icons/react.png'),
        },
        {
            name: 'Javascript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            imgUrl: require('../assets/icons/skill-icons/JS.jpg'),
        },
        {
            name: 'Typescript',
            link: 'https://www.typescriptlang.org/',
            imgUrl: require('../assets/icons/skill-icons/TS.jpg'),
        },
        {
            name: 'HTML',
            link: 'https://www.w3.org/html/',
            imgUrl: require('../assets/icons/skill-icons/HTML.png'),
        },
        {
            name: 'CSS & SCSS',
            link: 'https://sass-lang.com/',
            imgUrl: require('../assets/icons/skill-icons/CSS.png'),
        },
        {
            name: 'Arduino',
            link: 'https://www.arduino.cc/',
            imgUrl: require('../assets/icons/skill-icons/arduino.png'),
        },
    ],
    design: [
        {
            name: 'Adobe XD',
            link: 'https://www.adobe.com/products/xd.html',
            imgUrl: require('../assets/icons/skill-icons/XD.png'),
        },
        {
            name: 'Adobe Photoshop',
            link: 'https://www.adobe.com/products/photoshop.html',
            imgUrl: require('../assets/icons/skill-icons/PS.png'),
        },
        {
            name: 'Fusion 360',
            link: 'https://www.autodesk.com/products/fusion-360/overview',
            imgUrl: require('../assets/icons/skill-icons/fusion-360.jpg'),
        },
    ],
};

export const projects = [
    {
        id: 'tic-tac-toe',
        name: 'Tic Tac Toe – Online',
        date: '2020',
        subtitle: 'Open-source online iOS and android Tic Tac Toe game.',
        description: null,
        imgUrl: [require('../assets/img/tic-tac-toe.jpg')],
        appStoreUrl: 'https://apps.apple.com/us/app/tic-tac-toe-online/id1513609441?ls=1',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andordavoti.tictactoe.game',
        webAppUrl: null,
        links: [
            {
                name: 'Github repo',
                link: 'https://github.com/andordavoti/tic-tac-toe-app',
            },
            {
                name: 'Landing page and privacy policy made with preact',
                link: 'https://ticktacktoe-7aa6d.web.app/',
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
        id: 'fast-rhymes',
        date: '2019 - 2020',
        name: 'Fast Rhymes',
        subtitle: ' Open-source minimalist iOS and android rhyme dictionary app.',
        description: null,
        imgUrl: [require('../assets/img/fast-rhymes.jpg')],
        appStoreUrl: 'https://apps.apple.com/us/app/tic-tac-toe-online/id1513609441?ls=1',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andordavoti.tictactoe.game',
        webAppUrl: null,
        links: [
            {
                name: 'Github repo',
                link: 'https://github.com/andordavoti/fast-rhymes-app',
            },
            {
                name: 'Landing page',
                link: 'https://ovitas.no/fast-rhymes/',
            },
            {
                name: 'Datamuse API',
                link: 'http://www.datamuse.com/api/',
            },
        ],
        technologies: [
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
                name: 'Typescript',
                link: 'https://www.typescriptlang.org/',
            },
        ],
    },
    {
        id: 'ev-calculator',
        date: '2019',
        name: 'EV Calculator',
        subtitle: 'Open-source iOS and android app to calculate the speed and range of simple EVs.',
        description: null,
        imgUrl: [require('../assets/img/ev-calculator.jpg')],
        appStoreUrl: 'https://apps.apple.com/no/app/ev-calculator-speed-range/id1489181082',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=ev.calculator.mobileapp',
        webAppUrl: null,
        links: [
            {
                name: 'Github repo',
                link: 'https://github.com/andordavoti/ev-calculator-app',
            },
        ],
        technologies: [
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
        ],
    },
    {
        id: 'g-eazy-discography',
        date: '2019',
        name: 'G-Eazy Discography',
        subtitle: 'Open-source iOS and android app which shows the discography and tour dates for the artist G-Eazy.',
        description: null,
        imgUrl: [require('../assets/img/g-eazy.jpg')],
        appStoreUrl: null,
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andordavoti.geazyalbums',
        webAppUrl: null,
        links: [
            {
                name: 'Github repo',
                link: 'https://github.com/andordavoti/g-eazy-app',
            },
        ],
        technologies: [
            {
                name: 'React',
                link: 'https://reactjs.org/',
            },
            {
                name: 'Expo',
                link: 'https://expo.io/',
            },
            {
                name: 'React Native',
                link: 'https://reactnative.dev/',
            },
        ],
    },
    {
        id: 'electric-longboard',
        date: '2017 - 2020',
        name: 'Electric Longboard',
        subtitle: 'High power e-board built from scratch.',
        description: null,
        imgUrl: [require('../assets/img/e-board.jpg')],
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: [
            {
                name: '3D Printed pulley cover',
                link: 'https://www.thingiverse.com/thing:2445734',
            },
        ],
        technologies: null,
    },
    {
        id: 'home-automation',
        date: '2017 - 2020',
        name: 'Home Automation',
        subtitle: 'Built custom IOT devices and set up a custom smart home solution with Home Assistant.',
        description: null,
        imgUrl: [require('../assets/img/home-automation.jpg')],
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: [
            {
                name: '3D Print files for Surface Pro 2 wall mount',
                link: 'https://www.thingiverse.com/thing:2727094',
            },
            {
                name: '3D Print files for iPad 3 wall mount',
                link: 'https://www.thingiverse.com/thing:2727088',
            },
        ],
        technologies: null,
    },
    {
        id: 'privatek',
        date: '2017 - 2019',
        name: 'Privatek',
        subtitle: 'Co-founder and CEO of Privatek, a company with a focus on preventing webcam spying.',
        description: null,
        imgUrl: [require('../assets/img/privatek.jpg')],
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: [
            {
                name: 'Website',
                link: 'https://privatek.no/',
            },
        ],
        technologies: null,
    },
    {
        id: 'esk8-calculator',
        date: '2017',
        name: 'ESK8 Calculator',
        subtitle: 'Native android app to calculate the speed and range of custom built e-boards.',
        description: null,
        imgUrl: [require('../assets/img/esk8-calculator.jpg')],
        appStoreUrl: null,
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andordavoti.esk8speedandrangecalculator',
        webAppUrl: null,
        links: null,
        technologies: [
            {
                name: 'Java',
                link: 'https://www.oracle.com/java/',
            },
            {
                name: 'XML',
                link: 'https://www.w3.org/XML/',
            },
        ],
    },
    {
        id: 'autonomous-robot',
        date: '2017',
        name: 'Autonomous Robot',
        subtitle:
            'Simple 3D printed robot which can be controlled by a custom android app I made or move around autonomously.',
        description: null,
        imgUrl: [require('../assets/img/robot.jpg')],
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: [
            {
                name: '3D Print files on Thingiverse',
                link: 'https://www.thingiverse.com/thing:2445762',
            },
        ],
        technologies: [
            {
                name: 'Arduino',
                link: 'https://www.arduino.cc/',
            },
        ],
    },
    {
        id: 'fpv-racing-drone-v2',
        date: '2016',
        name: 'FPV Racing Drone v2',
        subtitle: 'Another high power racing drone built from scratch.',
        description: null,
        imgUrl: [require('../assets/img/racing-drone-v2.jpg')],
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: null,
        technologies: null,
    },
    {
        id: 'camera-drone',
        date: '2016',
        name: 'Camera Drone',
        subtitle: 'Large 500mm drone with a gimbal for stable footage.',
        description: null,
        imgUrl: [require('../assets/img/camera-drone.jpg')],
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: [
            {
                name: 'Footage of a castle in Hungary from the drone',
                link: 'https://youtu.be/-4XclMlrq5w?t=97',
            },
        ],
        technologies: null,
    },
    {
        id: 'fpv-racing-drone',
        date: '2014 - 2015',
        name: 'FPV Racing Drone',
        subtitle: 'High power racing drone built from scratch.',
        description: null,
        imgUrl: [require('../assets/img/racing-drone.jpg')],
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: null,
        technologies: null,
    },
];
