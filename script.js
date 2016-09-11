window.onload = function(){
  var playerCardsArray = [];
  var dealerCardsArray = [];
  var playerScore = 0;
  var dealerScore = 0;
  var deck = [];
  var suits = ["spades", "hearts", "clubs", "diamonds"];


  // var deck = [
  // 	{suit: "hearts", score: 2, backgroundPosition: "-800px -130px" },
  // 	{suit: "hearts", score: 3, backgroundPosition: "-894px -130px"},
  //   {suit: "hearts", score: 4, backgroundPosition: "-988px -130px"},
  //   {suit: "hearts", score: 5, backgroundPosition: "-1082px -130px"},
  //   {suit: "hearts", score: 6, backgroundPosition: "-1176px -130px"},
  //   {suit: "hearts", score: 7, backgroundPosition: "-1270px -130px"},
  //   {suit: "hearts", score: 8, backgroundPosition: "-1362px -130px"},
  //   {suit: "hearts", score: 9, backgroundPosition: "-1456px -130px"},
  //   {suit: "hearts", score: 10, backgroundPosition: "2196px -130px", type: "jack"},
  //   {suit: "hearts", score: 10, backgroundPosition: "2102px -130px", type: "queen"},
  //   {suit: "hearts", score: 10, backgroundPosition: "2008px -130px", type: "king"},
  //   {suit: "hearts", score: 11, backgroundPosition: "-706px -130px", type: "ace"},
  //   {suit: "spades", score: 2, backgroundPosition: "-800px -5px"},
  //   {suit: "spades", score: 3, backgroundPosition: "-894px -5px"},
  //   {suit: "spades", score: 4, backgroundPosition: "-988px -5px"},
  //   {suit: "spades", score: 5, backgroundPosition: "-1082px -5px"},
  //   {suit: "spades", score: 6, backgroundPosition: "-1176px -5px"},
  //   {suit: "spades", score: 7, backgroundPosition: "-1270px -5px"},
  //   {suit: "spades", score: 8, backgroundPosition: "-1362px -5px"},
  //   {suit: "spades", score: 9, backgroundPosition: "-1456px -5px"},
  //   {suit: "spades", score: 10, backgroundPosition: "2196px -5px", type: "jack"},
  //   {suit: "spades", score: 10, backgroundPosition: "2102px -5px", type: "queen"},
  //   {suit: "spades", score: 10, backgroundPosition: "2008px -5px", type: "king"},
  //   {suit: "spades", score: 11, backgroundPosition: "-706px -5px", type: "ace"},
  //   {suit: "clubs", score: 2, backgroundPosition: "-800px -254px"},
  //   {suit: "clubs", score: 3, backgroundPosition: "-894px -254px"},
  //   {suit: "clubs", score: 4, backgroundPosition: "-988px -254px"},
  //   {suit: "clubs", score: 5, backgroundPosition: "-1082px -254px"},
  //   {suit: "clubs", score: 6, backgroundPosition: "-1176px -254px"},
  //   {suit: "clubs", score: 7, backgroundPosition: "-1270px -254px"},
  //   {suit: "clubs", score: 8, backgroundPosition: "-1362px -254px"},
  //   {suit: "clubs", score: 8, backgroundPosition: "-1456px -254px"},
  //   {suit: "clubs", score: 10, backgroundPosition: "2196px -254px", type: "jack"},
  //   {suit: "clubs", score: 10, backgroundPosition: "2102px -254px", type: "queen"},
  //   {suit: "clubs", score: 10, backgroundPosition: "2008px -254px", type: "king"},
  //   {suit: "clubs", score: 11, backgroundPosition: "-706px -254px", type: "ace"},
  //   {suit: "diamonds", score: 2, backgroundPosition: "-800px -378px"},
  //   {suit: "diamonds", score: 3, backgroundPosition: "-894px -378px"},
  //   {suit: "diamonds", score: 4, backgroundPosition: "-988px -378px"},
  //   {suit: "diamonds", score: 5, backgroundPosition: "-1082px -378px"},
  //   {suit: "diamonds", score: 6, backgroundPosition: "-1176px -378px"},
  //   {suit: "diamonds", score: 7, backgroundPosition: "-1270px -378px"},
  //   {suit: "diamonds", score: 8, backgroundPosition: "-1362px -378px"},
  //   {suit: "diamonds", score: 9, backgroundPosition: "-1456px -378px"},
  //   {suit: "diamonds", score: 10, backgroundPosition: "2196px -378px", type: "jack"},
  //   {suit: "diamonds", score: 10, backgroundPosition: "2102px -378px", type: "queen"},
  //   {suit: "diamonds", score: 10, backgroundPosition: "2008px -378px", type: "king"},
  //   {suit: "diamonds", score: 11, backgroundPosition: "-706px -378px", type: "ace"},
  // ];

var createDeck = function(){
  for (var i = 0; i < 4; i++){
  	for (var j = 0; j < 13; j++) {
  		var newCard = {};

  		newCard.suit = suits[i];

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

  		deck.push(newCard);
  	}
  }
};

  console.log(deck);

  var dealCard = function(){
    var index = Math.floor(Math.random() * deck.length);
    var card = deck.splice(index, 1)[0];
    console.log(card);
    return card;
  };

  var dealFirstCards = function(){
  	for (var i = 1; i < 5; i++){
      var card = dealCard();
      if (i % 2 !== 0) {
    		playerCardsArray.push(card);
        playerScore += card.val;
      } else {
        dealerCardsArray.push(card);
        dealerScore += card.val;
      }
      // (i % 2 !== 0) ? playerCardsArray.push(card) : dealerCardsArray.push(card);
      // (i % 2 !== 0) ? playerScore += card.score : dealerScore += card.score;
    }
  	return [playerCardsArray, dealerCardsArray];
  };

  var addCardsToDom = function(){
    playerCardsArray.forEach(function(card, index){
      var domCard = document.querySelector(`.card${index + 1}`);
      domCard.style.backgroundPosition = card.backgroundPosition;
    });

    dealerCardsArray.forEach(function(card, index){
      var domCard = document.querySelector(`.card${index + 3}`);
      domCard.style.backgroundPosition = card.backgroundPosition;
    });
  };

  var updateDomScore = function(){
    var dealerScoreBox = document.querySelector(".dealerScoreBox");
    var playerScoreBox = document.querySelector(".playerScoreBox");
    dealerScoreBox.innerHTML = `DEALER: ${dealerScore}`;

    playerScoreBox.innerHTML = `PLAYER: ${playerScore}`

  };

  createDeck();
  dealFirstCards();
  addCardsToDom();
  updateDomScore();
  console.log(`player: ${playerScore} dealer: ${dealerScore}`);

}; // end of window.onload()
