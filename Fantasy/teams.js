//array object that holds all the teams in the leagues 
//stat categories are rankings or each stat 
//info gathered from teamrankings.com

//oppPPG = opponent points per game
//oppYPG = oppenent yards per game
//oppTDPG = opponent Tuchdowns per game
//oppRZAPG = oppenent Red Zone Atempts per Game        
//oppRZTDPG = oppenent Red Zone Touchdowns per game
//oppPLPG = oppenents plays per games
//oppATP = oppenents Average Time of Possession
//oppRATP = opponents Rushing Atempts per Game
//oppRYPG = opponents Rushing Yards Per Game
//oppRTDPG = opponents Rushing touchdowns per game
//oppYPRA = opponents Yards per Rush Atempt
//oppPAPG = opponents Pass atempts per game
//oppCPG = opponenets Completions per game
//oppIPG = opponents Incompletions per game
//oppPYPG = opponent passing yards per game
//oppYPC = opponents yards per completion
//oppPTDPG = opponents passing touchdowns per game
//oppATPR = opponents average team passer rating
//teamSPG = teams sacks per game

var teams = [
    { 
        "teamName": "Arizona Cardinals",
        "optionValue": "cardinals", 
        //All defense stats
        "oppPPG": 5,
        "oppYPG": 13,
        "oppTDPG": 5,
        "oppRZAPG": 6,
        "oppRZTDPG": 8,
        "oppPLPG": 21,
        "oppATP": 26,
        //RB defesne Stats
        "oppRATP": 25,
        "oppRYPG": 19,
        "oppRTDPG": 15,
        "oppYPRA": 11, 
        //QB, WR, TE Stats
        "oppPAPG": 11,
        "oppCPG": 20,
        "oppIPG": 27,
        "oppPYPG": 19,
        "oppYPC": 17,
        "oppPTDPG": 11,
        //QB only Stats
        "oppATPR": 23,
        "teamSPG": 14,
},
    {
        "teamName": "Atlanta Falcons",
        "optionValue": "falcons",
        "oppPPG": 27,
        "oppYPG": 21,
        "oppTDPG": 27,
        "oppRZAPG": 4, 
        "oppRZTDPG": 4,
        "oppPLPG": 13,
        "oppATP": 10,
        "oppRATP": 20,
        "oppRYPG": 14,
        "oppRTDPG": 1,
        "oppYPRA": 8,
        "oppPAPG": 8,
        "oppCPG": 17,
        "oppIPG": 29,
        "oppPYPG": 21,
        "oppYPC": 24,
        "oppPTDPG": 32,
        "oppATPR": 30,
        "teamSPG": 32,
},
    {
        "teamName": "Baltimore Ravens",
        "optionValue": "ravens",
        "oppPPG": 4,
        "oppYPG": 1,
        "oppTDPG": 6,
        "oppRZAPG": 3, 
        "oppRZTDPG": 14,
        "oppPLPG": 1,
        "oppATP": 9,
        "oppRATP": 13,
        "oppRYPG": 6,
        "oppRTDPG": 17,
        "oppYPRA": 4,
        "oppPAPG": 1,
        "oppCPG": 2,
        "oppIPG": 32,
        "oppPYPG": 1,
        "oppYPC": 1,
        "oppPTDPG": 3,
        "oppATPR": 12,
        "teamSPG": 20,
},
{
        "teamName": "Buffalo Bills",
        "optionValue": "bills",
        "oppPPG": 21,
        "oppYPG": 9,
        "oppTDPG": 3,
        "oppRZAPG": 2, 
        "oppRZTDPG": 1,
        "oppPLPG": 19,
        "oppATP": 24,
        "oppRATP": 29,
        "oppRYPG": 18,
        "oppRTDPG": 25,
        "oppYPRA": 9,
        "oppPAPG": 12,
        "oppCPG": 16,
        "oppIPG": 24,
        "oppPYPG": 23,
        "oppYPC": 27,
        "oppPTDPG": 17,
        "oppATPR": 24,
        "teamSPG": 11,
},
    {
        "teamName": "Carolina Panthers",
        "optionValue": "panthers",
        "oppPPG": 20,
        "oppYPG": 8,
        "oppTDPG": 19,
        "oppRZAPG": 5,
        "oppRZTDPG": 13,
        "oppPLPG": 8,
        "oppATP": 11,
        "oppRATP": 21,
        "oppRYPG": 27,
        "oppRTDPG": 30,
        "oppYPRA": 30,
        "oppPAPG": 3,
        "oppCPG": 8,
        "oppIPG": 30,
        "oppPYPG": 4,
        "oppYPC": 4,
        "oppPTDPG": 16,
        "oppATPR": 3,
        "teamSPG": 16,
},
    {
        "teamName": "Chicago Bears",
        "optionValue": "bears",
        "oppPPG": 24,
        "oppYPG": 17,
        "oppTDPG": 17,
        "oppRZAPG": 11,
        "oppRZTDPG": 15,
        "oppPLPG": 28,
        "oppATP": 30,
        "oppRATP": 31,
        "oppRYPG": 24,
        "oppRTDPG": 9,
        "oppYPRA": 15,
        "oppPAPG": 16,
        "oppCPG": 15,
        "oppIPG": 20,
        "oppPYPG": 12,
        "oppYPC": 10,
        "oppPTDPG": 26,
        "oppATPR": 16,
        "teamSPG": 17,
},
    {
        "teamName": "Cincinnati Bengals",
        "optionValue": "bengals",
        "oppPPG": 18,
        "oppYPG": 15,
        "oppTDPG": 16,
        "oppRZAPG": 32,
        "oppRZTDPG": 20,
        "oppPLPG": 20,
        "oppATP": 29,
        "oppRATP": 23,
        "oppRYPG": 29,
        "oppRTDPG": 10,
        "oppYPRA": 29,
        "oppPAPG": 17,
        "oppCPG": 10,
        "oppIPG": 4,
        "oppPYPG": 9,
        "oppYPC": 12,
        "oppPTDPG": 19,
        "oppATPR": 9,
        "teamSPG": 24,
},
    {
        "teamName": "Cleveland Browns",
        "optionValue": "browns",
        "oppPPG": 25,
        "oppYPG": 26,
        "oppTDPG": 22,
        "oppRZAPG": 24,
        "oppRZTDPG": 21,
        "oppPLPG": 29,
        "oppATP": 32,
        "oppRATP": 30,
        "oppRYPG": 25,
        "oppRTDPG": 21,
        "oppYPRA": 18,
        "oppPAPG": 19,
        "oppCPG": 14,
        "oppIPG": 10,
        "oppPYPG": 20,
        "oppYPC": 25,
        "oppPTDPG": 21,
        "oppATPR": 21,
        "teamSPG": 12,
},
    {
        "teamName": "Dallas Cowboys",
        "optionValue": "cowboys",
        "oppPPG": 13,
        "oppYPG": 10,
        "oppTDPG": 23,
        "oppRZAPG": 14,
        "oppRZTDPG": 24,
        "oppPLPG": 5,
        "oppATP": 2,
        "oppRATP": 15,
        "oppRYPG": 21,
        "oppRTDPG": 11,
        "oppYPRA": 23,
        "oppPAPG": 4,
        "oppCPG": 9,
        "oppIPG": 28,
        "oppPYPG": 11,
        "oppYPC": 16,
        "oppPTDPG": 28,
        "oppATPR": 25,
        "teamSPG": 15,
},
    {
        "teamName": "Denver Broncos",
        "optionValue": "broncos",
        "oppPPG": 12,
        "oppYPG": 14,
        "oppTDPG": 15,
        "oppRZAPG": 15,
        "oppRZTDPG": 22,
        "oppPLPG": 22,
        "oppATP": 22,
        "oppRATP": 28,
        "oppRYPG": 31,
        "oppRTDPG": 22,
        "oppYPRA": 28,
        "oppPAPG": 10,
        "oppCPG": 7,
        "oppIPG": 9,
        "oppPYPG": 7,
        "oppYPC": 11,
        "oppPTDPG": 15,
        "oppATPR": 5,
        "teamSPG": 10,
},
    {
        "teamName": "Detroit Lions",
        "optionValue": "lions",
        "oppPPG": 22,
        "oppYPG": 30,
        "oppTDPG": 26,
        "oppRZAPG": 27,
        "oppRZTDPG": 29,
        "oppPLPG": 23,
        "oppATP": 14,
        "oppRATP": 3,
        "oppRYPG": 11, 
        "oppRTDPG": 7,
        "oppYPRA": 20,
        "oppPAPG": 31,
        "oppCPG": 31,
        "oppIPG": 6,
        "oppPYPG": 31,
        "oppYPC": 22,
        "oppPTDPG": 31,
        "oppATPR": 29,
        "teamSPG": 19,
},
    {
        "teamName": "Green Bay Packers",
        "optionValue": "packers",
        "oppPPG": 11,
        "oppYPG": 18,
        "oppTDPG": 14,
        "oppRZAPG": 20,
        "oppRZTDPG": 10,
        "oppPLPG": 24,
        "oppATP": 20,
        "oppRATP": 17,
        "oppRYPG": 1,
        "oppRTDPG": 23,
        "oppYPRA": 1,
        "oppPAPG": 24,
        "oppCPG": 21,
        "oppIPG": 8,
        "oppPYPG": 24,
        "oppYPC": 26,
        "oppPTDPG": 14,
        "oppATPR": 14,
        "teamSPG": 9,
},
    {
        "teamName": "Houston Texans",
        "optionValue": "texans",
        "oppPPG": 3,
        "oppYPG": 4,
        "oppTDPG": 11,
        "oppRZAPG": 8,
        "oppRZTDPG": 18,
        "oppPLPG": 4,
        "oppATP": 3,
        "oppRATP": 7,
        "oppRYPG": 10,
        "oppRTDPG": 20,
        "oppYPRA": 14,
        "oppPAPG": 6,
        "oppCPG": 4,
        "oppIPG": 18,
        "oppPYPG": 8,
        "oppYPC": 21,
        "oppPTDPG": 13,
        "oppATPR": 8,
        "teamSPG": 1,
},
    {
        "teamName": "Indianapolis Colts",
        "optionValue": "colts",
        "oppPPG": 32,
        "oppYPG": 29,
        "oppTDPG": 32,
        "oppRZAPG": 21,
        "oppRZTDPG": 32,
        "oppPLPG": 16,
        "oppATP": 19,
        "oppRATP": 14,
        "oppRYPG": 22,
        "oppRTDPG": 27,
        "oppYPRA": 24,
        "oppPAPG": 23,
        "oppCPG": 30,
        "oppIPG": 31,
        "oppPYPG": 30,
        "oppYPC": 18,
        "oppPTDPG": 27,
        "oppATPR": 31,
        "teamSPG": 25,
},
    {
        "teamName": "Jacksonville Jaguars",
        "optionValue": "jaguars",
        "oppPPG": 30,
        "oppYPG": 6,
        "oppTDPG": 20,
        "oppRZAPG": 22,
        "oppRZTDPG": 17,
        "oppPLPG": 10,
        "oppATP": 13,
        "oppRATP": 16,
        "oppRYPG": 16,
        "oppRTDPG": 13,
        "oppYPRA": 17,
        "oppPAPG": 13,
        "oppCPG": 11,
        "oppIPG": 15,
        "oppPYPG": 10,
        "oppYPC": 13,
        "oppPTDPG": 25,
        "oppATPR": 17,
        "teamSPG": 26,
},
    {
        "teamName": "Kansas City Chiefs",
        "optionValue": "chiefs",
        "oppPPG": 16,
        "oppYPG": 25,
        "oppTDPG": 24,
        "oppRZAPG": 31,
        "oppRZTDPG": 27,
        "oppPLPG": 26,
        "oppATP": 27,
        "oppRATP": 27,
        "oppRYPG": 30,
        "oppRTDPG": 28,
        "oppYPRA": 26,
        "oppPAPG": 18,
        "oppCPG": 24,
        "oppIPG": 23,
        "oppPYPG": 14,
        "oppYPC": 7,
        "oppPTDPG": 12,
        "oppATPR": 18,
        "teamSPG": 23,
},
   {
        "teamName": "Los Angeles Rams",
        "optionValue": "rams",
        "oppPPG": 7,
        "oppYPG": 12,
        "oppTDPG": 30,
        "oppRZAPG": 26,
        "oppRZTDPG": 31,
        "oppPLPG": 31,
        "oppATP": 21,
        "oppRATP": 32,
        "oppRYPG": 28,
        "oppRTDPG": 31,
        "oppYPRA": 13,
        "oppPAPG": 14,
        "oppCPG": 13,
        "oppIPG": 21,
        "oppPYPG": 6,
        "oppYPC": 3,
        "oppPTDPG": 8,
        "oppATPR": 13,
        "teamSPG": 31,
},
    {
        "teamName": "Miami Dolphins",
        "optionValue": "dolphins",
        "oppPPG": 14,
        "oppYPG": 19,
        "oppTDPG": 8,
        "oppRZAPG": 9,
        "oppRZTDPG": 6,
        "oppPLPG": 32,
        "oppATP": 28,
        "oppRATP": 26,
        "oppRYPG": 20,
        "oppRTDPG": 3,
        "oppYPRA": 12,
        "oppPAPG": 29,
        "oppCPG": 27,
        "oppIPG": 5,
        "oppPYPG": 16,
        "oppYPC": 5,
        "oppPTDPG": 9,
        "oppATPR": 11,
        "teamSPG": 8,
},
    {
        "teamName": "Minnesota Vikings",
        "optionValue": "vikings",
        "oppPPG": 6,
        "oppYPG": 11,
        "oppTDPG": 9,
        "oppRZAPG": 19,
        "oppRZTDPG": 19,
        "oppPLPG": 18,
        "oppATP": 17,
        "oppRATP": 9,
        "oppRYPG": 4,
        "oppRTDPG": 2,
        "oppYPRA": 6,
        "oppPAPG": 26,
        "oppCPG": 22,
        "oppIPG": 3,
        "oppPYPG": 18,
        "oppYPC": 14,
        "oppPTDPG": 23,
        "oppATPR": 15,
        "teamSPG": 18,
},
    {
        "teamName": "New England Patriots",
        "optionValue": "patriots",
        "oppPPG": 15,
        "oppYPG": 16,
        "oppTDPG": 21,
        "oppRZAPG": 18,
        "oppRZTDPG": 26,
        "oppPLPG": 9,
        "oppATP": 7,
        "oppRATP": 4,
        "oppRYPG": 15,
        "oppRTDPG": 24,
        "oppYPRA": 25,
        "oppPAPG": 21,
        "oppCPG": 19,
        "oppIPG": 19,
        "oppPYPG": 17,
        "oppYPC": 15,
        "oppPTDPG": 22,
        "oppATPR": 22,
        "teamSPG": 7,
},
    {
        "teamName": "New Orleans Saints",
        "optionValue": "saints",
        "oppPPG": 23,
        "oppYPG": 31,
        "oppTDPG": 25,
        "oppRZAPG": 28,
        "oppRZTDPG": 23,
        "oppPLPG": 15,
        "oppATP": 18,
        "oppRATP": 18,
        "oppRYPG": 32,
        "oppRTDPG": 32,
        "oppYPRA": 32,
        "oppPAPG": 22,
        "oppCPG": 18,
        "oppIPG": 14,
        "oppPYPG": 26,
        "oppYPC": 29,
        "oppPTDPG":10,
        "oppATPR": 20,
        "teamSPG": 30,
},
    {
        "teamName": "New York Giants",
        "optionValue": "giants",
        "oppPPG": 9,
        "oppYPG": 13,
        "oppTDPG": 4,
        "oppRZAPG": 17,
        "oppRZTDPG": 16, 
        "oppPLPG": 30,
        "oppATP": 31,
        "oppRATP": 22,
        "oppRYPG": 17,
        "oppRTDPG": 19,
        "oppYPRA": 10,
        "oppPAPG": 30,
        "oppCPG": 23,
        "oppIPG": 1,
        "oppPYPG": 13,
        "oppYPC": 6,
        "oppPTDPG": 7,
        "oppATPR": 4,
        "teamSPG": 29,
},
    {
        "teamName": "New York Jets",
        "optionValue": "jets",
        "oppPPG": 26,
        "oppYPG": 23,
        "oppTDPG": 18,
        "oppRZAPG": 16,
        "oppRZTDPG": 5,
        "oppPLPG": 7,
        "oppATP": 4,
        "oppRATP": 5,
        "oppRYPG": 9,
        "oppRTDPG": 12,
        "oppYPRA": 16,
        "oppPAPG": 7,
        "oppCPG": 12,
        "oppIPG": 26,
        "oppPYPG": 25,
        "oppYPC": 32,
        "oppPTDPG": 18,
        "oppATPR": 28,
        "teamSPG": 3,
},
    {
        "teamName": "Oakland Raiders",
        "optionValue": "raiders",
        "oppPPG": 31,
        "oppYPG": 32,
        "oppTDPG": 28,
        "oppRZAPG": 30,
        "oppRZTDPG": 28,
        "oppPLPG": 17,
        "oppATP": 16,
        "oppRATP": 10,
        "oppRYPG": 13,
        "oppRTDPG": 4,
        "oppYPRA": 19,
        "oppPAPG": 27,
        "oppCPG": 28,
        "oppIPG": 12,
        "oppPYPG": 32,
        "oppYPC": 31,
        "oppPTDPG": 30,
        "oppATPR": 32,
        "teamSPG": 22,
},
    {
        "teamName": "Philadelphia Eagles",
        "optionValue": "eagles",
        "oppPPG": 2,
        "oppYPG": 5,
        "oppTDPG": 5,
        "oppRZAPG": 7,
        "oppRZTDPG": 7,
        "oppPLPG": 2,
        "oppATP": 1,
        "oppRATP": 8,
        "oppRYPG": 23,
        "oppRTDPG": 18,
        "oppYPRA": 31,
        "oppPAPG": 2,
        "oppCPG": 1,
        "oppIPG": 11,
        "oppPYPG": 5,
        "oppYPC": 30,
        "oppPTDPG": 1,
        "oppATPR": 2,
        "teamSPG": 6,
},
    {
        "teamName": "Pittsburg Steelers",
        "optionValue": "steelers",
        "oppPPG": 8,
        "oppYPG": 24,
        "oppTDPG": 7,
        "oppRZAPG": 25,
        "oppRZTDPG": 9,
        "oppPLPG": 6,
        "oppATP": 8,
        "oppRATP": 1,
        "oppRYPG": 3,
        "oppRTDPG": 14,
        "oppYPRA": 22,
        "oppPAPG": 28,
        "oppCPG": 29,
        "oppIPG": 16,
        "oppPYPG": 28,
        "oppYPC": 20,
        "oppPTDPG": 6,
        "oppATPR": 6,
        "teamSPG": 27,
},
    {
        "teamName": "San Diego Chargers",
        "optionValue": "chargers",
        "oppPPG": 19,
        "oppYPG": 27,
        "oppTDPG": 29,
        "oppRZAPG": 29,
        "oppRZTDPG": 30,
        "oppPLPG": 27,
        "oppATP": 6,
        "oppRATP": 2,
        "oppRYPG": 12,
        "oppRTDPG": 26,
        "oppYPRA": 21,
        "oppPAPG": 32,
        "oppCPG": 32,
        "oppIPG": 13,
        "oppPYPG": 29,
        "oppYPC": 9,
        "oppPTDPG": 20,
        "oppATPR": 19,
        "teamSPG": 5,

},
    {
        "teamName": "San Francisco 49ers",
        "optionValue": "49ers",
        "oppPPG": 17,
        "oppYPG": 2,
        "oppTDPG": 1,
        "oppRZAPG": 1,
        "oppRZTDPG": 2,
        "oppPLPG": 11,
        "oppATP": 12,
        "oppRATP": 23,
        "oppRYPG": 8,
        "oppRTDPG": 5,
        "oppYPRA": 5,
        "oppPAPG": 15,
        "oppCPG": 5,
        "oppIPG": 2,
        "oppPYPG": 2,
        "oppYPC": 2,
        "oppPTDPG": 5,
        "oppATPR": 1,
        "teamSPG": 13,
},
    {
        "teamName": "Seattle Seahawks",
        "optionValue": "seahawks",
        "oppPPG": 1,
        "oppYPG": 3,
        "oppTDPG": 2,
        "oppRZAPG": 13,
        "oppRZTDPG": 11,
        "oppPLPG": 3,
        "oppATP": 5,
        "oppRATP": 6,
        "oppRYPG": 5,
        "oppRTDPG": 16,
        "oppYPRA": 7,
        "oppPAPG": 5,
        "oppCPG": 3,
        "oppIPG": 17,
        "oppPYPG": 3,
        "oppYPC": 8,
        "oppPTDPG": 4,
        "oppATPR": 7,
        "teamSPG": 2,
},
    {
        "teamName": "Tampa Bay Buccaneers",
        "optionValue": "buccaneers",
        "oppPPG": 28,
        "oppYPG": 22,
        "oppTDPG": 12,
        "oppRZAPG": 23,
        "oppRZTDPG": 12,
        "oppPLPG": 14,
        "oppATP": 23,
        "oppRATP": 11,
        "oppRYPG": 2,
        "oppRTDPG": 8,
        "oppYPRA": 3,
        "oppPAPG": 25,
        "oppCPG": 6,
        "oppIPG": 22,
        "oppPYPG": 27,
        "oppYPC": 23,
        "oppPTDPG": 24,
        "oppATPR": 27,
        "teamSPG": 4,
},
    {
        "teamName": "Tennessee Titans",
        "optionValue": "titans",
        "oppPPG": 10,
        "oppYPG": 7,
        "oppTDPG": 13,
        "oppRZAPG": 10,
        "oppRZTDPG": 3,
        "oppPLPG": 12,
        "oppATP": 15,
        "oppRATP": 19,
        "oppRYPG": 7,
        "oppRTDPG": 6,
        "oppYPRA": 2,
        "oppPAPG": 9,
        "oppCPG": 6,
        "oppIPG": 7,
        "oppPYPG": 15,
        "oppYPC": 28,
        "oppPTDPG": 2,
        "oppATPR": 10,
        "teamSPG": 28,
},
    {
        "teamName": "Washington Redskins",
        "optionValue": "redskins",
        "oppPPG": 29,
        "oppYPG": 28,
        "oppTDPG": 31,
        "oppRZAPG": 12,
        "oppRZTDPG": 5,
        "oppPLPG": 25,
        "oppATP": 25,
        "oppRATP": 24,
        "oppRYPG": 26,
        "oppRTDPG": 29,
        "oppYPRA": 27,
        "oppPAPG": 20,
        "oppCPG": 26,
        "oppIPG": 25,
        "oppPYPG": 22,
        "oppYPC": 19,
        "oppPTDPG": 29,
        "oppATPR": 26,
        "teamSPG": 21,
}
];

