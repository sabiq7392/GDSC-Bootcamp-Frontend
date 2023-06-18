// @ts-check

/**
 * @param {{ name: string, title: string, age: number }} param0 
 */
function printWelcome({ name, title, age  }) {
  console.log(`Selamat datang ${name}`);
  console.log(`${name} adalah ${title}`);
  console.log(`${name} berumur ${age}`);
} 

printWelcome({
  title: "Pengajar",
  name: "Sabiq",
  age: 20,
});
printWelcome({
  name: "Nurul",
  title: "Murid",
  age: 21,
});
