module.exports = [
  {
    title: 'Sleepy Studios',
    date: '2009 onwards',
    color: 'linear-gradient(to bottom, #2a1f6d, #271d66, #241b5f, #221958, #1f1751)',
    slides: [
      {
        text: 'Game development studio I co-founded. To date we\'ve made over 15 games, including two commercial projects, one of which (Superstatic) is available on Steam',
        img: require('../assets/ss.png'),
        imgFit: 'cover'
      },
      {
        text: 'Our focus has always been on prototyping and recently our aim has been to create unique and interesting multiplayer games (e.g. Entropy)',
        img: require('../assets/entropy.png'),
        imgFit: 'cover'
      },
      {
        text: 'We regularly participate in game jams, especially Ludum Dare. These usually culminate in new project ideas (e.g. Waker and Dangle)',        
        img: require('../assets/vigilante.png'),
        imgFit: 'cover'
      },
      {
        text: 'Our first game, Crawle, despite not being on Steam, was hugely successful in a time where Steam was the dominant platform for indie games. The game took over 4 years to complete',
        img: require('../assets/crawle.png'),
        imgFit: 'cover'
      },
    ],
    url: 'sleepystudios.net',
    builtWith: ['Java (LibGDX, Slick, Kryonet)', 'JavaScript (Phaser)', 'Visual Basic'],
  },
  {
    title: 'MobileAuth',
    date: 'October 2016',
    color: 'linear-gradient(to bottom, #00c853, #00bb4e, #00af48, #00a243, #00963e)',
    slides: [
      {
        text: 'A secure mobile authentication system built for Capital One as part of a group project. The system allows a user to login on the web, authenticate on their phone via facial recognition or touch and once authenticated, the webpage would automatically update to log them in',
        img: ''
      },
      {
        text: 'Administrators also had access to a number of anonymous statistics such as login locations, phone platforms and authentication method popularity',
        img: ''
      },
      {
        text: '',
        img: require('../assets/mobauth1.png'),
        imgFit: 'cover'
      },
      {
        text: '',
        img: require('../assets/mobauth2.png'),
        imgFit: 'cover'
      },
      {
        text: '',
        img: require('../assets/mobauth3.png'),
        imgFit: 'cover'
      }
    ],
    builtWith: ['Node', 'Angular2', 'TypeScript'],
    learnText: 'Demo:'
  },
  {
    title: 'Just Pick It',
    date: 'March 2017',
    color: 'linear-gradient(to bottom, #ffab40, #fba234, #f79927, #f38f17, #ef8600)',
    slides: [
      {
        text: 'A web-app for storing potential going-out destinations (e.g. hotels, bars, restaurants). Anyone can create a lobby and share their lobby code to allow friends to add their own places and vote on existing ones',
        img: ''
      },
      {
        text: 'The backend was originally built using Express and LowDB (a lodash-based database package) but was rewritten in 2018 to use serverless architecture (specifically Amazon Lambda) coupled with DynamoDB',
        img: ''
      },
      {
        text: '',
        img: require('../assets/jpi1.png')
      },
      {
        text: '',
        img: require('../assets/jpi2.png')
      },
      {
        text: '',
        img: require('../assets/jpi3.png')
      },
      {
        text: '',
        img: require('../assets/jpi4.png')
      }
    ],
    url: 'justpick.it',
    builtWith: ['Node', 'Angular4', 'Bootstrap', 'TypeScript', 'Amazon Lambda', 'DynamoDB'],
  },
  {
    title: 'Waker',
    date: 'July 2017',
    color: 'linear-gradient(to bottom, #fbc02d, #f3b725, #eaae1c, #e2a512, #d99c04)',
    slides: [
      {
        text: 'A routing system for Sleepy Studios servers. Using Waker we can easily query server locations and statuses. If a server is down the bot will notify us via Twitter',
        img: ''
      },
      {
        text: 'Initially implemented using Express, in early 2018 I rewrote it to take advantage of serverless architecture using Amazon Lambda',
        img: ''
      }
    ],
    url: 'twitter.com/waker_bot',
    builtWith: ['Node', 'Amazon Lambda'],
    learnText: 'Demo:'
  },
  {
    title: 'Interviews App',
    date: 'July 2017',
    color: 'linear-gradient(to bottom, #9370db, #8761d6, #7b52d1, #6f42cc, #6231c6)',
    slides: [
      {
        text: 'An app I co-built during an internship at MHR. Allows potential candidates to record themselves answering interview questions, retry questions and review interviews by playing back individual clips',
        img: ''
      },
      {
        text: '',
        img: require('../assets/interview1.png')
      },
      {
        text: '',
        img: require('../assets/interview2.png')
      },
      {
        text: '',
        img: require('../assets/interview3.png')
      },
      {
        text: '',
        img: require('../assets/interview4.png')
      }
    ],
    builtWith: ['React Native'],
  },
  {
    title: 'Check In',
    date: 'August 2017',
    color: 'linear-gradient(to bottom, #880e4f, #7f0d4a, #760c45, #6e0b40, #650a3b)',
    slides: [
      {
        text: 'Another app built at MHR. The app aims to augment employee check-ins by managing a list of agreements and talking points between a manager and employee with speech recognition to easily store conversation notes for later review',
        img: ''
      },
      {
        text: 'The app also features video calling via Twilio and a socket server to synchronise events between managers and employees',
        img: ''
      },
      {
        text: '',
        img: require('../assets/checkin1.png')
      },
      {
        text: '',
        img: require('../assets/checkin2.png')
      },
      {
        text: '',
        img: require('../assets/checkin3.png')
      },
      {
        text: '',
        img: require('../assets/checkin4.png')
      },
      {
        text: '',
        img: require('../assets/checkin5.png')
      },
      {
        text: '',
        img: require('../assets/checkin6.png')
      },
      {
        text: '',
        img: require('../assets/checkin7.png')
      },
    ],
    builtWith: ['Ionic3', 'TypeScript'],
  },
  {
    title: 'Dangle',
    date: 'August 2017',
    color: 'linear-gradient(to bottom, #ff4081, #fc3575, #f82869, #f4195d, #ef0051)',
    slides: [
      {
        text: 'A tool for finding and scheduling other players for small multiplayer games. Users can add games, create and view event times in order to see when other players will be online',
        img: ''
      },
      {
        text: '',
        img: require('../assets/dangle0.png')
      },
      {
        text: '',
        img: require('../assets/dangle.png')        
      },
      {
        text: 'Users can also participate in discussions using the custom-built forum system',
        img: ''
      },
      {
        text: '',
        img: require('../assets/dangle2.png')
      },
      {
        text: 'Reports and requests to change info about games are handled through the Waker bot and rendered serverside using Pug',
        img: ''
      },
      {
        text: '',
        img: require('../assets/dangle3.png')
      },
      {
        text: '',
        img: require('../assets/dangle4.png')
      }
    ],
    url: 'dangl.es',
    builtWith: ['Node', 'Angular4', 'Material', 'SASS', 'TypeScript', 'Pug'],
  },
  {
    title: 'Eyes',
    date: 'September 2017',
    color: 'linear-gradient(to bottom, #4fc3f7, #42bbf4, #34b4f0, #23aced, #0aa4e9)',
    slides: [
      {
        text: 'A visualisation of Waker showing physical server locations and statuses',
        img: ''
      },
      {
        text: '',
        img: require('../assets/eyes.png'),
        imgFit: 'cover'
      }
    ],
    url: 'sleepystudios.net/eyes',
    builtWith: ['Angular4', 'TypeScript'],
    learnText: 'Demo:'
  },
  {
    title: 'tudr.xyz',
    date: 'September 2017',
    color: 'linear-gradient(to bottom, #444444, #404040, #3b3b3b, #373737, #333333)',
    slides: [
      {
        text: 'You are here. A portfolio site built in a few days to learn Vue.js. The app features a dynamic slide system used to display each project',
        img: ''
      },
      {
        text: '<span style="font-size: 1.75rem; color: hotpink">Slides can be easily styled and customised',
        img: 'http://i2.wp.com/thelifepile.com/wp-content/uploads/2016/07/Vantablack-is-so-black-physical-features-can-not-be-seen.jpg?fit=800%2C571',
        imgFit: 'cover'
      }
    ],
    builtWith: ['Vue'],
  },
  {
    title: 'Yoop',
    date: 'November 2017 - February 2018',
    color: 'linear-gradient(to bottom, #df5a64, #d94e58, #d2424b, #cb353f, #c42632)',
    slides: [
      {
        text: 'A platform aiming to eliminate fake news by allowing users to rate news as part of a self-regulating community',
        img: ''
      },
      {
        text: 'I worked as front end developer on their web frontend, Chrome extension and mobile app. My role was to redesign the existing front ends as well as to bring it up to modern web standards',
        img: ''
      },
      {
        text: '',
        img: require('../assets/yoop1.png')
      },
      {
        text: '',
        img: require('../assets/yoop2.png')
      },
      {
        text: '',
        img: require('../assets/yoop3.png')
      },
      {
        text: '',
        img: require('../assets/yoop4.png')
      }
    ],
    builtWith: ['React, React Native']
  },
  {
    title: 'Just Map It',
    date: 'November 2017',
    color: 'linear-gradient(to bottom, #ff933e, #fb8932, #f67e24, #f27315, #ed6800)',
    slides: [
      {
        text: 'A Just Pick It mobile companion app allowing you to add places to your lobby by tapping on them in a Google Maps interface',
        img: ''
      },
      {
        text: '',
        img: require('../assets/jmi0.png')
      },
      {
        text: '',
        img: require('../assets/jmi1.png')
      },
      {
        text: '',
        img: require('../assets/jmi2.png')
      },
      {
        text: '',
        img: require('../assets/jmi3.png')
      },
      {
        text: '',
        img: require('../assets/jmi4.png')
      },
      {
        text: '',
        img: require('../assets/jmi5.png')
      }
    ],
    url: 'github.com/sekaru/justmapit',
    builtWith: ['React Native', 'Google Maps & Places APIs'],
    learnText: 'Source:'
  },
  {
    title: 'LIFX Visualiser',
    date: 'January 2018',
    color: '#191414',
    additionalClasses: 'party',
    slides: [
      {
        text: 'Visualise your Spotify music through a LIFX device using Spotify\'s web API and audio analysis tool',
        img: ''
      }
    ],
    url: 'github.com/sekaru/spotify-lifx-visualiser',
    builtWith: ['Node', 'Pug', 'Spotify API'],
    learnText: 'Source:'
  },
  {
    title: 'Octopocto',
    date: 'February 2018',
    color: 'linear-gradient(to bottom, #7f3bba, #7737ae, #6f33a2, #673097, #5f2c8b)',
    slides: [
      {
        text: 'A web app that automatically generates a portfolio from your public GitHub profile and shows your favourite languages and topics',
        img: ''
      },
      {
        text: '',
        img: require('../assets/octo1.png'),
        imgFit: 'cover'        
      },
      {
        text: '',
        img: require('../assets/octo2.png')  
      }
    ],
    url: 'sekaru.github.io/Octopocto',
    builtWith: ['React', 'GitHub API'],
    learnText: 'Demo:'
  }
]