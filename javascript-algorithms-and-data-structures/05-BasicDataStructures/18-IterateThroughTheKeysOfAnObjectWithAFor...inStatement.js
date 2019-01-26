let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(users) {
  // change code below this line
  let online_users = 0;
  for (let user in users) {
    if(users.hasOwnProperty(user) && users[user].online) {
      online_users++;
    }
  }
  return online_users;
  // change code above this line
}

console.log(countOnline(users));