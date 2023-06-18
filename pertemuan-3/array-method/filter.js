const mahasiswa = [
  {
    id: 12308123,
    name: "Sabiq",
    age: 21,
  },
  {
    id: 123218,
    name: "Dery",
    age: 19,
  },
  {
    id: 12312387,
    name: "Aufa",
    age: 27,
  },
];

const findMahasiswa = mahasiswa.filter((_mahasiswa) => _mahasiswa.id === 123218);

console.log(findMahasiswa[0]);