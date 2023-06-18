const mahasiswaName = "Sabiq";
const mahasiswaAge = 20;
const mahasiswaMajor = "Teknik Informatika";

const mahasiswa = [
  {
    name: "Sabiq",
    age: 20,
    major: "Teknik Informatika",
    hobbies: [
      "catur",
      "game",
    ]
  },
  {
    name: "Nurul",
    age: 21,
    major: "Sistem Informasi",
    hobbies: [
      "traveling",
      "main",
    ]
  }
];

mahasiswa.forEach((mhs) => {
  console.log(`Selamat datang ${mhs.name}`);
  console.log(`Hobbies ${mhs.hobbies.join(",")}`)
  // mhs.hobbies.forEach((hobby) => {
  //   console.log("Hobby", hobby)
  // })
});