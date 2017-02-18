var letters = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			var wins = 0;
			var losses = 0;
			var remainingGuesses = 10;
			var guesses = [];
			var selectedLetter = PickRandomLetter();
			var lettersGuessed = []

			//update guesses remaining, remove previous selections, pick new random letter, update screen.
			function PickRandomLetter() 
			{
			return selectedLetter = letters[Math.floor(Math.random() * letters.length)];
			};

		document.onkeyup = function(event) 
		{

			// Determine which key was pressed
			var userGuess = event.key;
			console.log(selectedLetter);
				if(userGuess == selectedLetter)
				{
				StartNewGame(true);
				remainingGuesses = 11;
				}

				else(userGuess != selectedLetter)
				{
				remainingGuesses--;
				if(remainingGuesses <= 0)
					{
					StartNewGame(false);
					remainingGuesses = 10;
					} 
				}
					

			// Here we create the HTML that will be injected into our div and displayed on the page.
          	var html = "<p>What letter am I thinking of?</p>" +
          	"<p>Wins: " + wins + "</p>" +
          	"<p>Losses: " + losses + "</p>" +
          	"<p>Guesses Remaining: " + remainingGuesses + "</p>";

          	// Injecting the HTML we just created into our div and updating the game information on our page.
          	document.querySelector("#game").innerHTML = html;
	};

			//start new game: 

			function StartNewGame(Succeeded) 
			{ 
				PickRandomLetter();
			if(Succeeded) 
				{
				wins++;
				Reset();
				}

			else 
				{
				losses++;
				Reset();
				};
			};

			function Reset() 
			{  
				guesses = [];  
			};