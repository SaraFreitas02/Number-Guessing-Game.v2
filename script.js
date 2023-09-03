$(document).ready(function () {
    const gameTitle = $("#gameTitle");
    const p = $("#chooseBtnP");
    const chooseNumberText = $("#chooseNumberText");
    const input = $("input");
    const guessBtn = $("#guessBtn");
    const numberGeneratedText = $("#numberGeneratedText");
    const numberGenerated = $("#numberGenerated");
    const playAgain = $("#playAgain")
    const difficultyButtons = $("button").not(guessBtn).not(playAgain);
    const alertMsg = $("#alertMessages");
    const livesLost = $("#livesLost");
    const livesCurrent = $("#livesCurrent");
    const ptsCount = $("#ptsCount");
    const ptsArea = $("#ptsArea");
    let livesCurrentIndex = 0;
    const gameOverPage = $("#gameOverPage");
    const totalPts = $("#totalPoints");

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

    function intro() {
        gameTitle.fadeIn(1300);
        p.delay(900).fadeIn(1500);
        difficultyButtons.delay(1500).show(1500);
    }

    function startGame() {
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
        input.delay(1200).fadeIn(1200, function () {
            input.show();
        });
        guessBtn.delay(1300).fadeIn(1200);
        livesLost.delay(1000).fadeIn(1200);
        livesCurrent.delay(1000).fadeIn(1200);
        ptsArea
            .delay(1000).fadeIn(1200);
    }

    function easy() {
        chooseNumberText.text("Choose a number from 1 to 10.");
        chooseNumberText.delay(1100).show(1000);
    }

    function medium() {
        chooseNumberText.text("Choose a number from 1 to 25.");
        chooseNumberText.delay(1200).show(1000);
    }

    function hard() {
        chooseNumberText.text("Choose a number from 1 to 50.");
        chooseNumberText.delay(1200).show(1000);
    }

    difficultyButtons.eq(0).click(function () {
        startGame();
        easy();
    });
    difficultyButtons.eq(1).click(function () {
        startGame();
        medium();
    });
    difficultyButtons.eq(2).click(function () {
        startGame();
        hard();
    });

    function guessBtnEasyMode() {
        if (input.val() > 10) {
            alertMsg.text("The number must be lower than 11.")
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);
        } else if (input.val() < 1) {
            alertMsg.text("The number must be higher than 0.");
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);
        } else {
            guessBtn.prop("disabled", true);
            numberGenerated.text(Math.ceil(Math.random() * 10));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);
            if (numberGenerated.text() === input.val()) {
                alertMsg.text("You guessed it right!")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);
                input.val('');
                let ptsWon = 10;
                let ptsText = ptsCount.text();
                let currentPts = parseInt(ptsText, 10);
                let newPts = (currentPts + ptsWon).toString().padStart(4, '0');
                ptsCount.text(newPts);
            } else {
                alertMsg.text("Oh no! You lost!");
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);
                input.val('');
                const livesCurrentCurrent = livesCurrent.children().eq(livesCurrentIndex);
                livesCurrentCurrent.addClass("scaleOut-animation");
                livesCurrentIndex = (livesCurrentIndex + 1) % livesCurrent.children().length;
                if (livesCurrent.children().last().hasClass("scaleOut-animation")) {
                    const totalPtsText = ptsCount.text();
                    totalPts.text(totalPtsText);
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
                    setTimeout(function () {
                        gameOverPage.show(1000);
                    }, 1000)
                }
            }
        }
    }

    function guessBtnMediumMode() {
        if (input.val() > 25) {
            alertMsg.text("The number must be lower than 26.")
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);
        } else if (input.val() < 1) {
            alertMsg.text("The number must be higher than 0.");
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);
        } else {
            guessBtn.prop("disabled", true);
            numberGenerated.text(Math.ceil(Math.random() * 25));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);
            if (numberGenerated.text() === input.val()) {
                alertMsg.text("You guessed it right!")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);
                input.val('');
                let ptsWon = 20;
                let ptsText = ptsCount.text();
                let currentPts = parseInt(ptsText, 10);
                let newPts = (currentPts + ptsWon).toString().padStart(4, '0');
                ptsCount.text(newPts);
            } else {
                alertMsg.text("Oh no! You lost!");
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);
                input.val('');
                const livesCurrentCurrent = livesCurrent.children().eq(livesCurrentIndex);
                livesCurrentCurrent.addClass("scaleOut-animation");
                livesCurrentIndex = (livesCurrentIndex + 1) % livesCurrent.children().length;
                if (livesCurrent.children().last().hasClass("scaleOut-animation")) {
                    const totalPtsText = ptsCount.text();
                    totalPts.text(totalPtsText);
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
                    setTimeout(function () {
                        gameOverPage.show(1000);
                    }, 1000)
                }
            }
        }
    }

    function guessBtnHardMode() {
        if (input.val() > 50) {
            alertMsg.text("The number must be lower than 51.")
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);
        } else if (input.val() < 1) {
            alertMsg.text("The number must be higher than 0.");
            alertMsg.show(500);
            input.css("border-color", "rgb(180, 22, 70)");
            alertMsg.delay(1000).hide(500);
        } else {
            guessBtn.prop("disabled", true);
            numberGenerated.text(Math.ceil(Math.random() * 50));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);
            if (numberGenerated.text() === input.val()) {
                alertMsg.text("You guessed it right!")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);
                input.val('');
                let ptsWon = 30;
                let ptsText = ptsCount.text();
                let currentPts = parseInt(ptsText, 10);
                let newPts = (currentPts + ptsWon).toString().padStart(4, '0');
                ptsCount.text(newPts);
            } else {
                alertMsg.text("Oh no! You lost!");
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guessBtn.prop("disabled", false);
                }, 4000);
                input.val('');
                const livesCurrentCurrent = livesCurrent.children().eq(livesCurrentIndex);
                livesCurrentCurrent.addClass("scaleOut-animation");
                livesCurrentIndex = (livesCurrentIndex + 1) % livesCurrent.children().length;
                if (livesCurrent.children().last().hasClass("scaleOut-animation")) {
                    const totalPtsText = ptsCount.text();
                    totalPts.text(totalPtsText);
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
                    setTimeout(function () {
                        gameOverPage.show(1000);
                    }, 1000)
                }
            }
        }
    }

    guessBtn.on("click", function () {
        if (chooseNumberText.text() === "Choose a number from 1 to 10.") {
            guessBtnEasyMode();
        } else if (chooseNumberText.text() === "Choose a number from 1 to 25.") {
            guessBtnMediumMode();
        } else {
            guessBtnHardMode();
        }
    })


    intro();
})
