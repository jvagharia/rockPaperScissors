var app = angular.module("RPS", []);

app.controller("gameplay", ['$scope', '$http' , function ($scope) {
    
    //Set defaults    
    currentMode = "PlayerVsComputer";
    // Values descending order of winning. Crucial for winning algorithm. Rock < Paper < Scissors < #Rock# 
    $scope.values = ['Rock', 'Paper', 'Scissors'];
     
    $scope.game = {
        game_mode : "",
        ties : 0,
        player_one_wins : 0,
        player_two_wins : 0
    };
    
    $scope.player_one = {
        name : "",
        option : 0,
        option_image : "css/player-rock.png"
    };
    
    $scope.player_two = {
        name : "Computer",
        option : 0,
        option_image : "css/opp-rock.png"
    }
    
    $scope.getOption = function(player){
        if (player == "PlayerOne"){
            return $scope.values[$scope.player_one.option];
        }else {
            return $scope.values[$scope.player_two.option];
        }
    }
    
    $scope.getOptionImage = function(player){
        path = "";
        if (player == "PlayerOne"){
            if (this.player_one.option == 0){
                path = "css/player-rock.png";
            } else if (this.player_one.option == 1){
                path = "css/player-paper.png";
            } else if (this.player_one.option == 2){
                path = "css/player-scissors.png";
            }
        }else if (player == "PlayerTwo"){
            if (this.player_two.option == 0){
                path = "css/opp-rock.png";
            } else if (this.player_two.option == 1){
                path = "css/opp-paper.png";
            } else if (this.player_two.option == 2){
                path = "css/opp-scissors.png";
            }
        }
        return path;
            
    }     
       
    function resetMode() {
        $scope.player_one.option = 0;
        $scope.player_two.option = 0;
        $scope.game.ties = 0;
        $scope.game.player_one_wins = 0;
        $scope.game.player_two_wins = 0;
        $scope.scoreMessage = "";
        $scope.winnerMessage ="";
    }
    
	// Function to change each player label according to game mode..
	$scope.changeModes = function (mode) {        
        if (mode == "PlayerVsComputer") {
            resetMode();
            $(".pvc").show();
            $(".cvc").hide();
            this.player_one.name = "Player";
            this.player_two.name = "Computer";
            this.game.game_mode =  "Player VS Computer";
            this.gameInstructions = "Please select a option from the left side of the screen to play.";
        } else if (mode == "ComputerVsComputer"){
            resetMode();
            $(".pvc").hide();
            $(".cvc").show();
            this.player_one.name = "Computer 1";
            this.player_two.name= "Computer 2";
            this.game.game_mode = "Computer 1 VS Computer 2";
            this.gameInstructions = "Please press the play button below to play";
        } else  if (mode == "Random") {
			if (Math.random() < 0.5) {
                resetMode();
                $(".pvc").show();
                $(".cvc").hide();
                this.player_one.name = "Player";
                this.player_two.name = "Computer";
                this.game.game_mode =  "Player VS Computer";
                this.gameInstructions = "Please select a option from the left side of the screen to play.";
			} else {
                resetMode();
                $(".pvc").hide();
                $(".cvc").show();
                this.player_one.name = "Computer 1";
                this.player_two.name= "Computer 2";
                this.game.game_mode = "Computer 1 VS Computer 2";
                this.gameInstructions = "Please press the play button below to play";
			}
		}
	};
 
    $scope.changeModes(currentMode);
    
    // Algorithm to work out who wins, by looking at the pairs of values and their indexes..
    $scope.checkWinner = function (playerOne, playerTwo) {
        if (playerOne == playerTwo) {
			$scope.game.ties++;
			$scope.scoreMessage = "It's a Tie!!";
            $scope.winnerMessage = "";
		} else if ((playerOne  == (playerTwo - 1)) || ((playerOne == $scope.values.length - 1) && (playerTwo == 0))) {
			$scope.game.player_two_wins++;
			$scope.scoreMessage = $scope.values[playerTwo] + " beats " +  $scope.values[playerOne] + "!";
            $scope.winnerMessage = $scope.player_two.name + " wins!";
		} else if ((playerOne == (playerTwo + 1)) || ((playerTwo == $scope.values.length - 1) && ( playerOne == 0))) {
			$scope.game.player_one_wins++;
			$scope.scoreMessage = $scope.values[playerOne] + " beats " + $scope.values[playerTwo]  + "!";
            $scope.winnerMessage = $scope.player_one.name + " wins!";
		}
    }

    //Algorithm fired when user is playing Player Vs Computer and selects a option..
	$scope.selectop = function (option) {
        //
        $scope.player_one.option = option;
        $scope.player_two.option = Math.floor(Math.random() * $scope.values.length);
    
        $scope.checkWinner($scope.player_one.option, $scope.player_two.option);
	};
    
    //Algorithm fired when user is playing Computer Vs Computer and presses the play button..
    $scope.playRandom = function (){
        $scope.player_one.option = Math.floor(Math.random() * $scope.values.length);
        $scope.player_two.option = Math.floor(Math.random() * $scope.values.length);
        
        $scope.checkWinner($scope.player_one.option, $scope.player_two.option);
    };


}]);


