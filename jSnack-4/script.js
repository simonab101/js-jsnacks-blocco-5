const students = [
  { id: 101, nome: 'Mario', voti: [25, 28, 20, 27] },
  { id: 102, nome: 'Luca', voti: [30, 26, 28, 24] },
  { id: 103, nome: 'Paolo', voti: [28, 30, 29, 26] },
  { id: 104, nome: 'Giuseppe', voti: [22, 24, 20, 21] },
  { id: 120, nome: 'Giovanni', voti: [27, 30, 24, 28] },
  { id: 121, nome: 'Carla', voti: [30, 28, 29, 27] },
];

// Creazione lista targhe con nome in maiuscolo
const listaTarghe = students.map((student) => ({
  id: student.id,
  nome: student.nome.toUpperCase(),
}));

console.log(listaTarghe);

// Creazione lista studenti con totale voti > 70
const studentiVotiAltissimi = students.filter((student) =>
  student.voti.reduce((acc, voto) => acc + voto, 0) > 70
);

console.log(studentiVotiAltissimi);

// Creazione lista studenti con totale voti > 70 e id > 120
const studentiVotiAltissimiEIdAlto = students.filter(
  (student) =>
    student.voti.reduce((acc, voto) => acc + voto, 0) > 70 && student.id > 120
);

console.log(studentiVotiAltissimiEIdAlto);
