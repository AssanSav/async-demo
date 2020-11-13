console.log("Before")
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repositories => getCommits(repositories[0]))
  .then(commits => console.log("Commits:", commits))
  .catch(err => console.log(err.message))
console.log("After")


function getUser(id) {
  console.log("Reading a user from database...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubUsername: "Assam" })
    }, 2000)
  })
}

function getRepositories(username) {
  console.log("Calling the user repositories...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Repo 1", "Repo 2", "Repo 3"])
    }, 2000)
  })
}

function getCommits(repo){
  console.log("Fetching repo commits...")
  return new Promise((resolve, reject) => {
    resolve( ["Commit 1", "Commit 2", "Commit 3"])
  }, 2000)
}