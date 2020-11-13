
// Resolved promise
Promise.resolve({id: 1, username: "Assam"})
  .then(result => console.log(result))

// Rejected promise 
Promise.reject(new Error("Reason of rejection..."))
  .catch(error => console.log(error))

// Simulate two promises fetching from different endpoints
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Fetching Api 1...")
    resolve("Promise 1")
  }, 2000);
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Fetching Api 2...")
    resolve("Promise 2")
  }, 2000);
})

const p3 = new Promise((reject) => {
  setTimeout(() => {
    console.log("Fetching Api 1...")
    reject(new Error("Something went wrong"))
  }, 2000);
})

Promise.all([p1, p2, p3])
  .then(result => console.log(result))
  .catch(err => console.log("Error", err.message))