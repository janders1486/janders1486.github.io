var players = {};
var HTML = "";
var QBDivs = 0;
var RBDivs = 0;
var WRDivs = 0;
var TEDivs = 0;

//function to update the page based on the information placed in the form. 
$('.playerForm').submit(function(event){
    $(".playerInfo").each(function() {
        players[this.name] = $(this).val();
    });
    if(players.playerName == ""){
        alert("Please enter a players name");
    } else {
    setPlayer(players.playerName, players.playerPosition, players.team);
    $(".deleteButton").click(function(){
            $(this).parent().parent().empty();
    });
    event.preventDefault();
    }
});

//function to gather all the data needed to update the page.
function setPlayer(playerName, playerPosition, playerTeam){
    if(playerPosition === "QB"){
        if($("#QB1").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#QB1").append(HTML);
        } else if ($("#QB2").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#QB2").append(HTML);
        }else {
            alert("Please Delete on QB to add another");
        }
    } else if(playerPosition === "RB"){
         if($("#RB1").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#RB1").append(HTML);
        } else if ($("#RB2").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#RB2").append(HTML);
        }else {
            alert("Please Delete on RB to add another");
        }
    } else if(playerPosition === "WR"){
         if($("#WR1").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#WR1").append(HTML);
        } else if ($("#WR2").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#WR2").append(HTML);
        }else {
            alert("Please Delete on WR to add another");
        }
    } else if(playerPosition === "TE"){
         if($("#TE1").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#TE1").append(HTML);
        } else if ($("#TE2").text() == ""){
            HTML = setPlayerStats(playerName, playerPosition, playerTeam);
            $("#TE2").append(HTML);
        }else {
            alert("Please Delete on TE to add another");
        }
    }
}

//uses the teams array to create the options for the team selector
function setTeamOption(){
    for (var i = 0; i < teams.length; i++){
        var newOption = $('<option/>');
        newOption.text(teams[i].teamName);
        newOption.attr('value', teams[i].optionValue);
        $('#oppTeams').append(newOption);
    }
}

function setPlayerStats(player, position, team){
    var startScore = 100 - setScore(team, position);
    var playerUpdate = "";
    playerUpdate += "<h4 style='float:right; text-align:center'>Start Rating<br>" + startScore + "<br><input type='button' class='deleteButton btn btn-default' value='Delete'></h4>";
    playerUpdate += "<p>Player: " + player + " <span class='smallText'>" + team + " -" + position + "</span></p>";
    playerUpdate += "<p>Weather Forcast: " + setForcast(team) + "</p>";
    playerUpdate += "<p>Opponent: " + setOppTeam(team) + "</p>";
    playerUpdate += "</div>";
    return playerUpdate;
}

$(document).ready(function(){
    setTeamOption();
});




