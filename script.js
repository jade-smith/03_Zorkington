/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'Zorkington',
    desc: 'Welcome to Zorkington! Here are some quick rules & concepts...',
    author: 'Jade Smith',
    cohort: 'PTSB-2023',
    startingRoomDescription: 'What you see before you is the entryway.',
    playerCommands: [
        // replace these with your games commands as needed
        'look', 'pickup', 'enter', 'inventory'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here
function Layout (location){

  let startingRoom = 'entryway';

  let locations = {
    entryway: {
      description: "You are in the entryway. It's a welcoming room with a coat rack and sunroof. You can see the living room and the stairs.",
      exits: ['stairs', 'living room'],
    },
    'living room': {
      description: 'You are in the living room. There is a TV, a large comfortable sofa, and a puppy. You can see the entryway and the garden',
      exits: ['entryway', 'garden'],
    },
    stairs: {
      description: 'You are on the stairs where a painting is hung on the wall. You can see the entryway and the bedroom.',
      exits: ['entryway', 'bedroom'],
    },
    bedroom: {
      description: 'You are in the bedroom. There is a king bed, dresser, cellphone, and a book. You can see the stairs and the bathroom',
      exits: ['stairs', 'bathroom'],
    },
    bathroom: {
      description: 'You are in the bathroom. There is a bathtub, toothbrush, lipstick, and handsoap. You can see the bedroom.',
      exits: ['bedroom'],
    },
  };
        

  let currentLocation = startingRoom;

  let validLocation = locations[currentLocation];
  
  if (validLocation.includes(location)){
    currentLocation = location;
  } else {return 'oops! you cannot go this way...'}
}

export const domDisplay = (playerInput) => {
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here

    // Placeholder variable to store the response
    let response = "";
    
    // Check the command and perform actions accordingly
    if (playerInput.includes('look')) {
      // Display room description
      response = locations[currentLocation].description;
    } else if (playerInput.includes('enter')) {
      
    } else if (playerInput.includes('pickup')) {
      // Handle picking up items
      // Check if the item is available in the current room and movable
      // Update the player's inventory and room's item list
      // Update the response to indicate successful pickup or failure
    } else if (playerInput.includes('inventory')) {
      // Display player's inventory
      response = "You are carrying: " + playerInventory.join(", ");
    } else {
      // Unknown command
      response = "I don't know how to " + command;
    }
    // Return the response to be displayed in the game interface
    return response;
    
    const userInput = "look"; // Sample user input
    const displayText = domDisplay(playerInput);
    console.log(displayText);
} 
