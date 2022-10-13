This is my go at an interactive web game written with ts.

Stack:
React
Typescript

Major challenges:
1. 3-Dimenionsal manipulation with CSS:
I struggled initially with creating the 3dimensional board game 
with individual responsive pieces.  I was able to learn a
lot by seeing how user h20x (https://codepen.io/h20x/pen/YQYrOa) 
manipulated his cube in 3-dimensional space to see how I could do 
something similar.  My approach to individual cube or block 
creation was different as I wanted to use react to handle the 
various game states and event functionality.  H

2. Game manipulation using React
Another of my challenges came with understanding how I could use
React tools to manipulate game creation and referencing.  I
wanted to create the game and it's necessary components using 
strict typescript classes and then use those to create each game
as necessary.  My first struggle was finding out how I could
store the current game state and change it with event listeners.
Using context hooks, I could create a new game state based on the
moves a player makes and then update the hook state with this new
value which re-renders all components referencing the game.
