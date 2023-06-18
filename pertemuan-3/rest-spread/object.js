const object1 = {
  name: "sabiq",
  age: 21,
  address: {
    kota: "Bogor",
  },
  peliharaan: ["Monyet"],
};
const object2 = {
  major: "informatics",
  hobby: "koding",
  address: {
    kecamatan: "Bojonggede",
  },
  peliharaan: ["Kucing", "Anjing"],
};

const objectGabungan = {
  ...object2,
  ...object1,
  address: {
    ...object1.address,
    ...object2.address,
  },
  peliharaan: [
    ...object1.peliharaan,
    ...object2.peliharaan
  ],
};


console.log(objectGabungan)