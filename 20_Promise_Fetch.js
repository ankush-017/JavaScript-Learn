/*   The Promise object represents the eventual completion
 (or failure) of an asynchronous operation 
and its resulting value.  */

/* -------  A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.  --------  */

// ------------  Start ---------------- //

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();  // Resolve the promise after the async task is complete
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise consumed");
});

// ----------------------------------//

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: "ankush017", email: "ak4001493@gmail.com"})
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})

//----------------------------------------//

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"ak",password:112233})
        }
        else{
            reject('ERROR Something went wrong')
        }
    },1000)
});
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((usrname)=>{
//     console.log(usrname);
// }).catch((e)=>{
//     console.log(e);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })

async function consumePromiseFour(){
    try{
        const response = await promiseFour
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
}

consumePromiseFour();

// ---------------  Fetch --------------------------//
// ****** 1st Method *******//

async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data); 
    }
    catch(e){
        console.log(e);
    }
}
getAllUser();

//****** 2nd Method *******//

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((e)=>{
//     console.log(e);
// })