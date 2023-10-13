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

class items{
  constructor(description, pickup){
    this.description = description;
    this.pickup = pickup;
  }
}
const coatrack = new items('description', false);
const boots = new items('description', true);
const sunroof = new items('description', false);
const TV = new items('decription', false);
const sofa = new items('decription', false);
const puppy = new items('decription', true);
const strawberries = new items('decription', true);
const roses = new items('decription', true);
const tulips = new items('decription', true);
const snake = new items('decription', false);
const painting = new items('decription', false);
const bed = new items('decription', false);
const dresser = new items('decription', false);
const cellphone = new items('decription', true);
const book = new items('decription', true);
const bathtub = new items('decription', false);
const toothbrush = new items('decription', true);
const lipstick = new items('decription', true);
const handsoap = new items('decription', true);

const itemsDictionary = {
  coatrack: coatrack,
  boots: boots,
  sunroof: sunroof,
  TV: TV,
  sofa: sofa,
  puppy: puppy,
  strawberries: strawberries,
  roses: roses,
  tulips: tulips,
  snake: snake,
  painting: painting,
  bed: bed,
  dresser: dresser,
  cellphone: cellphone,
  book: book,
  bathtub: bathtub,
  toothbrush: toothbrush,
  lipstick: lipstick,
  handsoap: handsoap
}

let locations = {
  entryway: {
    description: "You are in the entryway. It's a welcoming room with a coatrack, boots and sunroof. You can see the living room and the stairs.",
    exits: ['stairs', 'living'],
    items: ['coatrack', 'boots', 'sunroof']
  },
  living: {
    description: 'You are in the living room. There is a TV, a large comfortable sofa, and a puppy. You can see the entryway and the garden',
    exits: ['entryway', 'garden'],
    items: ['TV', 'sofa', 'puppy']
  },
  garden: {
    description: 'You are in the garden. There are fresh strawberries, roses, tulips, and a snake. You can see the living room.',
    exits: ['living'],
    items: ['strawberries', 'roses', 'tulips', 'snake'],
  },
  stairs: {
    description: 'You are on the stairs where a painting is hung on the wall. You can see the entryway and the bedroom.',
    exits: ['entryway', 'bedroom'],
    items: ['painting']
  },
  bedroom: {
    description: 'You are in the bedroom. There is a bed, dresser, cellphone, and a book. You can see the stairs and the bathroom',
    exits: ['stairs', 'bathroom'],
    items: ['bed', 'dresser', 'cellphone', 'book']
  },
    bathroom: {
      description: 'You are in the bathroom. There is a bathtub, toothbrush, lipstick, and handsoap. You can see the bedroom.',
      exits: ['bedroom'],
      items:['bathtub', 'toothbrush', 'lipstick', 'handsoap']
    },
    
  }     
  let startingRoom = locations.entryway;

  let currentLocation = startingRoom;
  
export const domDisplay = (playerInput) => {
  // console.log(playerInput.split(" "));

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
    
    console.log(currentLocation);
    const [action, target] = playerInput.split(" ");
    console.log(action);
    console.log(target);
    let playerInventory = [];
  
    if(action == 'enter' && currentLocation.exits.includes(target) || target == 'living room'){
      currentLocation = locations[target];
      return currentLocation.description
    }else if(action == 'look'){
      return currentLocation.items
    }else if(action == 'pickup' && itemsDictionary[target].pickup == true){
      playerInventory.push(target);
      return 'You have put ' + target + ' in your inventory'
    }else if(action == 'pickup' && itemsDictionary[target].pickup == false){
      return 'You cannot pickup this item, sorry!'
    }else if (action == 'inventory'){
      return playerInventory
    }




    // const userInput = "look"; // Sample user input
    // const displayText = domDisplay(playerInput);
    // console.log(displayText);
} 
