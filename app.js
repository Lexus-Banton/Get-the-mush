// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Tech',
        satisfaction: 2,
    },
    {
        name: 'Lawson',
        satisfaction: 3,
    },
    {
        name: 'Tanner',
        satisfaction: 1,
    },
    {
        name: 'Ryan',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;

        displayMushrooms();
    } else {
        alert('no luck!');
    }
    displayMushrooms();
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const name = friendInputEl.value;
    // create a new friend object
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction:1

    };
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl

        // this is a clickable list, so . . .
        //     add an event listener to each friend
        const friendEl = renderFriend(friend);

        friendEl.addEventListener('click', () => {
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                friend.satisfaction++;
                displayFriends();
                displayMushrooms();
            }
        });

        friendsEl.append(friendEl);
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             then display your friends and mushrooms with the updated state

        // append the friendEl to the friends list in DOM
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    

    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
    }
}

displayFriends();
displayMushrooms();
