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
        {
            name: 'Firebase',
            link: 'https://firebase.google.com/',
            imgUrl: require('../assets/icons/skill-icons/firebase.png'),
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

export const projects = {
    tic_tac_toe: {
        name: 'Tic Tac Toe – Online',
        date: '2020',
        subtitle: 'Open-source online tri-platform (iOS, Android and web) Tic Tac Toe game.',
        description: [
            "Open-source, tri-platform mobile (iOS, Android and web) online multiplayer game, built using React Native, React Native for Web,  Redux, Expo, Firestore, and Firebase Cloud functions. Play Tic Tac Toe cross-platform, either online or in-person with your friends. Registration is not needed, instead, anonymous lobby id's are utilized. Therefore only you and the one you're playing with online know who is playing with who.",
        ],
        imgUrl: require('../assets/img/tic-tac-toe.jpg'),
        appStoreUrl: 'https://apps.apple.com/us/app/tic-tac-toe-online/id1513609441?ls=1',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andordavoti.tictactoe.game',
        webAppUrl: 'https://tictactoe.no/',
        links: [
            {
                name: 'Github repo',
                link: 'https://github.com/andordavoti/tic-tac-toe-app',
            },
            {
                name: 'Landing page and privacy policy made with preact',
                link: 'https://ticktacktoe-7aa6d.web.app/',
            },
            {
                name: 'Reddit post 1',
                link: 'https://www.reddit.com/r/reactnative/comments/h8rwi5/online_game_with_firebase/',
            },
            {
                name: 'Reddit post 2',
                link:
                    'https://www.reddit.com/r/reactnative/comments/hgf317/tri_platform_reactnative_game_with_expo_firestore/',
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
                name: 'React Native for Web',
                link: 'https://github.com/necolas/react-native-web',
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
    den_store_bokmalsordboka: {
        date: '2019 - 2020',
        name: 'Den store bokmålsordboka',
        subtitle: 'Took part in developing an iOS and Android app for the largest Norwegian dictionary.',
        description: [
            'Den store bokmålsordboka is the largest Norwegian dictionary, with over 180 000 words. At Ovitas AS I took part in developing the mobile app, managing the external testing and making the landing page.',
            'The app will become available in august.',
        ],
        imgUrl: require('../assets/img/bokmalsordboka.jpg'),
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: [
            {
                name: 'Landing page',
                link: 'https://www.denstorebokmålsordboka.no/appen',
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
            {
                name: 'SQLite',
                link: 'https://www.sqlite.org/index.html',
            },
        ],
    },
    fast_rhymes: {
        date: '2019 - 2020',
        name: 'Fast Rhymes',
        subtitle: 'Minimalist iOS and Android rhyme dictionary app.',
        description: [
            "Tri-platform mobile (iOS, Android and web) rhyme dictionary app, built using React Native, React Native for Web, Redux, Expo, and the Datamuse API. Find words that rhyme, associations, words with similar meaning, words with similar spelling, etc. You can sort search results by syllables or sort by the most relevant words. It was built to be fast and convenient, with a minimalist design to not be in the way of the artists' creative process.",
        ],
        imgUrl: require('../assets/img/fast-rhymes.jpg'),
        appStoreUrl: 'https://apps.apple.com/us/app/fast-rhymes/id1492575811?ls=1',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=rhyme.dictionary.mobileapp',
        webAppUrl: 'https://fastrhymes.com/',
        links: [
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
                name: 'React Native for Web',
                link: 'https://github.com/necolas/react-native-web',
            },
            {
                name: 'Typescript',
                link: 'https://www.typescriptlang.org/',
            },
        ],
    },
    hunnor: {
        date: '2019 - 2020',
        name: 'HunNor Dictionary',
        subtitle: 'Took part in developing an iOS and Android app for an open-source Norwegian-Hungarian dictionary.',
        description: [
            'The HunNor Dictionary is an open-source Norwegian-Hungarian dictionary. At Ovitas AS, I took part in developing the mobile app.',
        ],
        imgUrl: require('../assets/img/hunnor.jpg'),
        appStoreUrl: 'https://itunes.apple.com/us/app/hunnor/id1305770091',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=net.hunnor.dict.mobileapp',
        webAppUrl: null,
        links: [
            {
                name: 'Landing page/web version',
                link: 'https://dict.hunnor.net/',
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
                name: 'SQLite',
                link: 'https://www.sqlite.org/index.html',
            },
        ],
    },
    ev_calculator: {
        date: '2019',
        name: 'EV Calculator',
        subtitle: 'Open-source iOS and Android app to calculate the speed and range of simple EVs.',
        description: [
            'This is the continuation of one of my old Android app projects, "ESK8 Calculator". Since I switched to iOS, I wanted the app for both platforms. I also got feedback from my users asking for a "simple mode" with dropdowns with standard approximate values. Therefore I decided to recreate the app with React Native since I was learning it at the time. EV Calculator is an open-source, cross-platform mobile (iOS and Android) calculator app, built using React Native, Redux, and Expo. When building an electric longboard, go-kart, or bike, you often need to recalculate the speed and range of your vehicle throughout the build process. Instead of needing to remember a formula, enter the standard variables necessary for the calculation and examine how these variables affect the speed and range.',
        ],
        imgUrl: require('../assets/img/ev-calculator.jpg'),
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
    g_eazy_discography: {
        date: '2019',
        name: 'G-Eazy Discography',
        subtitle: 'Open-source iOS and Android app which shows the discography and tour dates for the artist G-Eazy.',
        description: [
            "Open-source, cross-platform mobile (iOS and Android) app to display the discography and tour dates for the artist G-Eazy, built using React Native, Redux, Expo, and the Bandsintown API. Later I lost access to the Bandsintown API since apparently, only people working directly with the artist should have access to it. So they were quite surprised about why they gave me three months' access. Anyways, it was a great learning experience as it was my first React Native project.",
        ],
        imgUrl: require('../assets/img/g-eazy.jpg'),
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
    electric_longboard: {
        date: '2017 - 2020',
        name: 'Electric Longboard',
        subtitle: 'High power e-board built from scratch.',
        description: [
            "Since I wanted a last-mile vehicle, I decided that it would be cheaper and lots of fun to build instead of just buying one. I didn't want the typical e-bike or e-scooter which everyone had, so I decided to build an electric longboard. I watched some YouTube videos from some experienced builders and read some posts on the esk8 builders forums. Then I ordered the parts, which were the longboard deck, trucks, and wheels. For electrifying it, I ordered a motor mount, high power BLDC motor, powerful BLDC VESC (an open-source motor controller which allows more customizability than a standard BLDC ESC), belt drive kit with suitable gears, wireless remote, BMS, and high power Samsung 18650 lithium battery cells. I spot welded the battery cells with a 6S4P configuration (6 cells in series, 4 cells in parallel). The enclosure underneath the board was custom built to fit, and I also designed, and 3D printed some custom covers for the drive train. I ended up with a really powerful board with over three horsepower (2500W), a range of over 30km, and a top speed between 25-35km/h.",
        ],
        imgUrl: require('../assets/img/e-board.jpg'),
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
    home_automation: {
        date: '2017 - 2020',
        name: 'Home Automation',
        subtitle: 'Built custom IOT devices and set up a custom smart home solution with Home Assistant.',
        description: [
            "After experimenting with home automation on Arduino board switching on and off relays based on sensor data, I wanted something more connected. Thus I bought a couple of ESP8266's, which are Arduino compatible boards with WiFi connectivity for as cheap as 3USD! I first started with automating using the Adafruit MQTT broker, which is free, but had a lot of limitations. The server could be down at any time, and it was unreachable if my internet went down.",
            'So the solution was a system running on my LAN. This way, my devices worked together even if my internet was down, and I had control over the server if it went down. More importantly, I owned the data! I could decide who to share the data with myself and had total control over it.',
            "The solution was Home Assistant. To clarify, I'm not associated with the development of Home Assistant. I'm just a user of their platform. Home Assistant is an open-source home automation platform that acts as a hub for all of your devices. It's probably the world's largest platform in terms of integrations at over 1600 on June 19th of 2020. It's also a local system, which is uncommon in the consumer market. It's not a consumer platform (yet), but it's come a long way since 2017, which is when I started using it.",
            "On top of Home Assistant I have addons for running my ESP8266 devices with custom firmwares. Examples of devices I've built are a lot of multipurpose devices, which is one node that controls light, reports temperature, humidity, door status, etc. I've also made devices like a custom automated watering solution for our greenhouse. This device controls water flow with a servo, reports door status, temperature, humidity, and motion.",
            "The possibilities are endless, and I've only scratched the surface of what's possible. I've learned a lot about IoT technologies, IoT protocols like MQTT, Z-Wave, and Zigbee. I look forward to seeing what Home Assistant evolves to, what new IoT devices I'll make, and contributing to the project myself in the future.",
        ],
        imgUrl: require('../assets/img/home-automation.jpg'),
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
    privatek: {
        date: '2017 - 2019',
        name: 'Privatek',
        subtitle: 'Co-founder and CEO of Privatek, a company with a focus on preventing webcam spying.',
        description: [
            "Privatek started as a school project during the first year of High School. We developed a product that solves the cybersecurity flaw of webcams. It's the world's most elegant webcam cover at an affordable price. I was a co-founder and the CEO of the company. We were an officially established youth company in Oslo from 2017 to 2019. During the project, I worked on the company website (linked below), product design, sales, and management.",
            'We won several prizes in the youth entrepreneurship championships. We started by winning 8000NOK from DNB after our first pitch competition. Then we won the best website and second place for the most innovative business at the Oslo youth entrepreneurship championships of 2018. This qualified us for competing in the national competition. There we also won the best website as well as third place for the best business plan.',
        ],
        imgUrl: require('../assets/img/privatek.jpg'),
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
    esk8_calculator: {
        date: '2017',
        name: 'ESK8 Calculator',
        subtitle: 'Native Android app to calculate the speed and range of custom built e-boards.',
        description: [
            "At this time, I considered building my own electric longboard. The issue I ran into when I was planning which parts to use was that I had to recalculate the speed and range of my board with every new part I considered. It isn't a mathematically complex formula, but it was tedious since I always had to check if the part would fit my needs and play nice with the rest of the board. Thus I decided to make a convenient mobile app for it, so I could just enter the specifications of the motor, ESC, battery, wheel size, etc. and the app would calculate it instantly. This way, I could easily see how a different motor would affect performance, making the shopping process much more manageable.",
            'Check out the continuation of this project, "EV Calculator" in the links below.',
        ],
        imgUrl: require('../assets/img/esk8-calculator.jpg'),
        appStoreUrl: null,
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andordavoti.esk8speedandrangecalculator',
        webAppUrl: null,
        links: [
            {
                name: 'EV Calculator',
                link: 'https://andordavoti.com/ev_calculator',
            },
        ],
        technologies: [
            {
                name: 'Android Studio',
                link: 'https://developer.android.com/studio/intro',
            },
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
    autonomous_robot: {
        date: '2017',
        name: 'Autonomous Robot',
        subtitle:
            '3D printed robot which can be controlled by a custom Android app I made or move around autonomously.',
        description: [
            'This was actually a really overkill project for one of my classes in the 10th grade. I didn\'t get the top grade in my "technology class" the year before, which I wasn\'t happy with. So I asked the teacher for the freedom to make something I came up with myself (we previously got some pretty easy and tedious tasks like making a phone stand, etc.).',
            'Since I experimented with Arduinos at the time, I decided that making a simple robot would be a cool project to "wow" the teacher for the top grade. I designed the parts in Fusion 360, and 3D printed them. The design of the robot was fairly simple. It had two wheels attached to two separate motors with a caster wheel in the back. This made full movement and turning possible for the robot.',
            'The brains of the robot was an Arduino Uno with a motor controller shield connected to the two motors. I added a servo motor with a sonar sensor on the top of the robot to give it spacial awareness. It wasn\'t a practical robot, more of a learning and "show off" project. So the primary function it was programmed to do is to roll around the room autonomously with somewhat smart decisions. It "looked" left and right with its sonar sensor, then measured the distances and continued to the path with most space, over and over again, indefinitely.',
            'Later I also added a BlueTooth module to the robot. I wrote an Android app for my phone, which allowed me to control it like an RC car and also activate an autonomous mode.',
        ],
        imgUrl: require('../assets/img/robot.jpg'),
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
    fpv_racing_drone_v2: {
        date: '2016',
        name: 'FPV Racing Drone v2',
        subtitle: 'Another high power racing drone built from scratch.',
        description: [
            "After building two drones, I gained some experience and decided to build another racing drone. This time I wanted even better performance, so I bought some bigger and more powerful motors, ESCs with firmware tuned for race quads and the same carbon fiber frame I used previously. This time I went for four-cell battery packs, and the performance didn't disappoint.",
        ],
        imgUrl: require('../assets/img/racing-drone-v2.jpg'),
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: null,
        technologies: null,
    },
    camera_drone: {
        date: '2016',
        name: 'Camera Drone',
        subtitle: 'Large 500mm drone with a gimbal for stable footage.',
        description: [
            'After building a smaller racing drone, I wanted to build something bigger to carry a stabilized camera. I ordered some motors, ESCs, a frame, and a flight controller with GPS support from China and started building. This time I wanted to have GPS on board for safety. Since it was a larger and more expensive drone, safety features like, return to home and GPS hold were important.',
            'After completing the build, I got a hardshell case for it and brought it to Hungary, where I filmed some astonishing castles. The video is linked below.',
        ],
        imgUrl: require('../assets/img/camera-drone.jpg'),
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
    fpv_racing_drone: {
        date: '2014 - 2015',
        name: 'FPV Racing Drone',
        subtitle: 'High power racing drone built from scratch.',
        description: [
            'As a 13-year-old, I was fascinated by the high power racing drones I saw on YouTube. These drones were operated in FPV (first-person view) through FPV goggles, to give an immersive experience like actually sitting in the drone when flying it. After watching some build guides on YouTube, I decided to go for it. So I saved up and ordered the parts from China.',
            "At that age, I didn't have much experience with electronics, especially not high amperage electronics. So putting together a high power racing drone from just motors, ESCs, a frame, and a flight controller was quite the challenge. I was lucky enough to have the internet as a resource and just watched countless videos on the topic.",
            'In a couple of weeks after receiving the parts, I managed to assemble it! I configured the flight controller with the right firmware and settings, calibrated the ESCs, and was ready to fly. I ran it on a three-cell battery pack, which gave it approximately 10 minutes of flight time and fantastic performance.',
        ],
        imgUrl: require('../assets/img/racing-drone.jpg'),
        appStoreUrl: null,
        playStoreUrl: null,
        webAppUrl: null,
        links: null,
        technologies: null,
    },
};
