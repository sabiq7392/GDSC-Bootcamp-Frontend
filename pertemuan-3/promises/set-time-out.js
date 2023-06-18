// @ts-check
"use strict"

// function download() {
//   setTimeout(() => {
//     console.log("downloading...");
//   }, 3000);
// }

// function verify() {
//   setTimeout(() => {
//     console.log("verify file...");
//   }, 2000);
// }

// function notify() {
//   console.log("download complete");
// }

// function main() {
//   download();
//   verify();
//   notify();
// }

// main();

// fetch();

// download
// notify
// verify




/** @solusi_pertama */
// function download(callVerify) {
//   setTimeout(() => {
//     console.log("downloading...");
//     callVerify();
//   }, 3000);
// }

// function verify(callNotify) {
//   setTimeout(() => {
//     console.log("verify file...");
//     callNotify();
//   }, 2000);
// }

// function notify() {
//   console.log("download complete");
// }

// async function main() {
//   download(function() {
//     verify(function() {
//       notify();
//     });
//   });
// }

// main();

/** @solusi_kedua */
function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Downloading...");
    }, 3000);
  });
}

function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Verify file...");
    }, 2000);
  });
}

function notify() {
  console.log("Download complete");
}

download()
  .then((results) => {
    console.log(results);
    return verify();
  })
  .then((results) => {
    console.log(results);
    notify();
  })
  .catch((error) => {
    console.error(error);
  })

// async function main() {
//   const _download = await download();
//   console.log(_download);
//   const _verify = await verify();
//   console.log(_verify);
//   const _notify = notify();
// }

// main();