// const names = ["Michael", "Hannah", "Jonas"];

// const findName = names.find((name) => name === "Jonas");

// console.log(findName);

const mahasiswa = [
  {
    name: "Sabiq",
    age: 21,
  },
  {
    name: "Dery",
    age: 19,
  },
  {
    name: "Aufa",
    age: 27,
  },
];

const findMahasiswa = mahasiswa.find((_mahasiswa) => _mahasiswa.age < 27);

console.log(findMahasiswa);