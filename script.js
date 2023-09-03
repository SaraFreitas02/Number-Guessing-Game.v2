$(document).ready(function () {
    const h1 = $("#h1");
    const p = $("#p");
    const chooseNumberText = $("#chooseNumberText");
    const input = $("input");
    const guess = $("#guess");
    const numberGeneratedText = $("#numberGeneratedText");
    const numberGenerated = $("#numberGenerated");
    const playAgain = $("#playAgain")
    const buttons = $("button").not(guess).not(playAgain);
    const alertMsg = $("#alertMessages");
    const livesEmpty = $("#livesEmpty");
    const livesFull = $("#livesFull");
    const ptsCount = $("#ptsCount");
    const ptsDiv = $("#ptsDiv");
    let livesFullIndex = 0;
    const playAgainDiv = $("#playAgainDiv");
    const totalPts = $("#totalPoints");

    h1.hide();
    p.hide();
    buttons.hide();
    chooseNumberText.hide();
    input.hide();
    guess.hide();
    numberGeneratedText.hide();
    numberGenerated.hide();
    alertMsg.hide();
    livesEmpty.hide();
    livesFull.hide();
    ptsDiv.hide();
    playAgainDiv.hide();

    if (window.innerWidth < 768) {
        const firstParent = $("#headerDiv");
        const livesAndPts = $("#livesAndPoints");
        const newParent = $("#livesPlacePhone");

        firstParent.find(livesAndPts).remove();
        newParent.append(livesAndPts);

        firstParent.removeClass("just-cont-flex-end")
        livesFull.removeClass("right-upper-corner");
        ptsDiv.removeClass("right-upper-corner2");

        firstParent.addClass("just-cont-center");
        livesFull.addClass("middle-bottom-corner");
        ptsDiv.addClass("middle-bottom-corner2");
      }


    function intro() {
        h1.fadeIn(1300);
        p.delay(900).fadeIn(1500);
        buttons.delay(1500).show(1500);
    }

    function startGame() {
        p.delay(100).slideUp(1200, function () {
            p.hide();
        })
        buttons.eq(0).delay(200).slideUp(1200, function () {
            buttons.eq(0).hide();
        })
        buttons.eq(1).delay(300).slideUp(1200, function () {
            buttons.eq(1).hide();
        })
        buttons.eq(2).delay(400).slideUp(1200, function () {
            buttons.eq(2).hide();
        })
        input.delay(1200).fadeIn(1200, function () {
            input.show();
        });
        guess.delay(1300).fadeIn(1200);
        livesEmpty.delay(1000).fadeIn(1200);
        livesFull.delay(1000).fadeIn(1200);
        ptsDiv.delay(1000).fadeIn(1200);
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

    buttons.eq(0).click(function () {
        startGame();
        easy();
    });
    buttons.eq(1).click(function () {
        startGame();
        medium();
    });
    buttons.eq(2).click(function () {
        startGame();
        hard();
    });

    function guessEasyMode() {
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
            guess.prop("disabled", true);
            numberGenerated.text(Math.ceil(Math.random() * 10));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);
            if (numberGenerated.text() === input.val()) {
                alertMsg.text("You guessed it right!.")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guess.prop("disabled", false);
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
                    guess.prop("disabled", false);
                }, 4000);
                input.val('');
                const livesFullCurrent = livesFull.children().eq(livesFullIndex);
                livesFullCurrent.addClass("scaleOut-animation");
                livesFullIndex = (livesFullIndex + 1) % livesFull.children().length;
                if (livesFull.children().last().hasClass("scaleOut-animation")){
                    const totalPtsText = ptsCount.text();
                    totalPts.text(totalPtsText);
                    h1.hide();
                    p.hide();
                    buttons.hide();
                    chooseNumberText.hide();
                    input.hide();
                    guess.hide();
                    numberGeneratedText.hide();
                    numberGenerated.hide();
                    alertMsg.hide();
                    livesEmpty.hide();
                    livesFull.hide();
                    ptsDiv.hide();
                    playAgainDiv.show(1000);
                }
            }
        }
    }

    function guessMediumMode() {
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
            guess.prop("disabled", true);
            numberGenerated.text(Math.ceil(Math.random() * 25));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);
            if (numberGenerated.text() === input.val()) {
                alertMsg.text("You guessed it right!.")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guess.prop("disabled", false);
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
                    guess.prop("disabled", false);
                }, 4000);
                input.val('');
                const livesFullCurrent = livesFull.children().eq(livesFullIndex);
                livesFullCurrent.addClass("scaleOut-animation");
                livesFullIndex = (livesFullIndex + 1) % livesFull.children().length;
                if (livesFull.children().last().hasClass("scaleOut-animation")) {
                    const totalPtsText = ptsCount.text();
                    totalPts.text(totalPtsText);
                    h1.delay(1000).hide();
                    p.delay(1000).hide();
                    buttons.delay(1000).hide();
                    chooseNumberText.hide();
                    input.delay(1000).hide();
                    guess.delay(1000).hide();
                    numberGeneratedText.delay(1000).hide();
                    numberGenerated.delay(1000).hide();
                    alertMsg.delay(1000).hide();
                    livesEmpty.delay(1000).hide();
                    livesFull.delay(1000).hide();
                    ptsDiv.delay(1000).hide();
                    playAgainDiv.delay(1000).show(1000);
                }
            }
        }
    }

    function guessHardMode() {
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
            guess.prop("disabled", true);
            numberGenerated.text(Math.ceil(Math.random() * 50));
            numberGeneratedText.delay(100).slideDown(1000);
            numberGeneratedText.delay(2000).slideUp(1000);
            numberGenerated.delay(200).slideDown(1000);
            numberGenerated.delay(2000).slideUp(1000);
            if (numberGenerated.text() === input.val()) {
                alertMsg.text("You guessed it right!.")
                setTimeout(function () {
                    alertMsg.show();
                    alertMsg.addClass("scaleInOut-animation");
                }, 1000);
                setTimeout(function () {
                    alertMsg.hide();
                    alertMsg.removeClass("scaleInOut-animation");
                }, 4000);
                setTimeout(function () {
                    guess.prop("disabled", false);
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
                    guess.prop("disabled", false);
                }, 4000);
                input.val('');
                const livesFullCurrent = livesFull.children().eq(livesFullIndex);
                livesFullCurrent.addClass("scaleOut-animation");
                livesFullIndex = (livesFullIndex + 1) % livesFull.children().length;
                if (livesFull.children().last().hasClass("scaleOut-animation")){
                    const totalPtsText = ptsCount.text();
                    totalPts.text(totalPtsText);
                    h1.delay(1000).hide();
                    p.delay(1000).hide();
                    buttons.delay(1000).hide();
                    chooseNumberText.hide();
                    input.delay(1000).hide();
                    guess.delay(1000).hide();
                    numberGeneratedText.delay(1000).hide();
                    numberGenerated.delay(1000).hide();
                    alertMsg.delay(1000).hide();
                    livesEmpty.delay(1000).hide();
                    livesFull.delay(1000).hide();
                    ptsDiv.delay(1000).hide();
                    playAgainDiv.delay(1000).show(1000);
                }
            }
        }
    }

    guess.on("click", function () {
        if (chooseNumberText.text() === "Choose a number from 1 to 10.") {
            guessEasyMode();
        } else if (chooseNumberText.text() === "Choose a number from 1 to 25.") {
            guessMediumMode();
        } else {
            guessHardMode();
        }
    })


    intro();
})
