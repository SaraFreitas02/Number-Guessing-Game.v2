$(document).ready(function () { //when document ready
    //Variables
     const gameTitle = $("#gameTitle"); //select game title
     const p = $("#chooseBtnP"); //select choose button paragraph

     const chooseNumberText = $("#chooseNumberText"); //select choose number paragraph 
     const input = $("input"); //select input
     const guessBtn = $("#guessBtn"); //select guess button

     const numberGeneratedText = $("#numberGeneratedText"); //select number generated paragraph
     const numberGenerated = $("#numberGenerated"); //select number generated

     const playAgain = $("#playAgain"); //select play again button

     const difficultyButtons = $("button").not(guessBtn).not(playAgain); //select difficulty buttons

     const alertMsg = $("#alertMessages"); //select alert messages paragraph

     const livesLost = $("#livesLost"); //select lives lost icons
     const livesCurrent = $("#livesCurrent"); //select current lives icons
     let livesCurrentIndex = 0; //set lives index

     const ptsCount = $("#ptsCount"); //select points count
     const ptsArea = $("#ptsArea"); //select points display

     const gameOverPage = $("#gameOverPage"); //select game over page
     const totalPts = $("#totalPoints"); //select total points display

    //Hide all elements that should not appear on load 
     gameTitle.hide();
     p.hide();
     difficultyButtons.hide();
     chooseNumberText.hide();
     input.hide();
     guessBtn.hide();
     numberGeneratedText.hide();
     numberGenerated.hide();
     alertMsg.hide();
     livesLost.hide();
     livesCurrent.hide();
     ptsArea.hide();
     gameOverPage.hide();
    
    //Update window if page opened on mobile 
     if (window.innerWidth < 768){

        //update gaming area
        const gamingArea = $("#gamingArea");
          //change width to 50% instead of 100%
          gamingArea.removeClass("width100");
          gamingArea.addClass("width50");

        //update initial page
        const initialPage = $("#initialPage");
        initialPage.addClass("width100"); //set width to 100%

        //update game title
        gameTitle.removeClass("width33"); //remove width restriction

        //update gaming header
        const gamingHeader = $("#gamingHeader");
        gamingHeader.removeClass(); //remove all classes to 'hide it'

        //update hearts and pts display
        const heartsAndPts = $("#heartsAndPts");
        const heartsAndPts2 = $("#heartsAndPts2");
          //remove lives and points from default parent
          heartsAndPts.empty();

          //append lives and point to new parent
          heartsAndPts2.append(livesLost);
          heartsAndPts2.append(livesCurrent);
          heartsAndPts2.append(ptsArea);

        //update lives lost display
        livesLost.removeClass("just-cont-flex-end");
        livesLost.addClass("relative-position");

        //update current lives display
        livesCurrent.removeClass("just-cont-flex-end");
        livesCurrent.removeClass("right-upper00");
        livesCurrent.addClass("bottom0");
       
        //update points display
        ptsArea.removeClass("right-upper040");
        ptsArea.addClass("bottom40");
     }

    //Function to animate page on load 
     function intro() {
        gameTitle.fadeIn(1300);
        p.delay(900).fadeIn(1500);
        difficultyButtons.delay(1500).show(1500);
     }
    
    //Animate the page (call function) 
     intro();
 
    //Function to start game
     function startGame() {

        //hide difficulty buttons and refering paragraph
         p.delay(100).slideUp(1200, function () {
            p.hide();
         })
         difficultyButtons.eq(0).delay(200).slideUp(1200, function () {
            difficultyButtons.eq(0).hide();
         })
         difficultyButtons.eq(1).delay(300).slideUp(1200, function () {
            difficultyButtons.eq(1).hide();
         })
         difficultyButtons.eq(2).delay(400).slideUp(1200, function () {
            difficultyButtons.eq(2).hide();
         })
        
        //show input, guess button , lives and points display 
         input.delay(1200).fadeIn(1200, function () {
            input.show();
         });
         guessBtn.delay(1300).fadeIn(1200);
         livesLost.delay(1000).fadeIn(1200);
         livesCurrent.delay(1000).fadeIn(1200);
         ptsArea.delay(1000).fadeIn(1200);
     }
 
    //Function to set instruction paragraph text and show it when on easy mode
     function easy() {
        chooseNumberText.text("Choose a number from 1 to 10.");
        chooseNumberText.delay(1100).show(1000);
     }

    //Function to set instruction paragraph text and show it when on medium mode 
     function medium() {
        chooseNumberText.text("Choose a number from 1 to 25.");
        chooseNumberText.delay(1200).show(1000);
     }

    //Function to set instruction paragraph text and show it when on hard mode 
     function hard() {
        chooseNumberText.text("Choose a number from 1 to 50.");
        chooseNumberText.delay(1200).show(1000);
     }
     
    //Call respective functions on respective buttons

     //easy button
      difficultyButtons.eq(0).click(function () {
        startGame();
        easy();
      });

     //medium button 
      difficultyButtons.eq(1).click(function () {
        startGame();
        medium();
      });

     //hard button 
      difficultyButtons.eq(2).click(function () {
        startGame();
        hard();
      });
    
    //Function to decide win or loss
     //easy mode  
     function guessBtnEasyMode() {

        //set alert message if input value higher than limit
        if (input.val() > 10) {
            alertMsg.text("The number must be lower than 11.")
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);

        //set alert message if input lower than minimum    
        } else if (input.val() < 1) {
            alertMsg.text("The number must be higher than 0.");
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);

        //evaluate input value    
        } else {
            guessBtn.prop("disabled", true); //disable guess button

            //generate number, display it and then hide it
            numberGenerated.text(Math.ceil(Math.random() * 10));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);

            //if input value and generated number match
            if (numberGenerated.text() === input.val()) {

                //alert player won and hide it
                alertMsg.text("You guessed it right!")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation"); //animate show
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation"); //animate hide
                }, 4000);

                //enable guess button
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);

                input.val(''); //reset input

                //add points
                let ptsWon = 10;
                let ptsText = ptsCount.text(); //select the points display text
                let currentPts = parseInt(ptsText, 10); //select the current points value
                let newPts = (currentPts + ptsWon).toString().padStart(4, '0'); //set the new points value (with 2 zeros before)
                ptsCount.text(newPts); //display new points value

            //if input value and number generated don't match    
            } else {

                //alert payer lost and hide it
                alertMsg.text("Oh no! You lost!");
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation"); //animate show
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation"); //animate hide
                }, 4000);

                //enable guess button
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);

                input.val(''); //reset input
                
                //reduce 1 life
                const currentlivesCurrent = livesCurrent.children().eq(livesCurrentIndex); //select the heart icon to hide
                currentlivesCurrent.addClass("scaleOut-animation"); //hide it and animate it

                //end game when player has no lives left
                livesCurrentIndex = (livesCurrentIndex + 1) % livesCurrent.children().length; //check which life player is at
                if (livesCurrent.children().last().hasClass("scaleOut-animation")) { //if he lost his last life (last heart icon was hidden)
                    const totalPtsText = ptsCount.text(); //calculate total points
                    totalPts.text(totalPtsText); //prepare total points display

                    //hide game page
                    setTimeout(function () {
                        gameTitle.hide(); 
                        p.hide();
                        difficultyButtons.hide();
                        chooseNumberText.hide();
                        input.hide();
                        guessBtn.hide();
                        numberGeneratedText.hide();
                        numberGenerated.hide();
                        alertMsg.hide();
                        livesLost.hide();
                        livesCurrent.hide();
                        ptsArea.hide();
                    }, 1000);

                    //display game over page
                    setTimeout(function () {
                        gameOverPage.show(1000);
                    }, 2000)
                }
            }
        }
     }
    
     //medium mode
     function guessBtnMediumMode() {

        //set alert message if input value higher than limit
        if (input.val() > 25) {
            alertMsg.text("The number must be lower than 26.")
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);

        //set alert message if input lower than minimum       
        } else if (input.val() < 1) {
            alertMsg.text("The number must be higher than 0.");
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);

        //evaluate input value    
        } else {

            guessBtn.prop("disabled", true); //disable guess button

            //generate number, display it and then hide it
            numberGenerated.text(Math.ceil(Math.random() * 25));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);

            //if input value and generated number match
            if (numberGenerated.text() === input.val()) {

                //alert player won and hide it
                alertMsg.text("You guessed it right!")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation"); //animate show
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation"); //animate hide
                }, 4000);

                //enable guess button
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);

                input.val(''); //reset input


                //add points
                let ptsWon = 20;
                let ptsText = ptsCount.text(); //select the points display text
                let currentPts = parseInt(ptsText, 10); //select the current points value
                let newPts = (currentPts + ptsWon).toString().padStart(4, '0'); //set the new points value (with 2 zeros before)
                ptsCount.text(newPts); //display new points value

            //if input value and number generated don't match     
            } else {

                //alert payer lost and hide it
                alertMsg.text("Oh no! You lost!");
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation"); //animate show
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation"); //hide show
                }, 4000);

                //enable guess button
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);

                input.val(''); //reset input


               //end game when player has no lives left
                livesCurrentIndex = (livesCurrentIndex + 1) % livesCurrent.children().length; //check which life player is at
                if (livesCurrent.children().last().hasClass("scaleOut-animation")) { //if he lost his last life (last heart icon was hidden)
                    const totalPtsText = ptsCount.text(); //calculate total points
                    totalPts.text(totalPtsText); //prepare total points display

                    //hide game page
                    setTimeout(function () {
                        gameTitle.hide(); 
                        p.hide();
                        difficultyButtons.hide();
                        chooseNumberText.hide();
                        input.hide();
                        guessBtn.hide();
                        numberGeneratedText.hide();
                        numberGenerated.hide();
                        alertMsg.hide();
                        livesLost.hide();
                        livesCurrent.hide();
                        ptsArea.hide();
                    }, 1000);

                    //display game over page
                    setTimeout(function () {
                        gameOverPage.show(1000);
                    }, 2000)
                }
            }
        }
     }
     
     //hard mode 
     function guessBtnHardMode() {

        //set alert message if input value higher than limit
        if (input.val() > 50) {
            alertMsg.text("The number must be lower than 51.")
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);

        //set alert message if input lower than minimum       
        } else if (input.val() < 1) {
            alertMsg.text("The number must be higher than 0.");
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);

        //evaluate input value      
        } else {

            guessBtn.prop("disabled", true); //disable guess button

            //generate number, display it and then hide it
            numberGenerated.text(Math.ceil(Math.random() * 50));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);

            //if input value and generated number match
            if (numberGenerated.text() === input.val()) {

                 //alert player won and hide it
                 alertMsg.text("You guessed it right!")
                 setTimeout(function () {
                     alertMsg.show();
                     alertMsg.addClass("scaleInOut-animation"); //animate show
                 }, 1000);
                 setTimeout(function () {
                     alertMsg.hide();
                     alertMsg.removeClass("scaleInOut-animation"); //animate hide
                 }, 4000);
 
                 //enable guess button
                 setTimeout(function () {
                     guessBtn.prop("disabled", false);
                 }, 4000);
 
                 input.val(''); //reset input
 
 
                 //add points
                 let ptsWon = 20;
                 let ptsText = ptsCount.text(); //select the points display text
                 let currentPts = parseInt(ptsText, 10); //select the current points value
                 let newPts = (currentPts + ptsWon).toString().padStart(4, '0'); //set the new points value (with 2 zeros before)
                 ptsCount.text(newPts); //display new points value
 
             //if input value and number generated don't match     
             } else {
 
                 //alert payer lost and hide it
                 alertMsg.text("Oh no! You lost!");
                 setTimeout(function () {
                     alertMsg.show();
                     alertMsg.addClass("scaleInOut-animation"); //animate show
                 }, 1000);
                 setTimeout(function () {
                     alertMsg.hide();
                     alertMsg.removeClass("scaleInOut-animation"); //hide show
                 }, 4000);
 
                 //enable guess button
                 setTimeout(function () {
                     guessBtn.prop("disabled", false);
                 }, 4000);
 
                 input.val(''); //reset input
 
 
                //end game when player has no lives left
                 livesCurrentIndex = (livesCurrentIndex + 1) % livesCurrent.children().length; //check which life player is at
                 if (livesCurrent.children().last().hasClass("scaleOut-animation")) { //if he lost his last life (last heart icon was hidden)
                     const totalPtsText = ptsCount.text(); //calculate total points
                     totalPts.text(totalPtsText); //prepare total points display
 
                     //hide game page
                     setTimeout(function () {
                         gameTitle.hide(); 
                         p.hide();
                         difficultyButtons.hide();
                         chooseNumberText.hide();
                         input.hide();
                         guessBtn.hide();
                         numberGeneratedText.hide();
                         numberGenerated.hide();
                         alertMsg.hide();
                         livesLost.hide();
                         livesCurrent.hide();
                         ptsArea.hide();
                     }, 1000);
 
                     //display game over page
                     setTimeout(function () {
                         gameOverPage.show(1000);
                     }, 2000)
                 }
             }
         }
      }
    
    //call respective functions on respective modes  
    guessBtn.on("click", function () {

        //easy mode
        if (chooseNumberText.text() === "Choose a number from 1 to 10.") {
            guessBtnEasyMode();

        //medium mode    
        } else if (chooseNumberText.text() === "Choose a number from 1 to 25.") {
            guessBtnMediumMode();

        //hard mode    
        } else {
            guessBtnHardMode();
        }
    })


   
})
