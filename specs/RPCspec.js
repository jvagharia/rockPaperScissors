describe("RPS", function() {
    
    beforeEach(module("RPS"));
    
    var $controller;

    beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
    
    it('If when player 1 picks rock and player 2 picks paper, player 2 wincount should increment', function () {
        //Empty scope i.e. player_two_wins should be 0.
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(0,1);
                
        expect($scope.game.player_two_wins).toEqual(1);
    });
    
    it('If when player 1 picks paper and player 2 picks scissors, player 2 wincount should increment', function () {
        //Empty scope i.e. player_two_wins should be 0.
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(1,2);
                
        expect($scope.game.player_two_wins).toEqual(1);
    });
    
    it('If when player 1 picks scissors and player 2 picks rock, player 2 wincount should increment', function () {
        //Empty scope i.e. player_two_wins should be 0.
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(2,0);
                
        expect($scope.game.player_two_wins).toEqual(1);
    });

    it('If when player 1 picks paper and player 2 picks rock, player 1 wincount should increment', function () {
        //Empty scope i.e. player_one_wins should be 0.        
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(1,0);
                
        expect($scope.game.player_one_wins).toEqual(1);
    });
    
    it('If when player 1 picks scissors and player 2 picks paper, player 1 wincount should increment', function () {
        //Empty scope i.e. player_one_wins should be 0.        
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(2,1);
                
        expect($scope.game.player_one_wins).toEqual(1);
    });
    
    it('If when player 1 picks rock and player 2 picks scissors, player 1 wincount should increment', function () {
        //Empty scope i.e. player_one_wins should be 0.        
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(0,2);
                
        expect($scope.game.player_one_wins).toEqual(1);
    });

    it('If when player 1 picks rock and player 2 picks rock, tie count should increment', function () {
        //Empty scope i.e. ties should be 0.        
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(0,0);
                
        expect($scope.game.ties).toEqual(1);
    });
    
    it('If when player 1 picks paper and player 2 picks paper, tie count should increment', function () {
        //Empty scope i.e. ties should be 0.                
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(1,1);
                
        expect($scope.game.ties).toEqual(1);
    });
    
    it('If when player 1 picks scissors and player 2 picks scissors, tie count should increment', function () {
        //Empty scope i.e. ties should be 0.                
        var $scope = {};
        var controller = $controller('gameplay', { $scope: $scope });
        
        // IDS -- Rock : 0, Paper: 1, Scissors: 2.
        $scope.checkWinner(2,2);
                
        expect($scope.game.ties).toEqual(1);
    });
});