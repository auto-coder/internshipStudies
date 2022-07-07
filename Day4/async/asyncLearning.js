
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// let result = myCalculator(5, 5);
// myDisplayer(result);



// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);



// setTimeout(myFunction, 1000);
// function myFunction() {
//     document.getElementById("demo").innerHTML = "I love You !!";
// }



// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 



// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );



// let myPromise = new Promise(function(myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "mycar.html");
//   req.onload = function() {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );


// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();



// async function getFile() {
//     let myPromise = new Promise(function(resolve) {
//       let req = new XMLHttpRequest();
//       req.open('GET', "mycar.html");
//       req.onload = function() {
//         if (req.status == 200) {
//           resolve(req.response);
//         } else {
//           resolve("File not Found");
//         }
//       };
//       req.send();
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   getFile();



// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();



// let givenName;
// setTimeout(() => {
//   givenName = "Teknasyon";
//   console.log(asyncExample());
// }, 3000);
// function asyncExample() {
//   return `Execution of "asyncExample()" function, and givenName is "${givenName}".`;
// }
// console.log(asyncExample());
// console.log("World.");


(function () {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  console.log("3");
})();