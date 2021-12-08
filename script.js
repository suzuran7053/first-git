// Create an object contains parts of random messages
const random = {
    animals: [
        ["cat", "dog", "rabbit", "chipmunk", "penguin", "dolphin", "crocodile"],
        ["friend", "family", "mentor", "fella"]
    ],
    horoscope: [
        ["funny", "weird", "lovely", "shining", "tearful"],
        ["man", "star", "girl", "cat", "flower", "friend"]
    ],
    question: [
        ["Indian", "Japanese", "Australian", "Swedish", "Walsh", "Italian"],
        ["sushi", "vegetables", "fish and chips", "octopus", "lamb"]
    ]
}


function generateRandomMessage() {
    let keys = Object.keys(random); // [ 'animals', 'horoscope', 'question' ]
    var len = keys.length; // 3
    let index = Math.floor(Math.random() * len); // Generate a random index between 0 to 3 ??
    let key = keys[index]; // Store the picked key name in a variable, which should be 'animals', 'horoscope' or 'question'

    // Randomly choose two values and store them in a variable separately
    let value1 = random[key][0][Math.floor(Math.random() * random[key][0].length)];
    let value2 = random[key][1][Math.floor(Math.random() * random[key][1].length)];

    // Return a formatted message
    switch (key) {
        case "animals":
            return `A ${value1} will be your best ${value2} in the future.`;
            break;
        case "horoscope":
            return `Today, you will see a ${value1} ${value2}.`;
            break;
        case "question":
            return `Do the ${value1} like to eat ${value2}?`;
            break;
        default:
            return undefined;
            break;
    }
}

$(document).ready(function() {
    $("#btn").click(function() {
            let randomMessage = generateRandomMessage();
            $("#message").html(randomMessage);
        })
        //console.log(message);
});