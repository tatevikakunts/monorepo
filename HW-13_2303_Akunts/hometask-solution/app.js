const AGE = 18;
const CONTRACT = 2022;
const NAME = "Player";

const ns = {
  gk: 3,
  df: 7,
  mf: 8,
  fw: 4,
};

const team = {};

// const _staff = [];

for (key in ns) {
  for (let i = 0; i < ns[key]; i++) {
    team.push({
      fName: `${NAME}_${key}_${i + 1}`,
      position: key,
      age: AGE + Math.floor(Math.random() * Math.floor(7)),
      contract: CONTRACT + Math.floor(Math.random() * Math.floor(4)),
    });
  }
}

// const staff = [
//   "gk",
//   "gk",
//   "gk",
//   "df",
//   "df",
//   "df",
//   "df",
//   "mf",
//   "mf",
//   "mf",
//   "fw",
//   "coach",
// ];

// for (let i = 0; i < staff.length; i++) {}
const club = {
  clubName: "Zarya",
  year: 1925,
  city: "Tomsk",
  team: team,
};

// const club = {
//   clubName: "Zarya",
//   year: 1925,
//   city: "Tomsk",
//   team: [
//     {
//       fName: "Player_1",
//       position: "gk",
//       age: 18,
//       contract: 2022,
//     },
//   ],
// };
