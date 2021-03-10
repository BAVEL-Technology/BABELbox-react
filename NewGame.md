# Creating a new game for Babelbox
## Understanding the set up
### Basically, when you create a new game, the babel builder is responsible for:
1. Establishing the gameState of your game. It does this based on the state you
pass to the game.config.js file
2. Establishing a provider for two hooks:
  a. useGame hook, that returns the gameState
  b. useGameUpdate hook, that returns a funciton that accepts an object of changed state
  parameters
    * Note that you probably won't need to ever change the gameState yourself, explained next
3. Establishing a socket connection to the portal and updating the gameState on all socket responses. Because of this, when you update the database, all games on all devices will have their state updated
4. Babelbuilder handles authentication into the games portal. Feel free to change the look of the GateWay files, but out of the box, it will:
  a. Kick the user out of a portal that does not exist
  b. Make the user sign in, if the portal they are trying to enter does not have them listed as a player
  c. Route the user into their portal after they have joined one or created one
5. Babelbuilder also handles "phase" changes. Assuming your game has multiple phases, when the gameState phase changes, meaning the db phase has changed, Babelbuilder will display the components you set up inside sets passed to the game.config.js file

### What is your job:
1. Basically everything else. But the cool thing is you don't need to handle anything but displaying an awesome game to the user, and updating the database in the way you see fit.
## Setting up your game
1. Duplicate the "NewGame" folder and rename to something of your choosing
2. Head into your new directory and edit the game.config.js file
    a. Follow along with the comments to create the initial setup of your game
    b. Be sure to include all necessary fields, the comments will mention this
3. Head to the routes directory of your new game and edit line 13 of routes/index.js
    ```
    export const NewGameRoutes = {
    ```
    Change "NewGameRoutes" to whatever you'd like your routes to be called
4. Head to ./src/routes/index.js and import those routes into the app
    ```
    import { NewGameRoutes } from "../games/NewGame/routes"
    ```
    Then spread out those routes into the main routes object
    ```
    ...LiarLiarRoutes,
    ...NewGameRoutes //Add your new routes here
    ```
    This is the last time you need to mess with routing, unless you want to.

5. If you'd like, head to you new games route and create a new portal. You should be taken to a very ugly page that lets you know it worked! Then check out the backend and see if your new portal has been added.

## Building up your game
### You are now ready to build up your game! 🚀
* In general, you wont need to make state changes to the gameState. As long as you have updated the database, the sockets are automatically updating the gameState.
* You may need to add some of your own states for a specific component, but that is up to you.
* You can import the BabelBread API wrapper from utils/babelBread.
    * bb().read('portal', {filters})
    * add .first() to get the first item returned of the array
    * bb().edit('portals', {filters}, {keyToChange: whatToChangeItTo})
    * bb().push('portals', {filters}, {arrayToPushTo: whatToPush})
* You can use dot notation to update nested items. If I want to change player 6's name I can do:
    * bb().edit('portals', {code: CODE}, {"params.players.6.name": "Steve"})
* You might need to find the index of a certain user. import { findCurrentUserIndex } from path/to/your/game/utils/currentUserIndex.
    * findCurrentUserIndex(arrayOfPlayers, playerIdInQuestion) will return the index of the player you want
* You may want to move the game into a new phase, adjusting the "set" you are in
    * bb().edit('portals', {code: CODE}, {"params.phase": "newPhase"})
