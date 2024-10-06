const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls , Cryptography , network
  setTimeout(function () {
    console.log("Async task is complete!!");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

promiseOne.finally();

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is complete!!");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Resolved");
});

// data is passed from resolve to .then
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "dheeraj", email: "example@gmail.com" });
  }, 1000);
});

promiseThree.then(function (res) {
  console.log(res);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "dheeraj", age: 23 });
    } else {
      reject("ERROR : Request rejected");
    }
  }, 1000);
});

promiseFour
  .then(function (res) {
    console.log(res);
    return res.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(function () {
    console.log("Finally Reached - The promise is either Rejected or Resolved");
  }, 1000);

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "admin", gender: "male" });
    } else {
      reject("Error : promise 5 went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
