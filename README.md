# Number Guessing Game (.v2)

## Description
This is a simple *Number Guessing Game* where users attempt to match their guess with a computer-generated number. Depending on the selected difficulty level, players may need to guess a number between *1 and 10*, *1 and 25*, or *1 and 50*.

Different feedback will be given throughout the game, including the loss of lives, accumulation of points, and more.

## Table of Contents
- [Number Guessing Game (.v2)](#number-guessing-game-v2)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Origins and Evolution](#origins-and-evolution)
  - [How to use](#how-to-use)
    - [1. Access the game](#1-access-the-game)
    - [2. Choose difficulty level](#2-choose-difficulty-level)
    - [3. Make your guess](#3-make-your-guess)
    - [4. Get it right or get it wrong](#4-get-it-right-or-get-it-wrong)
    - [5. Game Over... Play again](#5-game-over-play-again)
  - [Features](#features)
  - [Tested Compatibility](#tested-compatibility)
    - [Browsers](#browsers)
    - [Devices](#devices)
  - [Customization](#customization)
  - [Contributions](#contributions)
  - [License](#license)
    - [MIT License](#mit-license)
      - [Crediting us](#crediting-us)
    - [Disclaimer](#disclaimer)
  - [Attributions](#attributions)

## Origins and Evolution
This project initially began as an opportunity to practice jQuery. I decided to take the basic and straightforward [JavaScript-Practice version](https://github.com/SaraFreitas02/NumGuessGame.js-practice) of this game and elevate it, hence the "*v2*" in the project's name.

My goal was to make the game more engaging and dynamic, and this journey allowed me to explore CSS animations for the first time.

The result is a game that, despite its simplicity, is both addictive and visually captivating.

## How to use
### 1. Access the game
To access the game, open the `index.html` file in your browser engine or click [here](https://sarafreitas02.github.io/Number-Guessing-Game.v2/).

### 2. Choose difficulty level
When the game loads, it will show the game's name along with three buttons, each representing a different difficulty level:

- **Easy:** Guess numbers from *1 to 10.*
- **Medium:** Guess numbers from *1 to 25.*
- **Hard:** Guess numbers from *1 to 50.*

<br>
<br>
<br>

![Game Page](/Images/Game%20Ilustration/Page%20Load.png)

<br>
<br>
<br>

### 3. Make your guess
Once you've chosen a difficulty level, the page will transform. It will feature an empty input field and a button labeled "Guess." Additionally, you'll find 10 hearts and points. The display depends on the device.

<br>
<br>
<br>

![Start Game](Images/Game%20Ilustration/Start%20display.png)

<br>
<br>
<br>

- To participate, simply enter your guess into the field and click the "Guess" button.

<br>
<br>
<br>

![Make a Guess](/Images/Game%20Ilustration/Guess.png)

<br>
<br>
<br>
  
- The game will promptly inform you whether your guess was correct or not.

<br>
<br>
<br>

![Win or loss alert](/Images/Game%20Ilustration/Win%20or%20loss.png)

<br>
<br>
<br>

### 4. Get it right or get it wrong
If you correctly guess a number, you'll earn a specific number of points based on the difficulty level you selected at the beginning:

- **Easy:** You'll receive *10 points* for each correct guess.
- **Medium:** You'll earn *20 points* for each correct guess.
- **Hard:** You'll gain *30 points* for each correct guess.

Your points will accumulate throughout the game.

<br>
<br>
<br>

![Points](Gifs/Pts%20gif.gif)

<br>
<br>
<br>

However, if you make an incorrect guess, you'll **lose a heart** (life). You start with a total of 10 lives.

<br>
<br>
<br>

![Lose a heart](Gifs/Heart%20Gif.gif)

<br>
<br>
<br>

### 5. Game Over... Play again
If you **run out of lives**, the game will come to an end, and a *'Game Over'* page will appear. Here, you can view the total number of points you earned during the round.

To start a new game, simply **click the *'Play Again'*** button displayed on the *'Game Over'* page. This will take you back to the beginning, where you can once again choose a difficulty level.

<br>
<br>
<br>

![Game over page](Images/Game%20Ilustration/Game%20over%20page.png)

<br>
<br>
<br>

## Features
- Various animations throughout the game: on loading, changing content, guessing, losing lives...
- Alert messages to let you know if your input is valid.
- Various changes of content without changing the page.
- Visual feedback provided not only through animations but also via interactive buttons.
- Cross-device compatibility: desktop, tablet and phone.

## Tested Compatibility 
*Last updated: 04-09-2023*
### Browsers
The game was tested and works as expected in the following browsers and versions:
- **Google Chrome** *116.0.5845.141 (Official Build) (64-bit)*
- **Mozilla Firefox** *117.0 (64-bit)*
- **Microsoft Edge** *116.0.1938.69 (Official build) (64-bit)*
- **Opera** *101.0.4843.43*
- **Safari** *IOS 16.6*
  
<br>
<br>
<br>

![Browser Testing](/Images/Browsers%20Testing/browsers.png)

<br>
<br>
<br>

### Devices
The game is built to work in the following devices:
- **Desktop Computer**
- **Tablet**
- **Mobile Phone**

The game was ran in all three and worked as expected.

## Customization
Please feel free to incorporate this code into your projects while adhering to the [license](LICENSE) it is distributed under. You're welcome to customize it to your heart's content—alter backgrounds, displays, colors, and more. The sky is the limit!

## Contributions
Contributions are encouraged! If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add a new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

### MIT License

This project is licensed under the MIT License, which means you are free to use, modify, and distribute the code as long as you include the original [license text](LICENSE).

#### Crediting us

Although this project is under the MIT License (as stated above), we would greatly appreciate it if you could:

- Mention any changes you've made to the code.
- Provide a link to this project's repository.

Your support and collaboration mean a lot to us! For more clarification, visit the [Crediting Us file](Crediting-us.md) provided in our project.

### Disclaimer

Please be aware that while this project is provided under the MIT License, it is your responsibility to ensure that your usage complies with all applicable laws and regulations.

Feel free to use this project for your needs or contribute to its development.

For more details, refer to the [MIT License](LICENSE) file in this repository.

## Attributions
This game uses *free icons* from [**FontAwesome**](https://fontawesome.com/) that are generously provided under an [**MIT License**](https://fontawesome.com/).

For more details regarding attributions or copyright notices visit the [Attributions File](Attributions.md) on this repository.

