//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(firstName, prop) {
// Only change code below this line
var contact;

for (var i=0; i<contacts.length; i++) {
  if (contacts[i].firstName === firstName) {
    contact = contacts[i];
    break;
  }
}

if (contact) {
  if (contact.hasOwnProperty(prop)) {
    return contact[prop];
  } else {
    return "No such property";
  }
} else {
  return "No such contact";
}
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");