window.onload = function(){
  var playerCardsArray = [];
  var dealerCardsArray = [];
  var playerScore = 0;
  var dealerScore = 0;

  var deck = [
    {suit: "hearts", score: 11, backgroundPosition: "-706px -128px" },
    {suit: "hearts", score: 10, backgroundPosition: "2008px -128px" },
  	{suit: "hearts", score: 2, backgroundPosition: "-800px -128px" },
  	{suit: "hearts", score: 3, backgroundPosition: "-894px -128px"},
  	{suit: "spades", score: 11, backgroundPosition: "-706px -5px" },
    {suit: "spades", score: 10, backgroundPosition: "2008px -5px"},
    {suit: "spades", score: 2, backgroundPosition: "-800px -5px"},
    {suit: "spades", score: 3, backgroundPosition: "-894px -5px"},
    {suit: "clubs", score: 11, backgroundPosition: "-706px -254px" },
    {suit: "clubs", score: 10, backgroundPosition: "2008px -254px"},
    {suit: "clubs", score: 2, backgroundPosition: "-800px -254px"},
    {suit: "clubs", score: 3, backgroundPosition: "-894px -254px"},
    {suit: "diamonds", score: 11, backgroundPosition: "-706px -378px" },
    {suit: "diamonds", score: 10, backgroundPosition: "2008px -378px"},
    {suit: "diamonds", score: 2, backgroundPosition: "-800px -378px"},
    {suit: "diamonds", score: 3, backgroundPosition: "-894px -378px"},
  ];

  var dealCard = function(){
    var index = Math.floor(Math.random() * deck.length);
    var card = deck.splice(index, 1)[0];
    // console.log(deck.length);
    return card;
  };


  var dealFirstCards = function(){
  	for (var i = 1; i < 5; i++){
      var card = dealCard();
      // if (i % 2 !== 0) {
    	// 	playerCardsArray.push(card);
      //   playerScore += card.score;
      // } else {
      //   dealerCardsArray.push(card);
      //   dealerScore += card.score;
      // }
      (i % 2 !== 0) ? playerCardsArray.push(card) : dealerCardsArray.push(card);
      (i % 2 !== 0) ? playerScore += card.score : dealerScore += card.score;
    }
  	return [dealerCardsArray, playerCardsArray];
  };

  console.log(dealFirstCards());

  // var addCardsToDom = function(){
  //   for (var i = 0; i < 4; i++){
  //     var domCard = document.querySelector(`.card${i}`);
  //     for
  //       if (i % 2 !== 0) {
  //         domCard.style.backgroundPosition = playerCardsArray[].backgroundPosition;
  //       }
  //
  //     }
  //       var domCard = document.querySelector(".card1");
  //       console.log(card, "dom cards" + domCard);
  // }

  var addCardsToDom = function(){
    playerCardsArray.forEach(function(card, index){
      var domCard = document.querySelector(`.card${index + 1}`);
      // console.log(domCard);
      domCard.style.backgroundPosition = card.backgroundPosition;
    });

    dealerCardsArray.forEach(function(card, index){
      var domCard = document.querySelector(`.card${index + 3}`);
      // console.log(domCard);
      domCard.style.backgroundPosition = card.backgroundPosition;
    });
  };

  addCardsToDom();
  console.log(`player: ${playerScore} dealer: ${dealerScore}`);

}; //window.onload()
