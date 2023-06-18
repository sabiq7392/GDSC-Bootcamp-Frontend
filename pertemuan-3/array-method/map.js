const names = ["Michael", "Hannah", "Jonas"];

// const formattedName = [];
// for (let i = 0; i < names.length; i++) {
//   formattedName.push(`Mr/Mrs ${names[i]}`)
// }

const formattedName = names.map((name) => {
  if (name === "Jonas") {
    return "Jonas Ganteng";
  } else {
    return `Mr/Mrs ${name}`
  }
});

console.log(formattedName)