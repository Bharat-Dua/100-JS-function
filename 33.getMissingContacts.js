//* 33.getMissingContacts

//? Write a function named getMissingContacts that receives one parameter:

// a Map of contacts, where the key is a string representing a userId and the value is an array of user ids - contactsMap
// The function should return a new Map, where the values are the contacts missing from each user.

//* Approach 1 : Using a Set to find missing contacts

function getMissingContacts(contactsMap) {
  const resultMap = new Map();
  const allUsersIds = Array.from(contactsMap.keys());

  contactsMap.forEach((contactIds, userId) => {
    const missingContacts = [];

    allUsersIds.forEach((id) => {
      if (id === userId) {
        return;
      }

      if (!contactIds.includes(id)) {
        missingContacts.push(id);
      }
    });

    resultMap.set(userId, missingContacts);
  });

  return resultMap;
}

export { getMissingContacts };

//* Approach 2
function getMissingContacts(contactsMap) {
  // Create a new Map to store the missing contacts for each user
  const missingContactsMap = new Map();
  // Iterate over each user in the contactsMap
  contactsMap.forEach((contacts, userId) => {
    // Create a Set to store the contacts of the current user
    const userContactsSet = new Set(contacts);
    // Iterate over each user in the contactsMap again to find missing contacts
    contactsMap.forEach((otherContacts, otherUserId) => {
      // If the current user is not the same as the other user and the other user is not
      // in the current user's contacts, add the other user to the missingContactsMap
      if (userId !== otherUserId && !userContactsSet.has(otherUserId)) {
        missingContactsMap.set(userId, [
          ...(missingContactsMap.get(userId) || []),
          otherUserId,
        ]);
      }
    });
  });
  // Return the missingContactsMap
  return missingContactsMap;
}

export { getMissingContacts };

//* Approach 3
function getMissingContacts(contactsMap) {
  // Create a new Map to store the missing contacts
  let missingContactsMap = new Map();

  // Get all user IDs
  let allUserIds = Array.from(contactsMap.keys());

  // Iterate over each user in the contactsMap
  contactsMap.forEach((contacts, userId) => {
    // Find the missing contacts for the current user
    let missingContacts = allUserIds.filter(
      (id) => id !== userId && !contacts.includes(id)
    );
    // Set the missing contacts in the new Map
    missingContactsMap.set(userId, missingContacts);
  });

  return missingContactsMap;
}

// Example usage
let contactsMap = new Map([
  ["user1", ["user2", "user3"]],
  ["user2", []],
  ["user3", []],
]);

console.log(getMissingContacts(contactsMap));
// Output: Map(3) { 'user1' => [], 'user2' => [ 'user1', 'user3' ], 'user3' => [ 'user1', 'user2' ] }
