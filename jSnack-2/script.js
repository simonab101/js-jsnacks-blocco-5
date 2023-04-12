const students = [
  {
    nome: 'Mario',
    cognome: 'Rossi',
    matricola: '012345',
    voti: [18, 22, 20],
  },
  {
    nome: 'Luca',
    cognome: 'Verdi',
    matricola: '123456',
    voti: [28, 24, 25],
  },
  {
    nome: 'Paolo',
    cognome: 'Bianchi',
    matricola: '234567',
    voti: [30, 28, 27],
  },
];

const studentsWithAvg = students.map((student) => {
  const { nome, cognome, matricola, voti } = student;
  const avg = voti.reduce((acc, voto) => acc + voto, 0) / voti.length;
  return {
    'nome-cognome': `${nome} ${cognome}`,
    matricola,
    'media-voti': avg,
  };
});

console.log(studentsWithAvg);
