# rockPaperScissors
Simple Angular Rock, Paper, Scissors game

### Installation

Please make sure you have node.js installed and run npm install.

```sh
$ git clone https://github.com/jvagharia/rockPaperScissors.git
```

Open index.html in /app folder to run the app.

### Instructions to play

Select different game modes by picking "Player Vs Computer", "Computer Vs Computer" or "Random" (which will pick a random mode from the former options).

When playing "Player Vs Computer", click any of the left-bottom buttons to highlight your choice, and then the scoreboard will update accordingly, use these buttons to keep on playing in this mode.

When playing "Computer Vs Computer", press the "Play!" button in middle of the screen to simulate a match, the scoreboard will update accordingly.

Please note: all scores will be cleared when the game mode is changed.

### Testing

Please make sure you have installed the following packages:

```sh
$ sudo npm install -g jasmine-core
$ sudo npm install -g karma-jasmine
$ sudo npm install -g karma-chrome-launcher
$ sudo npm install -g karma-firefox-launcher
```

Browse to root directory of rockPaperScissors (Same level as karma.conf.js) and run the following command:

```sh
$ karma start
```

This will display all jasmine tests in the /specs folder. These 9 tests look at the checkWinner() function and tests different combination of options. 