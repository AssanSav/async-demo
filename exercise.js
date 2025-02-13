
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function notifyCustomer() {
  try {
    const customer = await getCustomer(1)
    console.log("Customer:", customer)
    if (customer.isGold) {
      const movies = await getTopMovies()
      console.log("Top movies:", movies)
      const email = await sendEmail(customer.email, movies)
      console.log(`Email sent to ${email}`)
    }
  }
  catch (err) {
    console.log(err)
  }
}
notifyCustomer()

function getCustomer(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email@exemple.com'
      });
    }, 4000);
  })

}

function getTopMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })

}

function sendEmail(email, movies, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(email);
    }, 4000);
  })

}