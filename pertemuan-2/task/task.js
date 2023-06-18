// @ts-check

/**
 * @point_plus jika strict type (//@ts-check) variables, function return, function params
 */

/**
 * @TODO_1
 * Create array of object users (5 users).
 * Object has property: name, age, major.
 * Note: Use const instead var.
 */
var users;

/**
 * @TODO_2
 * Create all function: Show all data users.
 * Hint: use for/for-of
 * Note: Use arrow function and const
 */
function all() {}

/**
 * @TODO_3
 * Create store function: Add data to users.
 * Hint: use push method.
 * Note: Use arrow function and const.
 */
function store(user) {}

/**
 * @TODO_4
 * Create update function: Edit data user.
 * Hint: just re-assign.
 * Note: Use arrow function and const.
 */
function update(index, user) {}


/**
 * @TODO_5
 * Create destroy function: Delete data user.
 * Hint: use splice method.
 * Note: Use arrow function and const.
 */
function destroy(index) {}

const main = () => {
  console.log("# Get All Users");
  all();

  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "informatics",
  };
  store(newUser);
  
  console.log("# Edit User: Isfa"); 
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(1, editedUser);

  console.log("# Delete User: Nurul");
  destroy(2);
};

main();


/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = {
  users,
  all,
  store,
  update,
  destroy,
};