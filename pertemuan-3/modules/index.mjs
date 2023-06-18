import { members, users } from "./data.mjs";
import { members as members_2 } from "./data_2.mjs";

members.forEach((member) => console.log(`Nama Member: ${member.name}`));
members_2.forEach((member) => console.log(`Nama Member: ${member.name}`));
users.forEach((user) => console.log(`Nama User: ${user.name}`))