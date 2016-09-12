window.onload = function(){
  var game = {
    playerCardsArray: [],
    dealerCardsArray: [],
    playerScore: 0,
    dealerScore: 0,
    suits: ["spades", "hearts", "clubs", "diamonds"],
    hitCounter: 1,
    deck: [],
    createDeck: function(){
      for (var i = 0; i < 4; i++){
      	for (var j = 0; j < 13; j++) {
      		var newCard = {};
      		newCard.suit = this.suits[i];

      		if (j === 0) {
      			newCard.pattern = "ace";
      			newCard.val = 11;
      		} else if (j === 10) {
      			newCard.pattern = "jack";
      			newCard.val = 10;
      		} else if (j === 11) {
      			newCard.pattern = "queen";
      			newCard.val = 10;
      		} else if (j === 12) {
      			newCard.pattern = "king";
      			newCard.val = 10;
      		} else {
      			newCard.pattern = `${j + 1}`;
      			newCard.val = parseInt(`${j + 1}`);
      		}

      		newCard.backgroundPosition = `${-706 + (-93.8 * j)}px ${-5 + (-124 * i)}px`;

      		this.deck.push(newCard);
      	}
      }
    },
    dealCard: function(){
      var index = Math.floor(Math.random() * this.deck.length);
      var card = this.deck.splice(index, 1)[0];
      console.log(card);
      return card;
    },
    dealFirstCards: function(){
    	for (var i = 1; i < 5; i++){
        var card = this.dealCard();
        if (i % 2 !== 0) {
      		this.playerCardsArray.push(card);
          this.playerScore += card.val;
        } else {
          this.dealerCardsArray.push(card);
          this.dealerScore += card.val;
        }
      }
    	return [this.playerCardsArray, this.dealerCardsArray];
    },
    addFirstCardsToDom: function(){
      this.playerCardsArray.forEach(function(card, index){
        var domCard = document.querySelector(`.card${index + 1}`);
        domCard.style.backgroundPosition = card.backgroundPosition;
      });

      this.dealerCardsArray.forEach(function(card, index){
        var domCard = document.querySelector(`.card${index + 3}`);
        domCard.style.backgroundPosition = card.backgroundPosition;
      });
    },
    updateDomScore: function(){
      var $dealerScoreBox = $(".dealerScoreBox");
      var $playerScoreBox = $(".playerScoreBox");

      $dealerScoreBox.html(`DEALER: ${this.dealerScore}`);
      $playerScoreBox.html(`PLAYER: ${this.playerScore}`);
    },
    hitButton: function(){
      $("button[name='hit']").on('click', function(){
        var hitCard = game.dealCard();

        game.playerCardsArray.push(hitCard);
        game.playerScore += hitCard.val;

        var hitCardLeft = `${425 + (25 * game.hitCounter)}px`
        var hitCardTop = `${375 + (25 * game.hitCounter)}px`

        var playerHitCardElement = `<div class='card${game.hitCounter + 4}' style="background-position: ${hitCard.backgroundPosition}; top:${hitCardTop}; left:${hitCardLeft} "></div>`;

        $('body').append(playerHitCardElement);
        game.hitCounter += 1;
        game.updateDomScore();
        return playerHitCardElement;
      })
    },
    initialize: function(){
      game.hitButton();
      game.createDeck();
      game.dealFirstCards();
      game.addFirstCardsToDom();
      game.updateDomScore();
      console.log(`player: ${game.playerScore} dealer: ${game.dealerScore}`);
    }
  };

  game.initialize();
}; // end of window.onload()
