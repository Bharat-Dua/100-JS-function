//* 37.fetchGitHubName

//? Write a function named fetchGitHubName that receives 1 parameter

// a string representing a GitHub username
// The function should return a Promise that resolves to the full name of the GitHub user with this username. If the user does not exist, the Promise should resolve to null.

// PS: here's the link to the GitHub API: https://docs.github.com/en/rest/users. It's your job to find the correct endpoint to call.

/*
Example 1

Input

username="addyosmani"
Output
a Promise that resolves with the value below:
"Addy Osmani"

*/

async function fetchGitHubName(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
      const user = await response.json();
      return user.name;
    }

    return null;
  } catch (err) {
    console.error("Failed to fetch GitHub user", err);
    return null;
  }
}

export { fetchGitHubName };
