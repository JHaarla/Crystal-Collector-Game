# Crystal Collector Game
## AKA - unit-4-game

Match the crystal values to the target value. The crystal values are hidden so you'll have to do a little math to come up with the winning strategy. Don't go over & bust! Will you take home the crystals or go bust?

**_Under the Hood_**
This game was an exercise to learn how jQuery works. There are quite a few jQuery elements that make this game work properly:
* Basics - There are the simple/basic jQuery/JS things like setting variables, arrays, and console logging to make sure everything is working properly.
* Functions - Use of functions has been hammered in the brain - quite a few of those in this project. 
* Math.random - Learned to set a random number between two values.
* Used jQuery to manipulate the DOM
    * Single items like the score and # to match
    * Writing to the DOM procedurally (multiple crystals with varying meta data)
* Event delegation - had to set on.click events to continually "watch" certain DOM elements. Initially, they were only looking for the original elements (that were removed and re-written to the DOM). I'm sure there is a different way to resolve this, but event delegation seems like a good thing to learn/know about. 
* Conditionals - in-game checks to see what action needs to be taken next by the program. Win, lose, reset, etc.
* Modals - added the instructions to a modal so they were not constantly taking up screen real estate. 
* .on("mouseenter") - used this event handler to kick off some simple CSS animation of the crystals when the mouse is hovering over them. 

This was a fun project and got the gears turning... Have many more ideas to implement on future projects. :) 


_This is a homework assignment for UNCC Coding Bootcamp_

Written by Jarkko Haarla