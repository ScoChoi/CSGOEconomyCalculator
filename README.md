# Authors: Scott Choi, ascottychoi@gmail.com / Justin Spidell

# Description: A CS:GO Economy Calculator
CS:GO (Counter-Strike Global Offensive) is one of the most popular first-person shooter games in the world, and undoubtedly the most popular one in the western world. Currently my application takes in 4 user-provided inputs for each round: number of teammates killed, number of enemies killed, the type of enemy buy, and the outcome of the round. Using those variables, I have created an algorithm that estimates the amount of money for the enemy side and with that information I give the user an idea of what the enemy team's buy will look like for the following round.

# Why I Created The Application
One of the biggest mechanic of CS:GO is the economy. Therefore having a good understanding of the economy gives players an advantage. While the money of the user's team is provided, the enemy team's money is never explicitly shown. In competitive play being able to process information and calculate money of the enemy team allows users to predict the buy of the enemy team, greatly giving the user an advantage. Therefore, I designed this application with that in mind, to give players who don't possess a solid grasp of the money system the answer. The basics the money goes like this: 
For a round win, the winning team obtains $3250, unless they win by bomb explosion which provides $3500 for the Terrorist side. 
For a round loss the money obtained depends on the round loss bonus. For a round loss bonus of 0, the losing team recieves $1400. Then for each higher round loss bonus the losing team obtains $500 more up to a round loss bonus of 4 which gives the losing team $3400. 
Furthermore, killing an enemy, planting the bomb, and defusing the bomb gives you more money, while killing yourself or killing a teammate will penalize your money. 

# Challenges
It is impossible to calculate the exact money of the enemy team, without an API of course. We can never know with 100% certainty what each enemy player buys or when they don't buy. My algorithm was created with the current meta in mind, and takes several decision-making liberties. As players diverge more from the established meta, typical in pro-play, the expectations will diverge further from the actual economy. 

# Algorithm
TODO

# Future Plans
My hope is to make this application more practical to use. Inputting the 4 variables does not take too long, but tabbing back and forth from CS:GO can be a nightmare. I want to add more user input variables, but I will try to do it in a way that is still simple to use, since players have about 15 sec between rounds. While creating a phone app version would be very practical, since users could simply input the variables on their phone while in game, I believe the end goal would be connecting the application to an API that tracks real-time progress of a match removing the need for user inputs. Possibly adding this as a functionality to the Faceit enhancer?
