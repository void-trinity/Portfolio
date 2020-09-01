const projects = [
    {
        title: 'Pokédex',
        description: 'A mini-encyclopedia of Pokémon species, types, evolutions, and moves. Made using Node JS, React JS, React Native, Tensorflow-Lite and Mongo-DB. The data was scraped from official pokemon.com website and stored in Mongo-DB database. The application is available as both web app and mobile app. The mobile application also deploys mobilenet ssd model for image classification of generation I pokemon on the device itself, just like the real pokedex featured in pokemon game and tv shows.',
        link: 'https://gitlab.com/void-trinity/pokedex-backend'
    },
    {
        title: 'E-Health',
        description: 'Made using Flask, SQL, Tensorflow-Lite, React Native and Yolo, the application is capable of roughly estimating nutrition content in food using object detection and image processing. Flask Backend is used for data transfer and hosting image processing module. React Native app uses trained Yolo model capable of detecting food items in images. Image processing is done using OpenCV.',
        link: 'https://github.com/void-trinity/Calorie-Counter-Flask'
    },
    {
        title: 'Tweet Streamer',
        description: 'A simple streaming API that uses twitter stream to get latest feeds from search keywords and store them in mongodb database and uses NodeJS as backend server for the APIs. The API also has feature to get the results in sorted and filtered (search, sort by time, etc) and results can be exported as CSV.',
        link: 'https://github.com/void-trinity/Streamer-API'
    },
    {
        title: 'Byara Premier League',
        description: 'A react native application that uses mongodb database and node backend. During the COVID pandemic, one of the major sources of entertainment is online board games. This app serves as a leaderboard cum points tracker to make the events more competitive between friends and family. Keeps track of all the games played along with participants and their standings. Also has a global leaderboard showing the current rank of the players. Uses social login for authentication and JWT access token.',
        link: 'https://github.com/void-trinity/BPL-Backend'
    },
    {
        title: 'Chhattisgarh Tourism App',
        description: 'A cross platform app for getting information about tourist places in Chhattisgarh state. Has interactive features like review, comment, etc. Django is used for the backend while the application is developed in React Native. This application won the first prize in Appiness contest organized by IIIT Naya Raipur and is currently being reviewed by CG Government to replace it as the official tourism app of the state.',
        link: 'https://github.com/mohithk100/cgTourismApp'
    }
];

export default projects;