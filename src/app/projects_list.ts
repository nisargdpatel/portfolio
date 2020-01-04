import { Project } from './project';

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Connect 4",
        intro: "Simple two player connect 4 game that is played in 7 column and 6 row grid.",
        description: "This is an implementation of a GUI and gameplay for a very popular two-player game, Connect Four. Each of the players has either red or green colored disks that he/she will drop down into 7 column by 6 row grid. The initial discs will go to the bottom. A disc may only be placed either onto the bottom or on top of another disc (or either color).",
        date: "Completed on 5 July, 2019",
        status: "Complete",
        imgsrc: "assets/connect4.PNG",
        source: "https://bitbucket.org/nisargp1999/connect-four/src/master/",
        images: String[2] = ["assets/connect4_pics/1.PNG", "assets/connect4_pics/2.PNG", "assets/connect4_pics/3.PNG"]
    },
    {
        id: 2,
        name: "Yahtzee",
        intro: "Yahtzee is a dice game where you can collect different scores after rolling 5 dice.",
        description: "This is a GUI Yahtzee game that allows you to play a solo dice game. To score points, use a scoring category to determine which combination of rolls produces most points. You may only roll for 3 times. Each time, you can choose which dice you want to keep on the side and which dice you want to roll again. Game keeps running until all scoring category is filled. ",
        date: "Completed on 6 February, 2019",
        status: "Complete",
        imgsrc: "assets/yahtzee.jpg",
        source: "https://bitbucket.org/nisargp1999/yahtzee/src/master/",
        images: String[0] = ["assets/yahtzee_pics/1.PNG", "assets/yahtzee_pics/2.PNG"]
    },
    {
        id: 3,
        name: "Snake Game",
        intro: "A classic game of snake growing its size by eating apples and dying when bumping itself or walls.",
        description: "...description...",
        date: "Completed on 23 April, 2019",
        status: "Complete",
        imgsrc: "assets/snake.png",
        source: "https://bitbucket.org/nisargp1999/snake_game/src/master/",
        images: String[0] = [
            "assets/snake_pics/1.PNG", 
            "assets/snake_pics/2.PNG", 
            "assets/snake_pics/3.PNG", 
            "assets/snake_pics/4.PNG", 
            "assets/snake_pics/5.PNG", 
            "assets/snake_pics/6.PNG", 
            "assets/snake_pics/7.PNG", 
            "assets/snake_pics/8.PNG", 
            "assets/snake_pics/9.PNG", 
            "assets/snake_pics/10.PNG"]
    },
    {
        id: 4,
        name: "Brains",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/brains.jpg",
        source: "https://github.com/nisargdpatel",
        images: String[0] = []
    },
    {
        id: 5,
        name: "Delivery System",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/delivery_system.png",
        source: "https://bitbucket.org/nisargp1999/delivery-system/src/master/",
        images: String[0] = []
    },
    {
        id: 6,
        name: "Inventory Management",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/inventory_management.png",
        source: "https://github.com/nisargdpatel/Inventory_Management",
        images: String[0] = []
    },
    {
        id: 7,
        name: "Trip Tracker",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/trip_tracker.PNG",
        source: "https://bitbucket.org/nisargp1999/trip-tracker/src/master/",
        images: String[0] = []
    },
    {
        id: 8,
        name: "Registration Database",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/registration_database.png",
        source: "https://github.com/nisargdpatel/CIS297_Database_Project",
        images: String[0] = []
    },
    {
        id: 9,
        name: "Lexical Analyzer",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/lexical_analyzer.png",
        source: "https://bitbucket.org/nisargp1999/lexical-analyzer/src/master/",
        images: String[0] = []
    },
    {
        id: 10,
        name: "Reinforcement Learning",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/reinforcement_learning.png",
        source: "https://bitbucket.org/nisargp1999/reinforcement-learning/src/master/",
        images: String[0] = []
    },
    {
        id: 11,
        name: "Tax Calculator",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/calculator.png",
        source: "https://bitbucket.org/nisargp1999/tax-calculator/src/master/",
        images: String[0] = []
    },
    {
        id: 12,
        name: "Seat Reservation System",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/seat_reservation.png",
        source: "https://bitbucket.org/nisargp1999/seat-reservation-system/src/master/",
        images: String[0] = []
    },
    {
        id: 13,
        name: "Payment Calculator",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/calculator.png",
        source: "https://bitbucket.org/nisargp1999/employee-payment-calculator/src/master/",
        images: String[0] = []
    },
    {
        id: 14,
        name: "Predictive Parsing",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/predictive_parsing.jpg",
        source: "https://bitbucket.org/nisargp1999/predictive-parsing/src/master/",
        images: String[0] = []
    },
    {
        id: 15,
        name: "BST Implementation",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/bst.png",
        source: "https://bitbucket.org/nisargp1999/bst-implementation/src/master/",
        images: String[0] = []
    },
    {
        id: 16,
        name: "UML Modeling",
        intro: "",
        description: "...description...",
        date: "...date...",
        status: "Complete",
        imgsrc: "assets/uml_modeling.png",
        source: "https://bitbucket.org/nisargp1999/uml-modeling/src/master/",
        images: String[0] = []
    }
]