
//sets the opposing team based on the selection chosen
function setOppTeam(playerTeam){
    var opposingTeam = "";
    for(var i = 0; i < schedule.length; i++){
        if(playerTeam === schedule[i].home){
            opposingTeam = schedule[i].away;
        } else if(playerTeam === schedule[i].away){
            opposingTeam = schedule[i].home;
        }
    }
    return opposingTeam.charAt(0).toUpperCase() + opposingTeam.slice(1);
}

//using the stats from the teams array it will return statScore to be used later
function getScore(stat) {
	var statScore = 0;
	if(stat > 0 && stat <= 6){
		statScore += 5;
	} else if (stat >= 7 && stat <= 12) {
		statScore += 4;
	} else if (stat >= 13 && stat <= 18) {
		statScore += 3;
	} else if (stat >= 19 && stat <= 24) {
		statScore += 2;
	} else if (stat >= 25) {
		statScore += 1;
	}
	return statScore;
}

//uses the oppTeam function to get the team to evalute for a score
//using the team to itterate through the teams array to find evaluating team
//oncefound uses all the stat categories from the object to spit an evaluated score
function setScore(playerTeam, position){
	var team = setOppTeam(playerTeam).toLowerCase();
	var defScore = 0;
	for(var i = 0; i < teams.length; i++){
        if(team === teams[i].optionValue){
            defScore += getScore(teams[i].oppPPG);
            defScore += getScore(teams[i].oppYPG);
            defScore += getScore(teams[i].oppTDPG);
            defScore += getScore(teams[i].oppRZAPG);
            defScore += getScore(teams[i].oppRZTDPG);
            defScore += getScore(teams[i].oppPLPG);
            defScore += getScore(teams[i].oppATP);
            if(position == "RB"){
                defScore += getScore(teams[i].oppRATP);
                defScore += getScore(teams[i].oppRYPG);
                defScore += getScore(teams[i].oppRTDPG);
                defScore += getScore(teams[i].oppYPRA);
            }
            else if (position == "WR" || position == "TE"){
                defScore += getScore(teams[i].oppPAPG);
                defScore += getScore(teams[i].oppCPG);
                defScore += getScore(teams[i].oppIPG);
                defScore += getScore(teams[i].oppPYPG);
                defScore += getScore(teams[i].oppYPC);
                defScore += getScore(teams[i].oppPTDPG);
            } else if (position == "QB"){
                defScore += getScore(teams[i].oppPAPG);
                defScore += getScore(teams[i].oppCPG);
                defScore += getScore(teams[i].oppIPG);
                defScore += getScore(teams[i].oppPYPG);
                defScore += getScore(teams[i].oppYPC);
                defScore += getScore(teams[i].oppPTDPG);
                defScore += getScore(teams[i].oppATPR);
                defScore += getScore(teams[i].teamSPG);
            }
        }
    }
    return defScore;
}

//iterates through the schedule array using the team inputed by user to get the games forcast
function setForcast(playerTeam){
    var weather = "";
    for(var i = 0; i < schedule.length; i++){
        if(playerTeam === schedule[i].home || playerTeam === schedule[i].away){
            weather = schedule[i].weather;
        }
    }
    return weather.charAt(0).toUpperCase() + weather.slice(1);
}